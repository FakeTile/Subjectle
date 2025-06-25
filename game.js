const data = {
'Sebin P': ['Unity', 'White', 'Silibek', 'Tweddle', 'Free', 'Naito', 'Doyle', 'Doyle', ],
'Jackson B': ['Unity', 'Richmond', 'Clarke', 'Free', 'Smith', 'Naito', 'Tsaccounis', 'Tsaccounis', ],
'William Y': ['Jones', 'Phelps', 'Silibek', 'Smith', 'Parkinson', 'Naito', 'Free', 'Jones', ],
'Alan D': ['Vyas', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Vyas', ],
'Evan M': ['Vyas', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Vyas', ],
'Justin L': ['Black', 'Treleaven', 'Clarke', 'Smith', 'Rayment', 'Naito', 'Free', 'Black', ],
'Calvin J': ['Black', 'Court', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Black', ],
'Ronin N': ['Black', 'White', 'Free', 'Smith', 'Ireland', 'Foran', 'Treleaven', 'Black', ],
'Oliver E': ['Weekes', 'Treleaven', 'Clarke', 'Heka', 'Ireland', 'Naito', 'Free', 'Free', ],
'Matthew E': ['Black', 'Court', 'Emaneni', 'Marsh', 'Smith', 'Foran', 'Free', 'Black', ],
'Jethro C': ['Free', 'Penn', 'Metson', 'Heka', 'Ireland', 'Phelps', 'Treleaven', 'Offner', ],
'Oscar S': ['Jones', 'Richmond', 'Herrman', 'Bullock', 'Rayment', 'Naito', 'Free', 'Jones', ],
'Lars A': ['Black', 'Richmond', 'Silibek', 'Smith', 'Taylor', 'Moller', 'Free', 'Black', ],
'William M': ['Jones', 'Richmond', 'Herrman', 'Marsh', 'Emaneni', 'Naito', 'Free', 'Jones', ],
'William Z': ['Robinson', 'Court', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Robinson', ],
'Byron H': ['Jones', 'Richmond', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Jones', ],
'Ajdin D': ['Robinson', 'White', 'Herrman', 'Marsh', 'Taylor', 'Naito', 'Free', 'Robinson', ],
'Ben H': ['Black', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Black', ],
'Dylan P': ['Black', 'White', 'Herrman', 'Bullock', 'Limbrey', 'McGavock', 'Free', 'Black', ],
'Neil J': ['Robinson', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Robinson', ],
'Marley N': ['Weekes', 'Treleaven', 'Free', 'Milnes', 'Rayment', 'Groves', 'Doyle', 'Doyle', ],
'Ashley N': ['Unity', 'White', 'Silibek', 'Tweddle', 'Parkinson', 'Moller', 'Penn', 'Free', ],
'Holly P': ['Robinson', 'White', 'Bullock', 'Smith', 'Ireland', 'McGavock', 'Free', 'Robinson', ],
'Hamish M': ['Free', 'Penn', 'Richmond', 'Heka', 'Limbrey', 'Moller', 'Treleaven', 'Offner', ],
'Tahlia R': ['Vyas', 'Penn', 'Bullock', 'Heka', 'Ireland', 'McGavock', 'Free', 'Vyas', ],
'Victoria H': ['Vyas', 'White', 'Silibek', 'Heka', 'Ireland', 'Free', 'Treleaven', 'Vyas', ],
'Ilira V': ['Weekes', 'White', 'Metson', 'Heka', 'Ireland', 'Free', 'Treleaven', 'Offner', ],
'Isabella H': ['Weekes', 'Court', 'Free', 'Tweddle', 'Limbrey', 'Foran', 'Doyle', 'Doyle', ],
'Rory M': ['Weekes', 'Treleaven', 'Richmond', 'Milnes', 'Free', 'Moller', 'Penn', 'Offner', ],
'Larissa R': ['Weekes', 'Court', 'Richmond', 'Free', 'Parkinson', 'Moller', 'Treleaven', 'Offner', ],
'Nina M': ['Black', 'Court', 'Silibek', 'Wellings', 'Parkinson', 'Phelps', 'Free', 'Black', ],
'Elizabeth A': ['Unity', 'Phelps', 'Silibek', 'Heka', 'Ireland', 'Phelps', 'Penn', 'Free', ],
'Ingrid S': ['Black', 'Treleaven', 'Herrman', 'Heka', 'Free', 'Naito', 'Treleaven', 'Black', ],
'Chloe B': ['Jones', 'Penn', 'Richmond', 'Marsh', 'Smith', 'Naito', 'Free', 'Jones', ],
'Max H': ['Jones', 'Richmond', 'Bullock', 'Smith', 'Free', 'McGavock', 'Offner', 'Jones', ],
'Robert S': ['Robinson', 'White', 'Silibek', 'Smith', 'Parkinson', 'Phelps', 'Free', 'Robinson', ],
'Tilly F': ['Weekes', 'Penn', 'Bullock', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Axl H': ['Unity', 'Treleaven', 'Free', 'Tweddle', 'Ireland', 'Groves', 'Tsaccounis', 'Tsaccounis', ],
'Samuel P': ['Woodley', 'Treleaven', 'Free', 'Tweddle', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis', ],
'Nat M': ['Unity', 'Court', 'Richmond', 'Free', 'Rayment', 'Moller', 'Doyle', 'Doyle', ],
'Hamish N': ['Weekes', 'Penn', 'Bullock', 'Tweddle', 'Taylor', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Hannah M': ['Robinson', 'Court', 'Free', 'Bullock', 'Rayment', 'Phelps', 'Penn', 'Robinson', ],
'Tijana P': ['Unity', 'Penn', 'Free', 'Tweddle', 'Ireland', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Charlie N': ['Woodley', 'Treleaven', 'Bullock', 'Milnes', 'Free', 'Naito', 'Treleaven', 'Offner', ],
'Victor V': ['Vyas', 'Penn', 'Bullock', 'Marsh', 'Ireland', 'Naito', 'Free', 'Vyas', ],
'Anouk M': ['Weekes', 'Phelps', 'Free', 'Milnes', 'Limbrey', 'Phelps', 'Doyle', 'Free', ],
'Melody M': ['Weekes', 'Penn', 'Hirsch', 'Free', 'Parkinson', 'Phelps', 'Penn', 'Offner', ],
'Lily B': ['Black', 'Court', 'Hirsch', 'Bullock', 'Smith', 'McGavock', 'Free', 'Black', ],
'Catalina P': ['Jones', 'White', 'Herrman', 'Wellings', 'Limbrey', 'Moller', 'Free', 'Jones', ],
'Henry S': ['Weekes', 'Richmond', 'Richmond', 'Milnes', 'Free', 'Phelps', 'Doyle', 'Doyle', ],
'Sarah S': ['Black', 'White', 'Metson', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Black', ],
'Alex S': ['Vyas', 'Penn', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Vyas', ],
'Leki D': ['Robinson', 'Phelps', 'Metson', 'Tweddle', 'Parkinson', 'Free', 'Penn', 'Robinson', ],
'Isabel J': ['Free', 'Phelps', 'Richmond', 'Milnes', 'Parkinson', 'Phelps', 'Treleaven', 'Free', ],
'Eileen Z': ['Black', 'Penn', 'Silibek', 'Milnes', 'Parkinson', 'Naito', 'Free', 'Black', ],
'Kiah V': ['Unity', 'Penn', 'Metson', 'Milnes', 'Limbrey', 'Foran', 'Penn', 'Free', ],
'Fox L': ['Black', 'White', 'Herrman', 'Tweddle', 'Taylor', 'McGavock', 'Free', 'Black', ],
'Tilly M': ['Vyas', 'Court', 'Silibek', 'Milnes', 'Parkinson', 'Free', 'Penn', 'Vyas', ],
'William J': ['Jones', 'White', 'Herrman', 'Wellings', 'Rayment', 'Phelps', 'Free', 'Jones', ],
'Nancy L': ['Black', 'Penn', 'Bullock', 'Milnes', 'Rayment', 'Naito', 'Free', 'Black', ],
'William B': ['Robinson', 'Phelps', 'Clarke', 'Wellings', 'Ireland', 'Foran', 'Free', 'Robinson', ],
'Renu V': ['Unity', 'Penn', 'Silibek', 'Free', 'Limbrey', 'Phelps', 'Doyle', 'Doyle', ],
'Josie H': ['Woodley', 'Phelps', 'Clarke', 'Free', 'Rayment', 'Phelps', 'Treleaven', 'Offner', ],
'Luke T': ['Jones', 'White', 'Silibek', 'Free', 'Smith', 'Groves', 'Offner', 'Jones', ],
'Til C': ['Unity', 'Penn', 'Herrman', 'Marsh', 'Emaneni', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Johnny B': ['Woodley', 'White', 'Clarke', 'Heka', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Finn D': ['Robinson', 'Phelps', 'Clarke', 'Heka', 'Rayment', 'Foran', 'Free', 'Robinson', ],
'Katherine L': ['Jones', 'Penn', 'Herrman', 'Heka', 'Taylor', 'Phelps', 'Free', 'Jones', ],
'Milly D': ['Unity', 'Court', 'Clarke', 'Heka', 'Ireland', 'Foran', 'Treleaven', 'Free', ],
'Rhys B': ['Woodley', 'Treleaven', 'Hirsch', 'Free', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis', ],
'Angelyn W': ['Vyas', 'Treleaven', 'Free', 'Bullock', 'Rayment', 'Naito', 'Treleaven', 'Vyas', ],
'Mollie F': ['Robinson', 'Treleaven', 'Hirsch', 'Smith', 'Taylor', 'Free', 'Free', 'Robinson', ],
'Soham M': ['Jones', 'Treleaven', 'Clarke', 'Bullock', 'Ireland', 'McGavock', 'Free', 'Jones', ],
'Finn A': ['Woodley', 'Court', 'Metson', 'Heka', 'Free', 'Foran', 'Penn', 'Offner', ],
'Olive D': ['Jones', 'Penn', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Jones', ],
'Kane G': ['Vyas', 'White', 'Richmond', 'Milnes', 'Smith', 'Groves', 'Free', 'Vyas', ],
'Arva B': ['Robinson', 'Phelps', 'Bullock', 'Tweddle', 'Ireland', 'Foran', 'Free', 'Robinson', ],
'Addyson G': ['Vyas', 'Treleaven', 'Clarke', 'Bullock', 'Smith', 'McGavock', 'Free', 'Vyas', ],
'Izakk C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Free', ],
'Harrison S': ['Jones', 'Richmond', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Jones', ],
'Savannah H': ['Free', 'Penn', 'Bullock', 'Heka', 'Ireland', 'Phelps', 'Treleaven', 'Offner', ],
'Dane C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Rayment', 'Free', 'Doyle', 'Doyle', ],
'Angel A': ['Jones', 'Richmond', 'Hirsch', 'Bullock', 'Rayment', 'Free', 'Offner', 'Jones', ],
'Marlon M': ['Vyas', 'Phelps', 'Clarke', 'Smith', 'Rayment', 'Groves', 'Free', 'Vyas', ],
'Cooper F': ['Robinson', 'Court', 'Hirsch', 'Wellings', 'Smith', 'Groves', 'Free', 'Robinson', ],
'Katie D': ['Woodley', 'Phelps', 'Clarke', 'Milnes', 'Free', 'Foran', 'Doyle', 'Doyle', ],
'Sean M': ['Woodley', 'Phelps', 'Bullock', 'Tweddle', 'Rayment', 'Foran', 'Free', 'Free', ],
'Zoe D': ['Woodley', 'White', 'Metson', 'Tweddle', 'Parkinson', 'Phelps', 'Treleaven', 'Free', ],
'Soli B': ['Woodley', 'White', 'Clarke', 'Tweddle', 'Limbrey', 'Free', 'Doyle', 'Free', ],
'Narelle B': ['Jones', 'Court', 'Silibek', 'Bullock', 'Smith', 'Free', 'Free', 'Jones', ],
'Gwendolen T': ['Unity', 'Penn', 'Metson', 'Milnes', 'Parkinson', 'McGavock', 'Free', 'Free', ],
'Ned M': ['Black', 'White', 'Herrman', 'Free', 'Taylor', 'McGavock', 'Offner', 'Black', ],
'Abdulmohimen T': ['Jones', 'Treleavan', 'Silibek', 'Smith', 'Taylor', 'Foran', 'Free', 'Jones', ],
'Jai M': ['Woodley', 'Court', 'Silibek', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Alyssa S': ['Unity', 'White', 'Free', 'Bullock', 'Ireland', 'Moller', 'Tsaccounis', 'Tsaccounis', ],
'Rosie V': ['Vyas', 'White', 'Silibek', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Vyas', ],
};

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
function enterGuess(name) {
  const id = "card" + (num_guesses + 1);
  const card = document.getElementById(id);
  const input_wrapper = card.querySelector('.input-wrapper');
  const input_element = input_wrapper.querySelector('input');
  input_element.disabled = true;
  if (name === guesee) {
    alert("You win");
    return;
  }
  num_guesses += 1;
  if (num_guesses === 4) {
    alert("You lose refresh the page if you want idk");
    return;
  };
  document.querySelector('#card' + (num_guesses+1) + ' .input-wrapper input').disabled = false;
  const wrappers = card.querySelectorAll('.hint-wrapper');
  const o = output(name);
  wrappers.forEach((wrapper, index) => {
    const hint = wrapper.querySelector('.hint');
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
