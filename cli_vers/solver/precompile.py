import csv

INPUT_FILE = "ppl.csv"
OUTPUT_FILE = "bake.hpp"

student_id = 1
extensionTeachers = ['Robinson', 'Black', 'Vyas', 'Treleaven', 'Penn', 'Jones']

subj_to_id = {
  "Unity": 0,
  "Woodley": 1,
  "Jones": 2,
  "Vyas": 3,
  "Robinson": 4,
  "Black": 5,

  "White": 6,
  "Phelps": 7,
  "Penn": 8,
  "Treleaven": 9,
  "Court": 10,

  "Silibek": 11,
  "Rayment": 11,
  "McGavock": 11,

  "Herrman": 12,
  "Smith": 12,

  "Bullock": 13,
  "Parkinson": 13,
  "Doyle": 13,

  "Foran": 14,
  "Tsaccounis": 14,

  "Offner": 15,

  "Treleaven-ext": 16,
  "Penn-ext": 17,

  "Jones-ext": 18,
  "Vyas-ext": 19,
  "Robinson-ext": 20,
  "Black-ext": 21,

  "Weekes": 22,
  "Richmond": 23,
  "Clarke": 24,
  "Emaneni": 25,
  "Metson": 26,
  "Richmond-drama": 27,
  "Free": 28,
  "Hirsch": 29,
  "Tweddle": 30,
  "Marsh": 31,
  "Heka": 32,
  "Milnes": 33,
  "Wellings": 34,
  "Taylor": 35,
  "Ireland": 36,
  "Limbrey": 37,
  "Naito": 38,
  "Groves": 39,
  "Moller": 40,
  "Phelps-anc": 41
}

groups = {
  0: (0,1,2,3,4,5),
  1: (0,1,2,3,4,5),
  2: (0,1,2,3,4,5),
  3: (0,1,2,3,4,5),
  4: (0,1,2,3,4,5),
  5: (0,1,2,3,4,5),

  6: (6,7,8,9,10),
  7: (6,7,8,9,10),
  8: (6,7,8,9,10),
  9: (6,7,8,9,10),
  10: (6,7,8,9,10),

  16: (16,17),
  17: (16,17),

  18: (18,19,20,21),
  19: (18,19,20,21),
  20: (18,19,20,21),
  21: (18,19,20,21),
}

data = []
takes = []

id_to_name = []

with open(INPUT_FILE) as f:
  reader = csv.reader(f)
  header = next(reader)

  for row in reader:
    subj = row[5:13]
    data.append([])
    takes.append([False] * 42)
    for index, raw  in enumerate(subj):
      s = str(raw.split('-')[0]).strip()
      if s == "Richmond" and index == 2:
        s = s + "-drama"
      elif s == "Phelps" and index == 5:
        s = s + "-anc"
      elif s in extensionTeachers and index > 5:
        s = s + "-ext"
      uid = subj_to_id[s]
      data[-1].append(uid)
      takes[-1][uid] = True
      if groups.get(uid):
        for item in groups[uid]:
          takes[-1][item] = True
    id_to_name.append(row[2])

def get_score(guess_idx, guesee_idx):
  out = 0
  for i in range(8):
    if data[guess_idx][i] == data[guesee_idx][i]:
      val = 1  # g
    elif takes[guesee_idx][data[guess_idx][i]]:
      val = 2  # y
    else:
      val = 0  # n
    out |= (val << (2 * i))
  return out

def get_survivor_mask_words(guess, guesee):
    score = get_score(guess, guesee)
    mask0 = 0
    mask1 = 0
    for cand in range(len(id_to_name)):
        valid = True
        for i in range(8):
            val = (score >> (2*i)) & 0b11
            if val == 0:  # grey
                if takes[cand][data[guess][i]]:
                    valid = False
                    break
            elif val == 1:  # green
                if data[guess][i] != data[cand][i]:
                    valid = False
                    break
            elif val == 2:  # yellow
                if not takes[cand][data[guess][i]] or data[guess][i] == data[cand][i]:
                    valid = False
                    break
        if valid:
            if cand < 64:
                mask0 |= (1 << cand)
            else:
                mask1 |= (1 << (cand - 64))
    return mask0, mask1

NUM_STUDENTS = len(id_to_name)

with open(OUTPUT_FILE, 'w') as f:
  f.write("#pragma once\n")
  f.write("#include <array>\n")
  f.write("#include <string_view>\n")
  f.write("#include <cstdint>\n")
  f.write("using namespace std;\n")

  f.write(f"constexpr int NUM_STUDENTS  = {len(id_to_name)};\n")

  f.write("constexpr array<string_view, NUM_STUDENTS> idToName = {\n")
  for name in id_to_name:
    f.write(f'  "{name}",\n')
  f.write("};\n")

  f.write("constexpr array<array<int, 8>, NUM_STUDENTS> classes = {{\n")
  for line in data:
    f.write('  {' + ','.join(map(str, line)) + '},\n')
  f.write('}};\n')

  f.write("constexpr array<array<bool, 42>, NUM_STUDENTS> takes = {{\n")
  for line in takes:
    f.write('  {' + ','.join(map(lambda x: '1' if x else '0', line)) + "},\n")
  f.write('}};\n')


  f.write("constexpr array<array<uint16_t, NUM_STUDENTS>, NUM_STUDENTS> scoreTable = {{\n")
  for i in range(len(id_to_name)):
    row = [str(get_score(i, j)) for j in range(len(id_to_name))]
    f.write("  {" + ",".join(row) + "},\n")
  f.write("}};\n")


  f.write("constexpr array<array<std::array<uint64_t, 2>, NUM_STUDENTS>, NUM_STUDENTS> survivorTable = {{\n")
  for guess in range(NUM_STUDENTS):
      f.write("  {{\n")
      for guesee in range(NUM_STUDENTS):
          w0, w1 = get_survivor_mask_words(guess, guesee)
          f.write(f"    {{{w0}ULL, {w1}ULL}},\n")
      f.write("  }},\n")
  f.write("}};\n")
