let num_guesses = 0;

document.querySelector('#card1 .input-wrapper input').disabled = false;
function enterGuess(name) {
  const id = "card" + (num_guesses + 1);
  const card = document.getElementById(id);
  const input_wrapper = card.querySelector('.input-wrapper');
  const input_element = input_wrapper.querySelector('input');
  input_element.disabled = true;
  num_guesses += 1;
  document.querySelector('#card' + (num_guesses+1) + ' .input-wrapper input').disabled = false;
  const wrappers = card.querySelectorAll('.hint-wrapper');
  const o = output(name);
  wrappers.forEach((wrapper, index) => {
    const hint = wrapper.querySelector('.hint');
    console.log(o);
    hint.textContent = o[index][1];
    hint.style.backgroundColor = o[index][0];
  });
}

function output(name) {
  let guess = data[name];
  let target = data[guesee];
  let unmatched = target.slice();
  const usedSubjs = target.map((char, i) => guess[i] === char ? null : char);
  let out = [];
  guess.forEach((val, index) => {

      if (val === target[index]) {
          out.push(['#6CA965', `${subjects[val]} - ${val.split('-')[0]}`]);
          unmatched[index] = null;
          usedSubjs[index] = null;

      } else if (unmatched.includes(val)) {
          out.push(['#C8B653', `${subjects[val]} - ${val.split('-')[0]}`]);
          unmatched[unmatched.indexOf(val)] = null; // prevent dup yellow

      } else if (Object.values(subjects).includes(subjects[val]) && usedSubjs.some(code => code && subjects[code] === subjects[val])) {
          out.push(['#C8B653', `${subjects[val]} - ${val.split('-')[0]}`]);
          let firstMatch = usedSubjs.findIndex(code => code && subjects[code] === subjects[val]);
          usedSubjs[firstMatch] = null; // prevent dup yellow on same subj

      } else {
          out.push(['#3A3A3C', `${subjects[val]} - ${val.split('-')[0]}`])
      }
  });

  return out;
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
      let name = row[2].slice(1, -1);
      let nameSplit = name.split(' ');
      nameSplit[1] = nameSplit[1][0];
        
      const subj = row.slice(3, 11).map((raw, index) => {
        let s = raw.slice(1, -1).split("-")[0].trim();
        if (s === "Richmond" && index === 2) s += "-drama";
        else if (s === "Phelps" && index === 5) s += "-anc";
        else if (extensionTeachers.includes(s) && index > 5 && index < 8) s += "-ext";
        return s;
      });
      data[`${nameSplit[0]} ${nameSplit[1]}`] = subj;
    }
    // ---- TARGET ----
    const daysSinceEpoch = Math.floor((new Date() - new Date("1970-01-01")) / 86400000);
    const names = Object.keys(data);
    console.log(names);
});

// Seeded PRNG
function mulberry32(seed) {
  return function () {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Deterministic shuffle
function seededShuffle(array, seed) {
  const rng = mulberry32(seed);
  const arr = array.slice();

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

const daysSinceEpoch = Math.floor((new Date() - new Date("1970-01-01")) / 86400000);
const names = seededShuffle(Object.keys(data), "soham");
const guesee = names[daysSinceEpoch % names.length];
