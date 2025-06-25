import requests

PATH = 'ppl.csv'

sheet_id = "1YZgJY9xP_3sUMjUdk3DHC6j7Y_hMCOrjDeXfjJVG7tk"
sheet_name = "Form responses 1"
url = f"https://docs.google.com/spreadsheets/d/{sheet_id}/gviz/tq?tqx=out:csv&sheet={sheet_name}"

response = requests.get(url)

with open('ppl.csv', 'wb') as f:
  f.write(response.content)