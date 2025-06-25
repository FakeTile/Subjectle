const fs = require("fs");
const readline = require("readline");

const PATH = "ppl.csv";
const extensionTeachers = ["Robinson", "Black", "Vyas", "Treleaven", "Penn", "Jones"];
const subjects = {
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
  "Milnes": "Visual art"
};

const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const GREY = "\x1b[90m";
const RESET = "\x1b[0m";

const data = {};

// ---- LOAD CSV ----
const rows = fs.readFileSync(PATH, "utf-8").split("\n").slice(1);
for (let row of rows) {
  if (!row.trim()) continue;
  const cols = row.split(",");
  const [first, last] = cols[2].split(" ");

  const subj = cols.slice(3, 11).map((raw, index) => {
    let s = raw.slice(1, -1).split("-")[0].trim();
    if (s === "Richmond" && index === 2) s += "-drama";
    else if (s === "Phelps" && index === 5) s += "-anc";
    else if (extensionTeachers.includes(s) && index > 5 && index < 8) s += "-ext";
    console.log(s);
    return s;
  });
  data[`${first.slice(1)} ${last[0]}`] = subj;
}

// ---- TARGET ----
const daysSinceEpoch = Math.floor((new Date() - new Date("1970-01-01")) / 86400000);
const keys = Object.keys(data);
const seededKeys = [...keys].sort(); // to make shuffle deterministic
const guesee = seededKeys[daysSinceEpoch % seededKeys.length];;

// ---- INPUT ----
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

function formatOutput(inp) {
  const guess = data[inp];
  const target = data[guesee];
  const unmatched = [...target];
  const usedSubjs = target.map((val, i) => guess[i] === val ? null : val);

  let result = "";
  guess.forEach((val, i) => {
    result += `line ${i + 1}: `;
    if (val === target[i]) {
      result += `${GREEN}${subjects[val]} - ${val.split("-")[0]}${RESET}`;
      unmatched[i] = null;
      usedSubjs[i] = null;
    } else if (unmatched.includes(val)) {
      result += `${YELLOW}${subjects[val]} - ${val.split("-")[0]}${RESET}`;
      unmatched[unmatched.indexOf(val)] = null;
    } else if (usedSubjs.some(code => code && subjects[code] === subjects[val])) {
      result += `${YELLOW}${subjects[val]} - ${val.split("-")[0]}${RESET}`;
      const idx = usedSubjs.findIndex(code => code && subjects[code] === subjects[val]);
      usedSubjs[idx] = null;
    } else {
      result += `${GREY}${subjects[val]} - ${val.split("-")[0]}${RESET}`;
    }
    result += "\n";
  });
  return result;
}

// ---- GAME LOOP ----
(async () => {
  let guesses = 0;
  while (true) {
    let raw = await prompt("name: ");
    raw = raw.trim().toLowerCase();
    if (raw === "debug") {
      console.log(guesee);
      console.log(data[guesee]);
      continue;
    }

    try {
      const [first, last] = raw.split(" ");
      const key = `${capitalize(first)} ${capitalize(last)}`;
      if (data[key]) {
        guesses++;
        if (key === guesee) {
          console.log("You win");
          break;
        }
        if (guesses > 5) {
          console.log(`You lose\nThe person was ${guesee}`);
          break;
        }
        console.log(formatOutput(key));
      }
    } catch {
      // ignore bad inputs
    }
  }

  rl.close();
})();

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}