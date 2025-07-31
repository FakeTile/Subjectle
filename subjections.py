import random
from ppl import data

classes = {
  #eng
  "Standard English - Richmond": [],
  "Advanced English - White": [],
  "Advanced English - Court": [],
  "Advanced English - Penn": [],
  "Advanced English - Treleaven": [],
  "Advanced English - Phelps": [],
  "Extension English - Penn": [],
  "Extension English - Treleaven": [],

  #math
  "Standard Maths - Weekes": [],
  "Advanced Maths - Unity": [],
  "Advanced Maths - Woodley": [],
  "Extension Maths - Jones": [],
  "Extension Maths - Vyas": [],
  "Extension Maths - Black": [],
  "Extension Maths - Robinson": [],

  #l3
  "Chemistry - Silibek": [],
  "Economics - Clarke": [],
  "Physics - Herrman": [],
  "Society & Culture - Metson": [],
  "Line 3 Biology - Bullock": [],
  "Drama - Richmond": [],
  "French Continuers - Hirsch": [],

  #l4
  "Health & Movement Science - Tweddle": [],
  "Line 4 Physics - Smith": [],
  "Software Engineering - Marsh": [],
  "Modern History - Heka": [],
  "Line 4 Biology - Bullock": [],
  "Visual Art - Milnes": [],
  "Music - Wellings": [],

  #l5
  "Line 5 Physics - Smith": [],
  "Biology - Parkinson": [],
  "Engineering Studies - Taylor": [],
  "Chemistry - Rayment": [],
  "Legal Studies - Ireland": [],
  "Geography - Limbrey": [],

  #l6
  "Japanese Continuers - Naito": [],
  "Design & Technology - Groves": [],
  "Chemistry - McGavock": [],
  "German Continuers - Moller": [],
  "Business Studies - Foran": [],
  "Ancient History - Phelps": [],

  #l7
  "Biology - Doyle": [],
  "Business Studies - Tsaccounis": [],
  "Line 7a Studies of Religion - Offner": [],
  "Line 7b Studies of Religion - Offner": []
}

m = {
    "1Unity": "Advanced Maths - Unity",
    "1Woodley": "Advanced Maths - Woodley",
    "1Weekes": "Standard Maths - Weekes",
    "1Jones": "Extension Maths - Jones",
    "1Vyas": "Extension Maths - Vyas",
    "1Robinson": "Extension Maths - Robinson",
    "1Black": "Extension Maths - Black",

    "2Richmond": "Standard English - Richmond",
    "2White": "Advanced English - White",
    "2Phelps": "Advanced English - Phelps",
    "2Penn": "Advanced English - Penn",
    "2Treleaven": "Advanced English - Treleaven",
    "2Court": "Advanced English - Court",

    "3Silibek": "Chemistry - Silibek",
    "3Clarke": "Economics - Clarke",
    "3Herrman": "Physics - Herrman",
    "3Metson": "Society & Culture - Metson",
    "3Bullock": "Line 3 Biology - Bullock",
    "3Richmond-drama": "Drama - Richmond",
    "3Hirsch": "French Continuers - Hirsch",

    "4Tweddle": "Health & Movement Science - Tweddle",
    "4Smith": "Line 4 Physics - Smith",
    "4Marsh": "Software Engineering - Marsh",
    "4Bullock": "Line 4 Biology - Bullock",
    "4Milnes": "Visual Art - Milnes",
    "4Wellings": "Music - Wellings",
    "4Heka": "Modern History - Heka",

    "5Smith": "Line 5 Physics - Smith",
    "5Parkinson": "Biology - Parkinson",
    "5Taylor": "Engineering Studies - Taylor",
    "5Rayment": "Chemistry - Rayment",
    "5Ireland": "Legal Studies - Ireland",
    "5Limbrey": "Geography - Limbrey",

    "6Naito": "Japanese Continuers - Naito",
    "6Groves": "Design & Technology - Groves",
    "6McGavock": "Chemistry - McGavock",
    "6Moller": "German Continuers - Moller",
    "6Foran": "Business Studies - Foran",
    "6Phelps-anc": "Ancient History - Phelps",

    "7Doyle": "Biology - Doyle",
    "7Tsaccounis": "Business Studies - Tsaccounis",
    "7Treleaven-ext": "Extension English - Treleaven",
    "7Penn-ext": "Extension English - Penn",
    "7Offner": "Line 7a Studies of Religion - Offner",
    
    "8Offner": "Line 7b Studies of Religion - Offner"
}

keys = list(classes.keys())

for s, cs in data.items():
  for (i, c) in enumerate(cs):
    fi = m.get(str(i+1)+c, None)
    if fi:
      classes[fi].append(s)

def render(board: list[list[str]]):
  MAX_LEN = len("Abdulmohimen T")
  
  for r in range(4):
    if len(board[r]) == 4:
      print("+----------------+ " * 4)
      print("|                | " * 4)
      for c in range(4):
        contents = board[r][c].center(MAX_LEN, ' ')
        print(f'| {contents} | ', end='')
      print()
      print("|                | " * 4)
      print("+----------------+ " * 4)
    else:
      print('+' + '-' * 73 + '+')
      print('|' + board[r][4].center(73, ' ') + '|')
      print('|' + (', '.join(board[r][:4])).center(73, ' ') + '|')
      print ('|' + ' ' * 73 + '|')
      print('+' + '-' * 73 + '+')


for c, p in classes.items():
  if (len(p) < 4):
    print(c)
    print(p)

def num_shared_classes(students: list[str]) -> int:
  out = 0
  for c in classes.values():
    out += all(student in c for student in students) 
  return out

def gen_board() -> list[list[str]]:
  used_students = []
  out = []
  k = keys.copy()
  cl = classes.copy()
  random.shuffle(k)
  i = 0
  
  while len(out) != 4:
    i %= len(k)
    # remove any used students from the class
    class_filtered = [s for s in cl[k[i]] if s not in used_students]

    if len(class_filtered) < 4:
      i += 1
      continue
    while True:
      students = random.sample(class_filtered, 4) 
      if num_shared_classes(students) == 1:
        break

    students.append(k[i])
    out.append(students)

    used_students.extend(class_filtered)
    i += 1

  return out

def shuffle_board(board):
  flat = [name for row in board for name in row]

  random.shuffle(flat)
  for i in range(4):
    for j in range(4):
      board[i][j] = flat[i* 4 + j]

def is_correct(board, guess):
  try:
    guesses = sorted(guess.split(', '))
    for row in board:
      if sorted(row[:4]) == guesses:
        return row
  except:
    return False

def find_index(board, person):
  for i in range(4):
    for j in range(4):
      if board[i][j] == person:
        return (i, j)

board_solved = gen_board()
classes = [r[4] for r in board_solved]

board = [row[:4] for row in board_solved]
shuffle_board(board)

num_correct = 0

while True:
  # play

  render(board)
  guess = input("enter guess (a, b, c, d): ")
  if guess == 'cheater':
    render(board_solved)
  ans = is_correct(board_solved, guess)
  if ans:
    for i in range(4):
      (r, c) = find_index(board, ans[i])
      board[num_correct][i], board[r][c] = board[r][c], board[num_correct][i]
    board[num_correct].append(ans[4])
    num_correct += 1
