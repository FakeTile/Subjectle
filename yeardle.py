from random import choice
import csv

PATH = 'ppl.csv'


data = {}
extensionTeachers = ['Robinson', 'Black', 'Vyas', 'Treleaven', 'Penn', 'Jones']

with open (PATH, 'r') as f:
    reader = csv.reader(f)
    next(reader)
    for row in reader:
        first, last = row[2].split()
        
        subj = row[3:11]
        for index, raw  in enumerate(subj):
            s = str(raw.split('-')[0]).strip()
            if s == "Richmond" and index == 2:
                s = s + "-drama"
            elif s == "Phelps" and index == 5:
                s = s + "-anc"
            elif s in extensionTeachers and index > 5 < 8:
                s = s + "-ext"
            subj[index] = s
        
        data[f'{first} {last[0]}'] = subj

# green : same class
# yellow for eng/mathes - same faculty different class
# yellow : same subject different line yes yes - but how does

#ANSI escape codes for output text colour
GREEN = "\033[32m"
YELLOW = "\033[33m"
GREY = "\033[90m"
RESET = "\033[0m"

subjects = {
    "Jones": "Mathematics advanced",
    "Treleaven": "English advanced",
    "Clarke": "Economy",
    "Bullock": "Biology",
    "Ireland": "Legal studies",
    "McGavock": "Chemistry",
    "Jones-ext": "Mathematics extension",
    "Richmond": "English standard",
    "Richmond-drama": "Drama",
    "Hirsch": "French",
    "Rayment": "Chemistry",
    "Free": "Study",
    "Offner": "Studies of religon",
    "Unity": "Mathematics advanced",
    "Marsh": "Software engineering",
    "Smith": "Physics",
    "Naito": "Japanese",
    "Tsaccounis": "Business studies",
    "Penn": "English advanced",
    "Penn-ext": "English extension",
    "Treleaven-ext": "English extension",
    "Herrman": "Physics",
    "Emaneni": "Enterprise computing",
    "White": "English advanced",
    "Silibek": "Chemistry",
    "Tweddle": "Health & movement science",
    "Doyle": "Biology",
    "Phelps": "English advanced",
    "Parkinson": "Biology",
    "Vyas": "Mathematics advanced",
    "Taylor": "Engineering",
    "Groves": "Design & technology",
    "Vyas-ext": "Mathematics extension",
    "Black-ext": "Mathematics extension",
    "Court": "English advanced",
    "Black": "Mathematics advanced",
    "Heka": "Modern history",
    "Moller": "German",
    "Foran": "Business studies",
    "Weekes": "Mathematics standard",
    "Metson": "Society and culture",
    "Phelps-anc": "Ancient History",
    "Limbrey": "Geography",
    "Robinson": "Mathematics advanced",
    "Robinson-ext": "Mathematics extension",
    "Wellings": "Music",
    "Woodley": "Mathematics advanced",
    "Milnes": "Visual art",
}
 

def output():
    output = ""
    guess = data[inp]
    target = data[guesee]
    unmatched = target.copy()
    usedSubjs = [None if guess[i] == target[i] else target[i] for i in range(len(target))]

    for index, val in enumerate(guess):
        output += f"line {(index + 1)}: "

        if val == target[index]:
            output += f"{GREEN}{subjects[val]} - {val.split('-')[0]}{RESET}"
            unmatched[index] = None
            usedSubjs[index] = None

        elif val in unmatched:
            output += f"{YELLOW}{subjects[val]} - {val.split('-')[0]}{RESET}"
            unmatched[unmatched.index(val)] = None  # prevent dup yellow

        elif subjects.get(val) in [subjects.get(code) for code in usedSubjs if code]:
            output += f"{YELLOW}{subjects[val]} - {val.split('-')[0]}{RESET}"
            firstMatch = next(i for i, code in enumerate(usedSubjs) if code and subjects.get(code) == subjects.get(val))
            usedSubjs[firstMatch] = None  # prevent dup yellow on same subj

        else:
            output += f"{GREY}{subjects[val]} - {val.split('-')[0]}{RESET}"

        output += "\n"

    return output

def getInp() -> str:
    while True:
        try:
            name = input("name: ").lower()
            if name == "debug": return name
            first, last = name.split()
            key = f'{first.capitalize()} {last.capitalize()}'
            if data[key]:
                break
        except Exception:
            pass
    return key

guesee = choice(list(data.keys()))

if __name__ == "__main__":
    guesses = 0
    while True:
        inp = getInp()
        if inp == "debug":
            print(guesee)
            print(data[guesee])
            continue
        elif inp in data.keys():
            guesses += 1
        if guesee == inp:
            print("You win")
            break
        elif guesses > 5:
            print(f"You lose\nThe person was {guesee}")
            break
        print(output())
