const data = {
'Abdulmohimen T': ['Jones-ext', 'Treleavan', 'Silibek', 'Smith', 'Taylor', 'Foran', 'Free', 'Jones-ext', ],
'Addyson G': ['Vyas-ext', 'Treleaven-ext', 'Clarke', 'Bullock', 'Smith', 'McGavock', 'Free', 'Vyas-ext', ],
'Ajdin D': ['Robinson-ext', 'White', 'Herrman', 'Marsh', 'Taylor', 'Naito', 'Free', 'Robinson-ext', ],
'Alan D': ['Vyas-ext', 'Penn-ext', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Vyas-ext', ],
'Alex S': ['Vyas-ext', 'Penn-ext', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Vyas-ext', ],
'Alyssa S': ['Unity', 'White', 'Free', 'Bullock', 'Ireland', 'Moller', 'Tsaccounis', 'Tsaccounis', ],
'Angel A': ['Jones-ext', 'Richmond', 'Hirsch', 'Bullock', 'Rayment', 'Free', 'Offner', 'Jones-ext', ],
'Angelyn W': ['Vyas-ext', 'Treleaven-ext', 'Free', 'Bullock', 'Rayment', 'Naito', 'Treleaven-ext', 'Vyas-ext', ],
'Anouk M': ['Weekes', 'Phelps', 'Free', 'Milnes', 'Limbrey', 'Phelps-anc', 'Doyle', 'Free', ],
'Arva B': ['Robinson-ext', 'Phelps', 'Bullock', 'Tweddle', 'Ireland', 'Foran', 'Free', 'Robinson-ext', ],
'Ashley N': ['Unity', 'White', 'Silibek', 'Tweddle', 'Parkinson', 'Moller', 'Penn-ext', 'Free', ],
'Axl H': ['Unity', 'Treleaven-ext', 'Free', 'Tweddle', 'Ireland', 'Groves', 'Tsaccounis', 'Tsaccounis', ],
'Ben H': ['Black-ext', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Black-ext', ],
'Byron H': ['Jones-ext', 'Richmond', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Jones-ext', ],
'Calvin J': ['Black-ext', 'Court', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Black-ext', ],
'Catalina P': ['Jones-ext', 'White', 'Herrman', 'Wellings', 'Limbrey', 'Moller', 'Free', 'Jones-ext', ],
'Charlie N': ['Woodley', 'Treleaven-ext', 'Bullock', 'Milnes', 'Free', 'Naito', 'Treleaven-ext', 'Offner', ],
'Chloe B': ['Jones-ext', 'Penn-ext', 'Richmond-drama', 'Marsh', 'Smith', 'Naito', 'Free', 'Jones-ext', ],
'Cooper F': ['Robinson-ext', 'Court', 'Hirsch', 'Wellings', 'Smith', 'Groves', 'Free', 'Robinson-ext', ],
'Dane C': ['Unity', 'Penn-ext', 'Clarke', 'Smith', 'Rayment', 'Free', 'Doyle', 'Doyle', ],
'Dylan P': ['Black-ext', 'White', 'Herrman', 'Bullock', 'Limbrey', 'McGavock', 'Free', 'Black-ext', ],
'Eileen Z': ['Black-ext', 'Penn-ext', 'Silibek', 'Milnes', 'Parkinson', 'Naito', 'Free', 'Black-ext', ],
'Elizabeth A': ['Unity', 'Phelps', 'Silibek', 'Heka', 'Ireland', 'Phelps-anc', 'Penn-ext', 'Free', ],
'Evan M': ['Vyas-ext', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Vyas-ext', ],
'Finn A': ['Woodley', 'Court', 'Metson', 'Heka', 'Free', 'Foran', 'Penn-ext', 'Offner', ],
'Finn D': ['Robinson-ext', 'Phelps', 'Clarke', 'Heka', 'Rayment', 'Foran', 'Free', 'Robinson-ext', ],
'Fox L': ['Black-ext', 'White', 'Herrman', 'Tweddle', 'Taylor', 'McGavock', 'Free', 'Black-ext', ],
'Gwendolen T': ['Unity', 'Penn-ext', 'Metson', 'Milnes', 'Parkinson', 'McGavock', 'Free', 'Free', ],
'Hamish M': ['Free', 'Penn-ext', 'Richmond-drama', 'Heka', 'Limbrey', 'Moller', 'Treleaven-ext', 'Offner', ],
'Hamish N': ['Weekes', 'Penn-ext', 'Bullock', 'Tweddle', 'Taylor', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Hannah M': ['Robinson-ext', 'Court', 'Free', 'Bullock', 'Rayment', 'Phelps-anc', 'Penn-ext', 'Robinson-ext', ],
'Harrison S': ['Jones-ext', 'Richmond', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Jones-ext', ],
'Henry S': ['Weekes', 'Richmond', 'Richmond-drama', 'Milnes', 'Free', 'Phelps-anc', 'Doyle', 'Doyle', ],
'Holly P': ['Robinson-ext', 'White', 'Bullock', 'Smith', 'Ireland', 'McGavock', 'Free', 'Robinson-ext', ],
'Ilira V': ['Weekes', 'White', 'Metson', 'Heka', 'Ireland', 'Free', 'Treleaven-ext', 'Offner', ],
'Ingrid S': ['Black-ext', 'Treleaven-ext', 'Herrman', 'Heka', 'Free', 'Naito', 'Treleaven-ext', 'Black-ext', ],
'Isabel J': ['Free', 'Phelps', 'Richmond-drama', 'Milnes', 'Parkinson', 'Phelps-anc', 'Treleaven-ext', 'Free', ],
'Isabella H': ['Weekes', 'Court', 'Free', 'Tweddle', 'Limbrey', 'Foran', 'Doyle', 'Doyle', ],
'Izakk C': ['Unity', 'Penn-ext', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Free', ],
'Jackson B': ['Unity', 'Richmond', 'Clarke', 'Free', 'Smith', 'Naito', 'Tsaccounis', 'Tsaccounis', ],
'Jai M': ['Woodley', 'Court', 'Silibek', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Jethro C': ['Free', 'Penn-ext', 'Metson', 'Heka', 'Ireland', 'Phelps-anc', 'Treleaven-ext', 'Offner', ],
'Johnny B': ['Woodley', 'White', 'Clarke', 'Heka', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Josie H': ['Woodley', 'Phelps', 'Clarke', 'Free', 'Rayment', 'Phelps-anc', 'Treleaven-ext', 'Offner', ],
'Justin L': ['Black-ext', 'Treleaven-ext', 'Clarke', 'Smith', 'Rayment', 'Naito', 'Free', 'Black-ext', ],
'Kane G': ['Vyas-ext', 'White', 'Richmond-drama', 'Milnes', 'Smith', 'Groves', 'Free', 'Vyas-ext', ],
'Katherine L': ['Jones-ext', 'Penn-ext', 'Herrman', 'Heka', 'Taylor', 'Phelps-anc', 'Free', 'Jones-ext', ],
'Katie D': ['Woodley', 'Phelps', 'Clarke', 'Milnes', 'Free', 'Foran', 'Doyle', 'Doyle', ],
'Kiah V': ['Unity', 'Penn-ext', 'Metson', 'Milnes', 'Limbrey', 'Foran', 'Penn-ext', 'Free', ],
'Larissa R': ['Weekes', 'Court', 'Richmond-drama', 'Free', 'Parkinson', 'Moller', 'Treleaven-ext', 'Offner', ],
'Lars A': ['Black-ext', 'Richmond', 'Silibek', 'Smith', 'Taylor', 'Moller', 'Free', 'Black-ext', ],
'Leki D': ['Robinson-ext', 'Phelps', 'Metson', 'Tweddle', 'Parkinson', 'Free', 'Penn-ext', 'Robinson-ext', ],
'Lily B': ['Black-ext', 'Court', 'Hirsch', 'Bullock', 'Smith', 'McGavock', 'Free', 'Black-ext', ],
'Luke T': ['Jones-ext', 'White', 'Silibek', 'Free', 'Smith', 'Groves', 'Offner', 'Jones-ext', ],
'Marley N': ['Weekes', 'Treleaven-ext', 'Free', 'Milnes', 'Rayment', 'Groves', 'Doyle', 'Doyle', ],
'Marlon M': ['Vyas-ext', 'Phelps', 'Clarke', 'Smith', 'Rayment', 'Groves', 'Free', 'Vyas-ext', ],
'Matthew E': ['Black-ext', 'Court', 'Emaneni', 'Marsh', 'Smith', 'Foran', 'Free', 'Black-ext', ],
'Max H': ['Jones-ext', 'Richmond', 'Bullock', 'Smith', 'Free', 'McGavock', 'Offner', 'Jones-ext', ],
'Melody M': ['Weekes', 'Penn-ext', 'Hirsch', 'Free', 'Parkinson', 'Phelps-anc', 'Penn-ext', 'Offner', ],
'Milly D': ['Unity', 'Court', 'Clarke', 'Heka', 'Ireland', 'Foran', 'Treleaven-ext', 'Free', ],
'Mollie F': ['Robinson-ext', 'Treleaven-ext', 'Hirsch', 'Smith', 'Taylor', 'Free', 'Free', 'Robinson-ext', ],
'Nancy L': ['Black-ext', 'Penn-ext', 'Bullock', 'Milnes', 'Rayment', 'Naito', 'Free', 'Black-ext', ],
'Narelle B': ['Jones-ext', 'Court', 'Silibek', 'Bullock', 'Smith', 'Free', 'Free', 'Jones-ext', ],
'Nat M': ['Unity', 'Court', 'Richmond-drama', 'Free', 'Rayment', 'Moller', 'Doyle', 'Doyle', ],
'Ned M': ['Black-ext', 'White', 'Herrman', 'Free', 'Taylor', 'McGavock', 'Offner', 'Black-ext', ],
'Neil J': ['Robinson-ext', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Robinson-ext', ],
'Nina M': ['Black-ext', 'Court', 'Silibek', 'Wellings', 'Parkinson', 'Phelps-anc', 'Free', 'Black-ext', ],
'Olive D': ['Jones-ext', 'Penn-ext', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Jones-ext', ],
'Oliver E': ['Weekes', 'Treleaven-ext', 'Clarke', 'Heka', 'Ireland', 'Naito', 'Free', 'Free', ],
'Oscar S': ['Jones-ext', 'Richmond', 'Herrman', 'Bullock', 'Rayment', 'Naito', 'Free', 'Jones-ext', ],
'Renu V': ['Unity', 'Penn-ext', 'Silibek', 'Free', 'Limbrey', 'Phelps-anc', 'Doyle', 'Doyle', ],
'Rhys B': ['Woodley', 'Treleaven-ext', 'Hirsch', 'Free', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis', ],
'Robert S': ['Robinson-ext', 'White', 'Silibek', 'Smith', 'Parkinson', 'Phelps-anc', 'Free', 'Robinson-ext', ],
'Ronin N': ['Black-ext', 'White', 'Free', 'Smith', 'Ireland', 'Foran', 'Treleaven-ext', 'Black-ext', ],
'Rory M': ['Weekes', 'Treleaven-ext', 'Richmond-drama', 'Milnes', 'Free', 'Moller', 'Penn-ext', 'Offner', ],
'Rosie V': ['Vyas-ext', 'White', 'Silibek', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Vyas-ext', ],
'Samuel P': ['Woodley', 'Treleaven-ext', 'Free', 'Tweddle', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis', ],
'Sarah S': ['Black-ext', 'White', 'Metson', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Black-ext', ],
'Savannah H': ['Free', 'Penn-ext', 'Bullock', 'Heka', 'Ireland', 'Phelps-anc', 'Treleaven-ext', 'Offner', ],
'Sean M': ['Woodley', 'Phelps', 'Bullock', 'Tweddle', 'Rayment', 'Foran', 'Free', 'Free', ],
'Sebin P': ['Unity', 'White', 'Silibek', 'Tweddle', 'Free', 'Naito', 'Doyle', 'Doyle', ],
'Soham M': ['Jones-ext', 'Treleaven-ext', 'Clarke', 'Bullock', 'Ireland', 'McGavock', 'Free', 'Jones-ext', ],
'Soli B': ['Woodley', 'White', 'Clarke', 'Tweddle', 'Limbrey', 'Free', 'Doyle', 'Free', ],
'Tahlia R': ['Vyas-ext', 'Penn-ext', 'Bullock', 'Heka', 'Ireland', 'McGavock', 'Free', 'Vyas-ext', ],
'Tijana P': ['Unity', 'Penn-ext', 'Free', 'Tweddle', 'Ireland', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Til C': ['Unity', 'Penn-ext', 'Herrman', 'Marsh', 'Emaneni', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Tilly F': ['Weekes', 'Penn-ext', 'Bullock', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Tilly M': ['Vyas-ext', 'Court', 'Silibek', 'Milnes', 'Parkinson', 'Free', 'Penn-ext', 'Vyas-ext', ],
'Victor V': ['Vyas-ext', 'Penn-ext', 'Bullock', 'Marsh', 'Ireland', 'Naito', 'Free', 'Vyas-ext', ],
'Victoria H': ['Vyas-ext', 'White', 'Silibek', 'Heka', 'Ireland', 'Free', 'Treleaven-ext', 'Vyas-ext', ],
'William B': ['Robinson-ext', 'Phelps', 'Clarke', 'Wellings', 'Ireland', 'Foran', 'Free', 'Robinson-ext', ],
'William J': ['Jones-ext', 'White', 'Herrman', 'Wellings', 'Rayment', 'Phelps-anc', 'Free', 'Jones-ext', ],
'William M': ['Jones-ext', 'Richmond', 'Herrman', 'Marsh', 'Emaneni', 'Naito', 'Free', 'Jones-ext', ],
'William Y': ['Jones-ext', 'Phelps', 'Silibek', 'Smith', 'Parkinson', 'Naito', 'Free', 'Jones-ext', ],
'William Z': ['Robinson-ext', 'Court', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Robinson-ext', ],
'Zoe D': ['Woodley', 'White', 'Metson', 'Tweddle', 'Parkinson', 'Phelps-anc', 'Treleaven-ext', 'Free', ],
}

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

let num_guesses = 0;

document.querySelector('#card1 .input-wrapper input').disabled = false;
async function enterGuess(name) {
  const id = "card" + (num_guesses + 1);
  const card = document.getElementById(id);
  const input_wrapper = card.querySelector('.input-wrapper');
  const input_element = input_wrapper.querySelector('input');
  input_element.disabled = true;
  num_guesses += 1;
  if (num_guesses !== 4) {
    document.querySelector('#card' + (num_guesses+1) + ' .input-wrapper input').disabled = false;
  };
  const wrappers = card.querySelectorAll('.hint-wrapper');
  const o = output(name);
  wrappers.forEach((wrapper, index) => {
    const hint = wrapper.querySelector('.hint');
    hint.textContent = o[index][1];
    hint.style.backgroundColor = o[index][0];
  });
  await sleep(250);
  if (name === guesee) {
    alert("You win");
    return;
  }
  if (num_guesses === 4) {
    alert("You lose refresh the page if you want idk");
    return;
  };
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
