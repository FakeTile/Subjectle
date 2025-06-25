let num_guesses = 0;

document.querySelector('#card1 .input-wrapper input').disabled = false;
function enterGuess() {
    num_guesses += 1;
    document.querySelector('#card' + num_guesses + ' .input-wrapper input').disabled = true;
    document.querySelector('#card' + (num_guesses+1) + ' .input-wrapper input').disabled = false;
}

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

const data = {};

// ---- LOAD CSV ----
fetch("ppl.csv")
  .then(res => res.text())
  .then(text => {
    const lines = text.trim().split("\n").slice(1);
    for (let line of lines) {
      const row = line.split(",");
      const [first, last] = row[2].split(" ");
      const subj = row.slice(3, 11).map((raw, index) => {
        let s = raw.split("-")[0].trim();
        if (s === "Richmond" && index === 2) s += "-drama";
        else if (s === "Phelps" && index === 5) s += "-anc";
        else if (extensionTeachers.includes(s) && index > 5 && index < 8) s += "-ext";
        return s;
      });
      data[`${first} ${last[0]}`] = subj;
    }
});


// ---- TARGET ----
const daysSinceEpoch = Math.floor((new Date() - new Date("1970-01-01")) / 86400000);
const keys = Object.keys(data);
const seededKeys = [...keys].sort(); // to make shuffle deterministic
const guesee = seededKeys[daysSinceEpoch % seededKeys.length];;

console.log(guesee);