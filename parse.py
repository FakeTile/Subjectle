import csv, requests

PATH = 'ppl.csv'

sheet_id = "1YZgJY9xP_3sUMjUdk3DHC6j7Y_hMCOrjDeXfjJVG7tk"
sheet_name = "Form responses 1"
url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/gviz/tq?tqx=out:csv&sheet={sheet_name}"

response = requests.get(url)

with open('ppl.csv', 'wb') as f:
  f.write(response.content)

with open(PATH, 'r') as f:
  reader = csv.reader(f)
  header = next(reader)

  print('{')
  for row in reader:
    print(f"'{row[2]}': [", end='')
    subj = row[3:11]
    for raw in subj:
      s = str(raw.split('-')[0]).strip()
      print(f"'{s}', ", end='')
    print('],')
  print('}')
