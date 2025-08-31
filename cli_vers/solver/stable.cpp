#include <bits/stdc++.h>
#include "bake.hpp"
using namespace std;

inline void makeGuess(bitset<NUM_STUDENTS>& mask, int guess, int guesee) {
  // Modifies mask in place

  // array<ulong, 2> as NUM_STUDENTS < 128
  auto survivorMask = survivorTable[guess][guesee];
  uint64_t* maskWords = reinterpret_cast<uint64_t*>(&mask);

  // and pre computed mask with cur
  maskWords[0] &= survivorMask[0];
  maskWords[1] &= survivorMask[1];
}

pair<long double, int> recurse(
  bitset<NUM_STUDENTS>& candidateMask,
  int curDepth,
  int& maxDepth)
{  
  // maxdepth is minimum depth from other guesses
  // if we get further than this, its a bad guess and we can
  // just ignore it
  if (curDepth > maxDepth) return {MAXFLOAT, -1};
  long double minGuesses = MAXFLOAT;
  int bestGuessId;

  long double numCandidates = (long double) candidateMask.count();

  // given n candidates, best case is 1 + (n-1/n)
  // however because we dont divide until the end, its this
  long double bestCase = (numCandidates * 2) - 1;

  // try candidates first as they are likely to be the best guess
  // better guesses first are good for AB pruning
  for (size_t i = candidateMask._Find_first(); i < NUM_STUDENTS; i = candidateMask._Find_next(i)) {
    long double numGuesses = 0;
    for (size_t j = candidateMask._Find_first(); j < NUM_STUDENTS; j = candidateMask._Find_next(j)) {
      // if guess == guesee we know its 1 guess so no point scoring
      if (i == j) {
        numGuesses += 1.0;
        continue;
      }

      bitset<NUM_STUDENTS> newMask = candidateMask;
      makeGuess(newMask, i, j);

      // if there is 1 candidate, we can skip recursion and just guess them
      if (newMask.count() == 1) { 
        numGuesses += 2; 
        continue; 
      }

      numGuesses += recurse(newMask, curDepth + 1, maxDepth).first + 1;

      // more AB pruning
      if (numGuesses > minGuesses) break;
    }

    // if guess is the best possible, dont need to keep searching
    if (numGuesses == bestCase) {
      maxDepth = curDepth;
      return {bestCase / numCandidates, i};
    }

    if (numGuesses < minGuesses) {
      minGuesses = numGuesses;
      bestGuessId = i;
    }
  }

  // same as above, but testing non-candidates
  // most of these will be pruned
  for (int i = 0; i < NUM_STUDENTS; i++) {
    if (candidateMask.test(i)) continue;
    long double numGuesses = 0;
    for (size_t j = candidateMask._Find_first(); j < NUM_STUDENTS; j = candidateMask._Find_next(j)) {
      if (i == j) {
        numGuesses += 1.0;
        continue;
      }
      bitset<NUM_STUDENTS> newMask = candidateMask;
      makeGuess(newMask, i, j);

      // if there is one candidate left
      // we can just assume they'll be picked next turn
      if (newMask.count() == 1) { 
        numGuesses += 2; 
        continue; 
      }

      numGuesses += recurse(newMask, curDepth + 1, maxDepth).first + 1;
      if (numGuesses > minGuesses) break;
    }
    if (numGuesses == bestCase) {
      maxDepth = curDepth;
      return {bestCase / numCandidates, i};
    }

    if (numGuesses < minGuesses) {
      minGuesses = numGuesses;
      bestGuessId = i;
    }
  }

  // finally divide, 
  // return average number of guesses when playing optimally
  // given the gamestate
  maxDepth = curDepth;
  return {minGuesses / numCandidates, bestGuessId};
}

void calculateRank() {
  // foreach person get average num of guesses
  vector<pair<long double, int>> guesses;

  for (int i = 0; i < NUM_STUDENTS; i++) {
    long double numGuesses = 0;
    bitset<NUM_STUDENTS> mask;
    mask.set();
    for (size_t j = mask._Find_first(); j < NUM_STUDENTS; j = mask._Find_next(j)) {
      if (i == j) {
        numGuesses += 1.0;
        continue;
      }
      auto newMask = mask;
      makeGuess(newMask, i, j);
      int maxDepth = 6;
      long double ng = recurse(newMask, 1, maxDepth).first + 1.0;

      // this is the smartest thing ever done ever
      // too complex for inline comments
      ng *= newMask.count();
      mask ^= newMask;

      numGuesses += ng;  
    }
    numGuesses /= (long double) NUM_STUDENTS;
    guesses.push_back({numGuesses, i});
  }


  sort(guesses.begin(), guesses.end());

  cout << setprecision(15);
  for (auto& p: guesses) {
    cout << p.first << ' ' << idToName[p.second] << '\n'; 
  }
}

int main() {
  calculateRank();
  return 0;
}
