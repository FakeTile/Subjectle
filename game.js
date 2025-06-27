const data = {'Sebin P': ['Unity', 'White', 'Silibek', 'Tweddle', 'Free', 'Naito', 'Doyle', 'Doyle'], 'Jackson B': ['Unity', 'Richmond', 'Clarke', 'Free', 'Smith', 'Naito', 'Tsaccounis', 'Tsaccounis'], 'William Y': ['Jones', 'Phelps', 'Silibek', 'Smith', 'Parkinson', 'Naito', 'Free', 'Jones-ext'], 'Alan D': ['Vyas', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Vyas-ext'], 'Evan M': ['Vyas', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Vyas-ext'], 'Justin L': ['Black', 'Treleaven', 'Clarke', 'Smith', 'Rayment', 'Naito', 'Free', 'Black-ext'], 'Calvin J': ['Black', 'Court', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Black-ext'], 'Ronin N': ['Black', 'White', 'Free', 'Smith', 'Ireland', 'Foran', 'Treleaven-ext', 'Black-ext'], 'Oliver E': ['Weekes', 'Treleaven', 'Clarke', 'Heka', 'Ireland', 'Naito', 'Free', 'Free'], 'Matthew E': ['Black', 'Court', 'Emaneni', 'Marsh', 'Smith', 'Foran', 'Free', 'Black-ext'], 'Jethro C': ['Free', 'Penn', 'Metson', 'Heka', 'Ireland', 'Phelps-anc', 'Treleaven-ext', 'Offner'], 'Oscar S': ['Jones', 'Richmond', 'Herrman', 'Bullock', 'Rayment', 'Naito', 'Free', 'Jones-ext'], 'Lars A': ['Black', 'Richmond', 'Silibek', 'Smith', 'Taylor', 'Moller', 'Free', 'Black-ext'], 'William M': ['Jones', 'Richmond', 'Herrman', 'Marsh', 'Emaneni', 'Naito', 'Free', 'Jones-ext'], 'William Z': ['Robinson', 'Court', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Robinson-ext'], 'Byron H': ['Jones', 'Richmond', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Jones-ext'], 'Ajdin D': ['Robinson', 'White', 'Herrman', 'Marsh', 'Taylor', 'Naito', 'Free', 'Robinson-ext'], 'Ben H': ['Black', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Black-ext'], 'Dylan P': ['Black', 'White', 'Herrman', 'Bullock', 'Limbrey', 'McGavock', 'Free', 'Black-ext'], 'Neil J': ['Robinson', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Robinson-ext'], 'Marley N': ['Weekes', 'Treleaven', 'Free', 'Milnes', 'Rayment', 'Groves', 'Doyle', 'Doyle'], 'Ashley N': ['Unity', 'White', 'Silibek', 'Tweddle', 'Parkinson', 'Moller', 'Penn-ext', 'Free'], 'Holly P': ['Robinson', 'White', 'Bullock', 'Smith', 'Ireland', 'McGavock', 'Free', 'Robinson-ext'], 'Hamish M': ['Free', 'Penn', 'Richmond-drama', 'Heka', 'Limbrey', 'Moller', 'Treleaven-ext', 'Offner'], 'Tahlia R': ['Vyas', 'Penn', 'Bullock', 'Heka', 'Ireland', 'McGavock', 'Free', 'Vyas-ext'], 'Victoria H': ['Vyas', 'White', 'Silibek', 'Heka', 'Ireland', 'Free', 'Treleaven-ext', 'Vyas-ext'], 'Ilira V': ['Weekes', 'White', 'Metson', 'Heka', 'Ireland', 'Free', 'Treleaven-ext', 'Offner'], 'Isabella H': ['Weekes', 'Court', 'Free', 'Tweddle', 'Limbrey', 'Foran', 'Doyle', 'Doyle'], 'Rory M': ['Weekes', 'Treleaven', 'Richmond-drama', 'Milnes', 'Free', 'Moller', 'Penn-ext', 'Offner'], 'Larissa R': ['Weekes', 'Court', 'Richmond-drama', 'Free', 'Parkinson', 'Moller', 'Treleaven-ext', 'Offner'], 'Elizabeth A': ['Unity', 'Phelps', 'Silibek', 'Heka', 'Ireland', 'Phelps-anc', 'Penn-ext', 'Free'], 'Ingrid S': ['Black', 'Treleaven', 'Herrman', 'Heka', 'Free', 'Naito', 'Treleaven-ext', 'Black-ext'], 'Nyx B': ['Jones', 'Penn', 'Richmond-drama', 'Marsh', 'Smith', 'Naito', 'Free', 'Jones-ext'], 'Max H': ['Jones', 'Richmond', 'Bullock', 'Smith', 'Free', 'McGavock', 'Offner', 'Jones-ext'], 'Robert S': ['Robinson', 'White', 'Silibek', 'Smith', 'Parkinson', 'Phelps-anc', 'Free', 'Robinson-ext'], 'Tilly F': ['Weekes', 'Penn', 'Bullock', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Axl H': ['Unity', 'Treleaven', 'Free', 'Tweddle', 'Ireland', 'Groves', 'Tsaccounis', 'Tsaccounis'], 'Samuel P': ['Woodley', 'Treleaven', 'Free', 'Tweddle', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis'], 'Nat M': ['Unity', 'Court', 'Richmond-drama', 'Free', 'Rayment', 'Moller', 'Doyle', 'Doyle'], 'Hamish N': ['Weekes', 'Penn', 'Bullock', 'Tweddle', 'Taylor', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Hannah M': ['Robinson', 'Court', 'Free', 'Bullock', 'Rayment', 'Phelps-anc', 'Penn-ext', 'Robinson-ext'], 'Charlie N': ['Woodley', 'Treleaven', 'Bullock', 'Milnes', 'Free', 'Naito', 'Treleaven-ext', 'Offner'], 'Victor V': ['Vyas', 'Penn', 'Bullock', 'Marsh', 'Ireland', 'Naito', 'Free', 'Vyas-ext'], 'Anouk M': ['Weekes', 'Phelps', 'Free', 'Milnes', 'Limbrey', 'Phelps-anc', 'Doyle', 'Free'], 'Tijana P': ['Unity', 'Penn', 'Free', 'Tweddle', 'Ireland', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Lily B': ['Black', 'Court', 'Hirsch', 'Bullock', 'Smith', 'McGavock', 'Free', 'Black-ext'], 'Catalina P': ['Jones', 'White', 'Herrman', 'Wellings', 'Limbrey', 'Moller', 'Free', 'Jones-ext'], 'Sarah S': ['Black', 'White', 'Metson', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Black-ext'], 'Alex S': ['Vyas', 'Penn', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Vyas-ext'], 'Leki D': ['Robinson', 'Phelps', 'Metson', 'Tweddle', 'Parkinson', 'Free', 'Penn-ext', 'Robinson-ext'], 'Isabel J': ['Free', 'Phelps', 'Richmond-drama', 'Milnes', 'Parkinson', 'Phelps-anc', 'Treleaven-ext', 'Free'], 'Eileen Z': ['Black', 'Penn', 'Silibek', 'Milnes', 'Parkinson', 'Naito', 'Free', 'Black-ext'], 'Kiah V': ['Unity', 'Penn', 'Metson', 'Milnes', 'Limbrey', 'Foran', 'Penn-ext', 'Free'], 'Fox L': ['Black', 'White', 'Herrman', 'Tweddle', 'Taylor', 'McGavock', 'Free', 'Black-ext'], 'Tilly M': ['Vyas', 'Court', 'Silibek', 'Milnes', 'Parkinson', 'Free', 'Penn-ext', 'Vyas-ext'], 'William J': ['Jones', 'White', 'Herrman', 'Wellings', 'Rayment', 'Phelps-anc', 'Free', 'Jones-ext'], 'Nancy L': ['Black', 'Penn', 'Bullock', 'Milnes', 'Rayment', 'Naito', 'Free', 'Black-ext'], 'William B': ['Robinson', 'Phelps', 'Clarke', 'Wellings', 'Ireland', 'Foran', 'Free', 'Robinson-ext'], 'Renu V': ['Unity', 'Penn', 'Silibek', 'Free', 'Limbrey', 'Phelps-anc', 'Doyle', 'Doyle'], 'Josie H': ['Woodley', 'Phelps', 'Clarke', 'Free', 'Rayment', 'Phelps-anc', 'Treleaven-ext', 'Offner'], 'Luke T': ['Jones', 'White', 'Silibek', 'Free', 'Smith', 'Groves', 'Offner', 'Jones-ext'], 'Til C': ['Unity', 'Penn', 'Herrman', 'Marsh', 'Emaneni', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Johnny B': ['Woodley', 'White', 'Clarke', 'Heka', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Finn D': ['Robinson', 'Phelps', 'Clarke', 'Heka', 'Rayment', 'Foran', 'Free', 'Robinson-ext'], 'Katherine L': ['Jones', 'Penn', 'Herrman', 'Heka', 'Taylor', 'Phelps-anc', 'Free', 'Jones-ext'], 'Milly D': ['Unity', 'Court', 'Clarke', 'Heka', 'Ireland', 'Foran', 'Treleaven-ext', 'Free'], 'Rhys B': ['Woodley', 'Treleaven', 'Hirsch', 'Free', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis'], 'Angelyn W': ['Vyas', 'Treleaven', 'Free', 'Bullock', 'Rayment', 'Naito', 'Treleaven-ext', 'Vyas-ext'], 'Mollie F': ['Robinson', 'Treleaven', 'Hirsch', 'Smith', 'Taylor', 'Free', 'Free', 'Robinson-ext'], 'Soham M': ['Jones', 'Treleaven', 'Clarke', 'Bullock', 'Ireland', 'McGavock', 'Free', 'Jones-ext'], 'Finn A': ['Woodley', 'Court', 'Metson', 'Heka', 'Free', 'Foran', 'Penn-ext', 'Offner'], 'Caleb D': ['Jones', 'Penn', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Jones-ext'], 'Kane G': ['Vyas', 'White', 'Richmond-drama', 'Milnes', 'Smith', 'Groves', 'Free', 'Vyas-ext'], 'Arva B': ['Robinson', 'Phelps', 'Bullock', 'Tweddle', 'Ireland', 'Foran', 'Free', 'Robinson-ext'], 'Addyson G': ['Vyas', 'Treleaven', 'Clarke', 'Bullock', 'Smith', 'McGavock', 'Free', 'Vyas-ext'], 'Izakk C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Free'], 'Savannah H': ['Free', 'Penn', 'Bullock', 'Heka', 'Ireland', 'Phelps-anc', 'Treleaven-ext', 'Offner'], 'Harrison S': ['Jones', 'Richmond', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Jones-ext'], 'Dane C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Rayment', 'Free', 'Doyle', 'Doyle'], 'Angel A': ['Jones', 'Richmond', 'Hirsch', 'Bullock', 'Rayment', 'Free', 'Offner', 'Jones-ext'], 'Marlon M': ['Vyas', 'Phelps', 'Clarke', 'Smith', 'Rayment', 'Groves', 'Free', 'Vyas-ext'], 'Cooper F': ['Robinson', 'Court', 'Hirsch', 'Wellings', 'Smith', 'Groves', 'Free', 'Robinson-ext'], 'Katie D': ['Woodley', 'Phelps', 'Clarke', 'Milnes', 'Free', 'Foran', 'Doyle', 'Doyle'], 'Sean M': ['Woodley', 'Phelps', 'Bullock', 'Tweddle', 'Rayment', 'Foran', 'Free', 'Free'], 'Zoe D': ['Woodley', 'White', 'Metson', 'Tweddle', 'Parkinson', 'Phelps-anc', 'Treleaven-ext', 'Free'], 'Henry S': ['Weekes', 'Richmond', 'Richmond-drama', 'Milnes', 'Free', 'Phelps-anc', 'Doyle', 'Doyle'], 'Nina M': ['Black', 'Court', 'Silibek', 'Wellings', 'Parkinson', 'Phelps-anc', 'Free', 'Black-ext'], 'Soli B': ['Woodley', 'White', 'Clarke', 'Tweddle', 'Limbrey', 'Free', 'Doyle', 'Free'], 'Narelle B': ['Jones', 'Court', 'Silibek', 'Bullock', 'Smith', 'Free', 'Free', 'Jones-ext'], 'Gwendolen T': ['Unity', 'Penn', 'Metson', 'Milnes', 'Parkinson', 'McGavock', 'Free', 'Free'], 'Ned M': ['Black', 'White', 'Herrman', 'Free', 'Taylor', 'McGavock', 'Offner', 'Black-ext'], 'Abdulmohimen T': ['Jones', 'Treleaven', 'Silibek', 'Smith', 'Taylor', 'Foran', 'Free', 'Jones-ext'], 'Jai M': ['Woodley', 'Court', 'Silibek', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Alyssa S': ['Unity', 'White', 'Free', 'Bullock', 'Ireland', 'Moller', 'Tsaccounis', 'Tsaccounis'], 'Rosie V': ['Vyas', 'White', 'Silibek', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Vyas-ext'], 'Ronan G': ['Jones', 'White', 'Herrman', 'Bullock', 'Taylor', 'McGavock', 'Free', 'Jones-ext'], 'Riley G': ['Jones', 'Court', 'Bullock', 'Tweddle', 'Rayment', 'Groves', 'Free', 'Jones-ext'], 'Oliver S': ['Black', 'Penn', 'Silibek', 'Tweddle', 'Smith', 'Free', 'Penn-ext', 'Black-ext'], 'Jayanth S': ['Robinson', 'treleaven', 'Bullock', 'Marsh', 'Smith', 'McGavock', 'Free', 'Robinson-ext'], 'Aidan D': ['Black', 'White', 'Clarke', 'Heka', 'Ireland', 'McGavock', 'Free', 'Black-ext'], 'Alicia S': ['Weekes', 'treleaven', 'Metson', 'Tweddle', 'Ireland', 'Phelps-anc', 'Free', 'Free'], 'William W': ['Robinson', 'Phelps', 'Silibek', 'Bullock', 'Smith', 'Foran', 'Free', 'Robinson-ext'], 'Augie F': ['Robinson', 'Court', 'Clarke', 'Free', 'Smith', 'Foran', 'Offner', 'Robinson-ext'], 'Anh N': ['Black', 'treleaven', 'Bullock', 'Milnes', 'Rayment', 'Naito', 'Free', 'Black-ext'], 'Ciaran S': ['Vyas', 'Court', 'Clarke', 'Smith', 'Limbrey', 'Groves', 'Free', 'Vyas-ext'], 'Melody M': ['Woodley', 'Penn', 'Hirsch', 'Free', 'Parkinson', 'Phelps-anc', 'Penn-ext', 'Offner'], 'Rayan M': ['Robinson', 'Phelps', 'Silibek', 'Tweddle', 'Smith', 'Foran', 'Free', 'Robinson-ext'], 'Leah S': ['Robinson', 'White', 'Hirsch', 'Bullock', 'Rayment', 'Foran', 'Free', 'Robinson-ext'], 'Subhaan U': ['Black', 'Court', 'Clarke', 'Bullock', 'Rayment', 'Naito', 'Free', 'Black-ext'], 'Alice C': ['Woodley', 'Phelps', 'Metson', 'Heka', 'Free', 'Moller', 'Doyle', 'Doyle'], 'Freya K': ['Jones', 'Treleaven', 'Clarke', 'Smith', 'Parkinson', 'McGavock', 'Free', 'Jones-ext']};

/* 
 *
 * ATTENTION: KEEP LINE 1 AS THE DEFINITION FOR DATA UNLESS YOU
 * CHANGE update-ppl.py
 *
 */

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

// Corrects for timezone, so it flips at 12am
const daysSinceEpoch = Math.floor((new Date() - new Date("1970-01-01") - 50400000) / 86400000);
const names = seededShuffle(Object.keys(data), "soham");
let guesee = names[daysSinceEpoch % names.length];

const infinity = document.getElementById('infinite');
infinity.addEventListener("click", () => {
  reset_game()
});

const para = document.getElementById('num-subjectle');

function fadeToText(newText) {
  para.style.animation = 'none';
  void para.offsetWidth;
  para.textContent = newText;
  para.style.animation = 'fadeIn 0.75s ease-in-out forwards';
};

function reset_game() {
  num_guesses = 0;
  hasNotWon = true;
    
  if (para.textContent !== "Random Subjectle") {
    fadeToText("Random Subjectle");
  };
    
  const today = daysSinceEpoch;
  const newSeed = Math.floor(Math.random() * 100000);
  const shuffled = seededShuffle(Object.keys(data), newSeed);
  guesee = shuffled[today % shuffled.length];

  // clear elements
  for (let i = 1; i <= 6; i++) {
    const card = document.getElementById('card' + i);
    const input = card.querySelector('.input-wrapper input');
    const button = card.querySelector('.input-wrapper button');
    const hints = card.querySelectorAll('.hint-wrapper .hint');

    input.value = '';
    input.disabled = i !== 1;  // disbale all but first
    button.disabled = i !== 1;

    hints.forEach(h => {
      h.textContent = '';
      h.style.backgroundColor = '#2C2C2C'; // for test purpose
      h.classList.remove('flip');
    });
  }
}

let num_guesses = 0;
let hasNotWon = true;
document.querySelector('#card1 .input-wrapper input').disabled = false;
document.querySelector('#card1 .input-wrapper button').disabled = false;

async function enterGuess(name) {
  const id = "card" + (num_guesses + 1);
  const card = document.getElementById(id);
  const input_wrapper = card.querySelector('.input-wrapper');
  const input_element = input_wrapper.querySelector('input');
  const button_element = input_wrapper.querySelector('button');

  input_element.disabled = true;
  button_element.disabled = true;
  num_guesses += 1;

  // disable all other inputs during flip
  for (let i = 1; i <= 6; i++) {
    const input = document.querySelector(`#card${i} .input-wrapper input`);
    const button = document.querySelector(`#card${i} .input-wrapper button`);
    if (input && button) {
      input.disabled = true;
      button.disabled = true;
    }
  }

  const wrappers = card.querySelectorAll('.hint-wrapper');
  const o = output(name);

  // Animate hints with staggered flip
  await Promise.all([...wrappers].map((wrapper, index) => {
    const hint = wrapper.querySelector('.hint');
    hint.classList.remove("flip");

    return new Promise(resolve => {
      setTimeout(() => {
        hint.textContent = o[index][1];
        hint.style.backgroundColor = o[index][0];
        void hint.offsetWidth;

        hint.classList.add("flip");
        hint.addEventListener("animationend", resolve, { once: true });
      }, index * 175);
    });
  }));

  if (name === guesee) {
    hasNotWon = false;
    for (let i = num_guesses + 1; i <= 6; i++) {
      const nextInput = document.querySelector('#card' + i + ' .input-wrapper input');
      const nextButton = document.querySelector('#card' + i + ' .input-wrapper button');
      if (nextInput && nextButton) {
        nextInput.disabled = true;
        nextButton.disabled = true;
      }
    }
  }

  if (hasNotWon && num_guesses !== 6) {
    const nextInput = document.querySelector('#card' + (num_guesses + 1) + ' .input-wrapper input');
    const nextButton = document.querySelector('#card' + (num_guesses + 1) + ' .input-wrapper button');
    if (nextInput && nextButton) {
      nextInput.disabled = false;
      nextButton.disabled = false;
    }
  }

  if (name === guesee) {
    alert(`You won in ${num_guesses} ${num_guesses === 1 ? 'attempt' : 'attempts'}!`);
    reset_game();
    return;
  }

  if (num_guesses === 6) {
    alert(`You lose. The correct student was: ${guesee}.`);
    reset_game();
    return;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
  "Jones": "Mathematics Advanced",
  "Treleaven": "English Advanced",
  "Clarke": "Economics",
  "Bullock": "Biology",
  "Ireland": "Legal Studies",
  "McGavock": "Chemistry",
  "Jones-ext": "Mathematics Extension",
  "Richmond": "English Standard",
  "Richmond-drama": "Drama",
  "Hirsch": "French",
  "Rayment": "Chemistry",
  "Free": "Study",
  "Offner": "Studies Of Religon",
  "Unity": "Mathematics Advanced",
  "Marsh": "Software Engineering",
  "Smith": "Physics",
  "Naito": "Japanese",
  "Tsaccounis": "Business Studies",
  "Penn": "English Advanced",
  "Penn-ext": "English Extension",
  "Treleaven-ext": "English Extension",
  "Herrman": "Physics",
  "Emaneni": "Enterprise Computing",
  "White": "English Advanced",
  "Silibek": "Chemistry",
  "Tweddle": "Health & Movement Science",
  "Doyle": "Biology",
  "Phelps": "English Advanced",
  "Parkinson": "Biology",
  "Vyas": "Mathematics Advanced",
  "Taylor": "Engineering",
  "Groves": "Design & Technology",
  "Vyas-ext": "Mathematics Extension",
  "Black-ext": "Mathematics Extension",
  "Court": "English Advanced",
  "Black": "Mathematics Advanced",
  "Heka": "Modern History",
  "Moller": "German",
  "Foran": "Business Studies",
  "Weekes": "Mathematics Standard",
  "Metson": "Society & Culture",
  "Phelps-anc": "Ancient History",
  "Limbrey": "Geography",
  "Robinson": "Mathematics Advanced",
  "Robinson-ext": "Mathematics Extension",
  "Wellings": "Music",
  "Woodley": "Mathematics Advanced",
  "Milnes": "Visual Art"
};
