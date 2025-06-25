import csv

extensionTeachers = ['Robinson', 'Black', 'Vyas', 'Treleaven', 'Penn', 'Jones']

PATH = 'ppl.csv'

with open(PATH, 'r') as f:
  reader = csv.reader(f)
  header = next(reader)

  print('{')
  for row in reader:
    print(f"'{row[2].split()[0]} {row[2].split()[1][:1]}': [", end='')
    subj = row[3:11]
    for index, raw  in enumerate(subj):
      s = str(raw.split('-')[0]).strip()
      if s == "Richmond" and index == 2:
        s = s + "-drama"
      elif s == "Phelps" and index == 5:
        s = s + "-anc"
      elif s in extensionTeachers and index > 5:
        s = s + "-ext"
      print(f"'{s}', ", end='')
    print('],')
  print('}')
