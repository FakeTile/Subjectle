import requests, csv

PATH = 'ppl.csv'

sheet_id = "1YZgJY9xP_3sUMjUdk3DHC6j7Y_hMCOrjDeXfjJVG7tk"
sheet_name = "Form responses 1"
url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/gviz/tq?tqx=out:csv&sheet={sheet_name}"

response = requests.get(url)

with open('ppl.csv', 'wb') as f:
  f.write(response.content)


PATH = 'ppl.csv'
extensionTeachers = ['Robinson', 'Black', 'Vyas', 'Treleaven', 'Penn', 'Jones', 'Heka', 'Parkinson']
ext2Teachers = ['Black', 'Bryan']

names = []
data = {}

with open(PATH, 'r') as f:
  reader = csv.reader(f)
  header = next(reader)

  for row in reader:
    first, last = row[2].split()
    fname = first + ' ' + last[0]
    names.append(fname)
    subj = row[5:14]
    fsubj = []
    for index, raw  in enumerate(subj):
      s = str(raw.split('-')[0]).strip()
      if not raw:
        s = "Unknown"
      elif s == "Richmond" and index == 2:
        s = s + "-drama"
      elif s == "Phelps" and index == 5:
        s = s + "-anc"
      elif s == "Woodley" and index == 2:
        s = s + "-phys"
      elif s in extensionTeachers and 5 < index and (s != 'Black' or index != 8):
        s = s + "-ext"
      elif s in ext2Teachers and index == 8:
        s = s + "-ext-2"
      fsubj.append(s)
    data[fname] = fsubj

def write_first_line(path: str, content: str):
  """
  MAKE SURE TO  INCLUDE \n
  """
  try:
    with open(path, 'r') as f:
      lines = f.readlines()

    if lines:
      lines[0] = content

    with open (path, 'w') as f:
      f.writelines(lines)
  except:
    print("You fucked up")

write_first_line('subjectle/shared/textbox.js',
  f'const studentNames = {names};\n'
)

write_first_line('subjectle/shared/game.js', 
  f'const data = {data};\n'
)

write_first_line('subjections/common/game.js',
  f'const data = {data};\n'
)

print('Wrote to textbox.js, game.js (for subjectle), and game.js (for subjections)')
