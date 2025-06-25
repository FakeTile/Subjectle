const data = {
'Sebin Park': ['Unity', 'White', 'Silibek', 'Tweddle', 'Free', 'Naito', 'Doyle', 'Doyle', ],
'Jackson Barrow': ['Unity', 'Richmond', 'Clarke', 'Free', 'Smith', 'Naito', 'Tsaccounis', 'Tsaccounis', ],
'William Ye': ['Jones', 'Phelps', 'Silibek', 'Smith', 'Parkinson', 'Naito', 'Free', 'Jones', ],
'Alan Du': ['Vyas', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Vyas', ],
'Evan Murphy': ['Vyas', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Vyas', ],
'Justin Lum': ['Black', 'Treleaven', 'Clarke', 'Smith', 'Rayment', 'Naito', 'Free', 'Black', ],
'Calvin Jameson': ['Black', 'Court', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Black', ],
'Ronin Naumovski': ['Black', 'White', 'Free', 'Smith', 'Ireland', 'Foran', 'Treleaven', 'Black', ],
'Oliver Ellmers': ['Weekes', 'Treleaven', 'Clarke', 'Heka', 'Ireland', 'Naito', 'Free', 'Free', ],
'Matthew Exposito': ['Black', 'Court', 'Emaneni', 'Marsh', 'Smith', 'Foran', 'Free', 'Black', ],
'Jethro Corby': ['Free', 'Penn', 'Metson', 'Heka', 'Ireland', 'Phelps', 'Treleaven', 'Offner', ],
'Oscar Sun': ['Jones', 'Richmond', 'Herrman', 'Bullock', 'Rayment', 'Naito', 'Free', 'Jones', ],
'Lars Ashtonwagner': ['Black', 'Richmond', 'Silibek', 'Smith', 'Taylor', 'Moller', 'Free', 'Black', ],
'William Murray': ['Jones', 'Richmond', 'Herrman', 'Marsh', 'Emaneni', 'Naito', 'Free', 'Jones', ],
'William Zang': ['Robinson', 'Court', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Robinson', ],
'Byron Hastie': ['Jones', 'Richmond', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Jones', ],
'Ajdin Dozo': ['Robinson', 'White', 'Herrman', 'Marsh', 'Taylor', 'Naito', 'Free', 'Robinson', ],
'Ben Howard': ['Black', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Black', ],
'Dylan Powell': ['Black', 'White', 'Herrman', 'Bullock', 'Limbrey', 'McGavock', 'Free', 'Black', ],
'Neil Joseph': ['Robinson', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Robinson', ],
'Marley Nees': ['Weekes', 'Treleaven', 'Free', 'Milnes', 'Rayment', 'Groves', 'Doyle', 'Doyle', ],
'Ashley Nelson': ['Unity', 'White', 'Silibek', 'Tweddle', 'Parkinson', 'Moller', 'Penn', 'Free', ],
'Holly Phang': ['Robinson', 'White', 'Bullock', 'Smith', 'Ireland', 'McGavock', 'Free', 'Robinson', ],
'Hamish Mcdonald': ['Free', 'Penn', 'Richmond', 'Heka', 'Limbrey', 'Moller', 'Treleaven', 'Offner', ],
'Tahlia Robson': ['Vyas', 'Penn', 'Bullock', 'Heka', 'Ireland', 'McGavock', 'Free', 'Vyas', ],
'Victoria Ho': ['Vyas', 'White', 'Silibek', 'Heka', 'Ireland', 'Free', 'Treleaven', 'Vyas', ],
'Ilira Voits': ['Weekes', 'White', 'Metson', 'Heka', 'Ireland', 'Free', 'Treleaven', 'Offner', ],
'Isabella Harris': ['Weekes', 'Court', 'Free', 'Tweddle', 'Limbrey', 'Foran', 'Doyle', 'Doyle', ],
'Rory Munn': ['Weekes', 'Treleaven', 'Richmond', 'Milnes', 'Free', 'Moller', 'Penn', 'Offner', ],
'Larissa Rodgercarey': ['Weekes', 'Court', 'Richmond', 'Free', 'Parkinson', 'Moller', 'Treleaven', 'Offner', ],
'Nina Murakamimozer': ['Black', 'Court', 'Silibek', 'Wellings', 'Parkinson', 'Phelps', 'Free', 'Black', ],
'Elizabeth Andrievski': ['Unity', 'Phelps', 'Silibek', 'Heka', 'Ireland', 'Phelps', 'Penn', 'Free', ],
'Ingrid Stephenson': ['Black', 'Treleaven', 'Herrman', 'Heka', 'Free', 'Naito', 'Treleaven', 'Black', ],
'Chloe Berryman': ['Jones', 'Penn', 'Richmond', 'Marsh', 'Smith', 'Naito', 'Free', 'Jones', ],
'Max Hinde': ['Jones', 'Richmond', 'Bullock', 'Smith', 'Free', 'McGavock', 'Offner', 'Jones', ],
'Robert Shannon': ['Robinson', 'White', 'Silibek', 'Smith', 'Parkinson', 'Phelps', 'Free', 'Robinson', ],
'Tilly Fikkers': ['Weekes', 'Penn', 'Bullock', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Axl Hornby': ['Unity', 'Treleaven', 'Free', 'Tweddle', 'Ireland', 'Groves', 'Tsaccounis', 'Tsaccounis', ],
'Samuel Palermo': ['Woodley', 'Treleaven', 'Free', 'Tweddle', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis', ],
'Nat Moon': ['Unity', 'Court', 'Richmond', 'Free', 'Rayment', 'Moller', 'Doyle', 'Doyle', ],
'Hamish Nutt': ['Weekes', 'Penn', 'Bullock', 'Tweddle', 'Taylor', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Hannah Marshall': ['Robinson', 'Court', 'Free', 'Bullock', 'Rayment', 'Phelps', 'Penn', 'Robinson', ],
'Tijana Pjevac': ['Unity', 'Penn', 'Free', 'Tweddle', 'Ireland', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Charlie North': ['Woodley', 'Treleaven', 'Bullock', 'Milnes', 'Free', 'Naito', 'Treleaven', 'Offner', ],
'Victor Vay': ['Vyas', 'Penn', 'Bullock', 'Marsh', 'Ireland', 'Naito', 'Free', 'Vyas', ],
'Anouk Mackenziesteele': ['Weekes', 'Phelps', 'Free', 'Milnes', 'Limbrey', 'Phelps', 'Doyle', 'Free', ],
'Melody Mihajlovic': ['Weekes', 'Penn', 'Hirsch', 'Free', 'Parkinson', 'Phelps', 'Penn', 'Offner', ],
'Lily Brett': ['Black', 'Court', 'Hirsch', 'Bullock', 'Smith', 'McGavock', 'Free', 'Black', ],
'Catalina Perez': ['Jones', 'White', 'Herrman', 'Wellings', 'Limbrey', 'Moller', 'Free', 'Jones', ],
'Henry Smith': ['Weekes', 'Richmond', 'Richmond', 'Milnes', 'Free', 'Phelps', 'Doyle', 'Doyle', ],
'Sarah Sun': ['Black', 'White', 'Metson', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Black', ],
'Alex Schmid': ['Vyas', 'Penn', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Vyas', ],
'Leki Debol': ['Robinson', 'Phelps', 'Metson', 'Tweddle', 'Parkinson', 'Free', 'Penn', 'Robinson', ],
'Isabel Jaravidal': ['Free', 'Phelps', 'Richmond', 'Milnes', 'Parkinson', 'Phelps', 'Treleaven', 'Free', ],
'Eileen Zhou': ['Black', 'Penn', 'Silibek', 'Milnes', 'Parkinson', 'Naito', 'Free', 'Black', ],
'Kiah Vallentine': ['Unity', 'Penn', 'Metson', 'Milnes', 'Limbrey', 'Foran', 'Penn', 'Free', ],
'Fox Larkin': ['Black', 'White', 'Herrman', 'Tweddle', 'Taylor', 'McGavock', 'Free', 'Black', ],
'Tilly Marshall': ['Vyas', 'Court', 'Silibek', 'Milnes', 'Parkinson', 'Free', 'Penn', 'Vyas', ],
'William Jarvis': ['Jones', 'White', 'Herrman', 'Wellings', 'Rayment', 'Phelps', 'Free', 'Jones', ],
'Nancy Li': ['Black', 'Penn', 'Bullock', 'Milnes', 'Rayment', 'Naito', 'Free', 'Black', ],
'William Burns': ['Robinson', 'Phelps', 'Clarke', 'Wellings', 'Ireland', 'Foran', 'Free', 'Robinson', ],
'Renu Vemulapalli': ['Unity', 'Penn', 'Silibek', 'Free', 'Limbrey', 'Phelps', 'Doyle', 'Doyle', ],
'Josie Heinecke': ['Woodley', 'Phelps', 'Clarke', 'Free', 'Rayment', 'Phelps', 'Treleaven', 'Offner', ],
'Luke Taylor': ['Jones', 'White', 'Silibek', 'Free', 'Smith', 'Groves', 'Offner', 'Jones', ],
'Til Chevalier': ['Unity', 'Penn', 'Herrman', 'Marsh', 'Emaneni', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Johnny Ball': ['Woodley', 'White', 'Clarke', 'Heka', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Finn Dempsey': ['Robinson', 'Phelps', 'Clarke', 'Heka', 'Rayment', 'Foran', 'Free', 'Robinson', ],
'Katherine Laing': ['Jones', 'Penn', 'Herrman', 'Heka', 'Taylor', 'Phelps', 'Free', 'Jones', ],
'Milly Dimovski': ['Unity', 'Court', 'Clarke', 'Heka', 'Ireland', 'Foran', 'Treleaven', 'Free', ],
'Rhys Bollard': ['Woodley', 'Treleaven', 'Hirsch', 'Free', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis', ],
'Angelyn Widjaja': ['Vyas', 'Treleaven', 'Free', 'Bullock', 'Rayment', 'Naito', 'Treleaven', 'Vyas', ],
'Mollie Fitzpatrick': ['Robinson', 'Treleaven', 'Hirsch', 'Smith', 'Taylor', 'Free', 'Free', 'Robinson', ],
'Soham Mudgil': ['Jones', 'Treleaven', 'Clarke', 'Bullock', 'Ireland', 'McGavock', 'Free', 'Jones', ],
'Finn Alexander': ['Woodley', 'Court', 'Metson', 'Heka', 'Free', 'Foran', 'Penn', 'Offner', ],
'Olive Dusting': ['Jones', 'Penn', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Jones', ],
'Kane Gardiner': ['Vyas', 'White', 'Richmond', 'Milnes', 'Smith', 'Groves', 'Free', 'Vyas', ],
'Arva Bayani': ['Robinson', 'Phelps', 'Bullock', 'Tweddle', 'Ireland', 'Foran', 'Free', 'Robinson', ],
'Addyson Gray': ['Vyas', 'Treleaven', 'Clarke', 'Bullock', 'Smith', 'McGavock', 'Free', 'Vyas', ],
'Izakk Curtin': ['Unity', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Free', ],
'Harrison Smith': ['Jones', 'Richmond', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Jones', ],
'Savannah Hincksman': ['Free', 'Penn', 'Bullock', 'Heka', 'Ireland', 'Phelps', 'Treleaven', 'Offner', ],
'Dane Conklin': ['Unity', 'Penn', 'Clarke', 'Smith', 'Rayment', 'Free', 'Doyle', 'Doyle', ],
'Angel Acosta': ['Jones', 'Richmond', 'Hirsch', 'Bullock', 'Rayment', 'Free', 'Offner', 'Jones', ],
'Marlon Macnab': ['Vyas', 'Phelps', 'Clarke', 'Smith', 'Rayment', 'Groves', 'Free', 'Vyas', ],
'Cooper Finnegan': ['Robinson', 'Court', 'Hirsch', 'Wellings', 'Smith', 'Groves', 'Free', 'Robinson', ],
'Katie Dillonshallard': ['Woodley', 'Phelps', 'Clarke', 'Milnes', 'Free', 'Foran', 'Doyle', 'Doyle', ],
'Sean Mcpherson': ['Woodley', 'Phelps', 'Bullock', 'Tweddle', 'Rayment', 'Foran', 'Free', 'Free', ],
'Zoe Dunning': ['Woodley', 'White', 'Metson', 'Tweddle', 'Parkinson', 'Phelps', 'Treleaven', 'Free', ],
'Soli Black': ['Woodley', 'White', 'Clarke', 'Tweddle', 'Limbrey', 'Free', 'Doyle', 'Free', ],
'Narelle Berlanda': ['Jones', 'Court', 'Silibek', 'Bullock', 'Smith', 'Free', 'Free', 'Jones', ],
'Gwendolen Twyford': ['Unity', 'Penn', 'Metson', 'Milnes', 'Parkinson', 'McGavock', 'Free', 'Free', ],
'Ned Moffitt': ['Black', 'White', 'Herrman', 'Free', 'Taylor', 'McGavock', 'Offner', 'Black', ],
'Abdulmohimen Tubbal': ['Jones', 'Treleavan', 'Silibek', 'Smith', 'Taylor', 'Foran', 'Free', 'Jones', ],
'Jai Mittal': ['Woodley', 'Court', 'Silibek', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', ],
'Alyssa Sorensen': ['Unity', 'White', 'Free', 'Bullock', 'Ireland', 'Moller', 'Tsaccounis', 'Tsaccounis', ],
'Rosie Van': ['Vyas', 'White', 'Silibek', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Vyas', ],
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
  console.log(guesee);
  console.log(target);
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
