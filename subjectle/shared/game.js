const data = {'Sebin P': ['Unity', 'White', 'Silibek', 'Tweddle', 'Free', 'Naito', 'Doyle', 'Doyle', 'Unknown'], 'Jackson B': ['Unity', 'Richmond', 'Clarke', 'Free', 'Smith', 'Naito', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'William Y': ['Jones', 'Phelps', 'Silibek', 'Smith', 'Parkinson', 'Naito', 'Free', 'Jones-ext', 'Unknown'], 'Alan D': ['Vyas', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Vyas-ext', 'Unknown'], 'Evan M': ['Vyas', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Vyas-ext', 'Unknown'], 'Justin L': ['Black', 'Treleaven', 'Clarke', 'Smith', 'Rayment', 'Naito', 'Free', 'Black-ext', 'Unknown'], 'Calvin J': ['Black', 'Court', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Black-ext', 'Unknown'], 'Ronin N': ['Black', 'White', 'Free', 'Smith', 'Ireland', 'Foran', 'Treleaven-ext', 'Black-ext', 'Unknown'], 'Oliver E': ['Weekes', 'Treleaven', 'Clarke', 'Heka', 'Ireland', 'Naito', 'Free', 'Free', 'Unknown'], 'Matthew E': ['Black', 'Court', 'Emaneni', 'Marsh', 'Smith', 'Foran', 'Free', 'Black-ext', 'Unknown'], 'Jethro C': ['Free', 'Penn', 'Metson', 'Heka', 'Ireland', 'Phelps-anc', 'Treleaven-ext', 'Offner', 'Unknown'], 'Oscar S': ['Jones', 'Richmond', 'Herrman', 'Bullock', 'Rayment', 'Naito', 'Free', 'Jones-ext', 'Unknown'], 'Lars A': ['Black', 'Richmond', 'Silibek', 'Smith', 'Taylor', 'Moller', 'Free', 'Black-ext', 'Unknown'], 'William M': ['Jones', 'Richmond', 'Woodley-phys', 'Marsh', 'Free', 'Free', 'Free', 'Jones-ext', 'Black-ext-2'], 'William Z': ['Robinson', 'Court', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Robinson-ext', 'Unknown'], 'Byron H': ['Jones', 'Richmond', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Jones-ext', 'Unknown'], 'Ajdin D': ['Robinson', 'White', 'Herrman', 'Marsh', 'Taylor', 'Naito', 'Free', 'Robinson-ext', 'Unknown'], 'Ben H': ['Black', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Black-ext', 'Unknown'], 'Dylan P': ['Black', 'White', 'Herrman', 'Bullock', 'Limbrey', 'McGavock', 'Free', 'Black-ext', 'Unknown'], 'Neil J': ['Unity', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Free', 'Unknown'], 'Marley N': ['Weekes', 'Treleaven', 'Free', 'Milnes', 'Rayment', 'Groves', 'Doyle', 'Doyle', 'Unknown'], 'Ashley N': ['Unity', 'White', 'Silibek', 'Tweddle', 'Parkinson', 'Moller', 'Penn-ext', 'Free', 'Unknown'], 'Holly P': ['Robinson', 'White', 'Bullock', 'Smith', 'Ireland', 'McGavock', 'Free', 'Robinson-ext', 'Unknown'], 'Hamish M': ['Free', 'Penn', 'Richmond-drama', 'Heka', 'Limbrey', 'Moller', 'Treleaven-ext', 'Offner', 'Unknown'], 'Tahlia R': ['Vyas', 'Penn', 'Bullock', 'Heka', 'Ireland', 'McGavock', 'Free', 'Vyas-ext', 'Unknown'], 'Victoria H': ['Vyas', 'White', 'Silibek', 'Heka', 'Ireland', 'Free', 'Treleaven-ext', 'Vyas-ext', 'Unknown'], 'Ilira V': ['Weekes', 'White', 'Metson', 'Heka', 'Ireland', 'Free', 'Treleaven-ext', 'Offner', 'Unknown'], 'Isabella H': ['Weekes', 'Court', 'Free', 'Tweddle', 'Limbrey', 'Foran', 'Doyle', 'Doyle', 'Unknown'], 'Rory M': ['Weekes', 'Treleaven', 'Richmond-drama', 'Milnes', 'Free', 'Moller', 'Penn-ext', 'Offner', 'Unknown'], 'Larissa R': ['Weekes', 'Court', 'Richmond-drama', 'Free', 'Parkinson', 'Moller', 'Treleaven-ext', 'Offner', 'Unknown'], 'Elizabeth A': ['Unity', 'Phelps', 'Silibek', 'Heka', 'Ireland', 'Phelps-anc', 'Penn-ext', 'Free', 'Unknown'], 'Ingrid S': ['Black', 'Treleaven', 'Herrman', 'Heka', 'Free', 'Naito', 'Treleaven-ext', 'Black-ext', 'Unknown'], 'Nyx B': ['Jones', 'Penn', 'Richmond-drama', 'Marsh', 'Smith', 'Naito', 'Free', 'Jones-ext', 'Unknown'], 'Max H': ['Jones', 'Richmond', 'Bullock', 'Smith', 'Free', 'McGavock', 'Offner', 'Jones-ext', 'Unknown'], 'Robert S': ['Robinson', 'White', 'Silibek', 'Smith', 'Parkinson', 'Phelps-anc', 'Free', 'Robinson-ext', 'Unknown'], 'Tilly F': ['Weekes', 'Penn', 'Bullock', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Axl H': ['Unity', 'Treleaven', 'Free', 'Tweddle', 'Ireland', 'Groves', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Samuel P': ['Woodley', 'Treleaven', 'Free', 'Tweddle', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Nat M': ['Unity', 'Court', 'Richmond-drama', 'Free', 'Rayment', 'Moller', 'Doyle', 'Doyle', 'Unknown'], 'Hamish N': ['Weekes', 'Penn', 'Bullock', 'Tweddle', 'Taylor', 'Free', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Hannah M': ['Robinson', 'Court', 'Free', 'Bullock', 'Rayment', 'Phelps-anc', 'Penn-ext', 'Robinson-ext', 'Unknown'], 'Charlie N': ['Woodley', 'Treleaven', 'Bullock', 'Milnes', 'Free', 'Naito', 'Treleaven-ext', 'Offner', 'Unknown'], 'Victor V': ['Vyas', 'Penn', 'Bullock', 'Marsh', 'Ireland', 'Naito', 'Free', 'Vyas-ext', 'Unknown'], 'Anouk M': ['Weekes', 'Phelps', 'Free', 'Milnes', 'Limbrey', 'Phelps-anc', 'Doyle', 'Doyle', 'Unknown'], 'Tijana P': ['Unity', 'Penn', 'Free', 'Tweddle', 'Ireland', 'Free', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Lily B': ['Black', 'Court', 'Hirsch', 'Bullock', 'Smith', 'McGavock', 'Free', 'Black-ext', 'Unknown'], 'Catalina P': ['Jones', 'White', 'Herrman', 'Wellings', 'Limbrey', 'Moller', 'Free', 'Jones-ext', 'Unknown'], 'Sarah S': ['Black', 'White', 'Metson', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Black-ext', 'Unknown'], 'Alex S': ['Vyas', 'Penn', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Vyas-ext', 'Unknown'], 'Leki D': ['Robinson', 'Phelps', 'Metson', 'Tweddle', 'Parkinson', 'Free', 'Penn-ext', 'Robinson-ext', 'Unknown'], 'Isabel J': ['Free', 'Phelps', 'Richmond-drama', 'Milnes', 'Parkinson', 'Phelps-anc', 'Treleaven-ext', 'Free', 'Unknown'], 'Eileen Z': ['Black', 'Penn', 'Silibek', 'Milnes', 'Parkinson', 'Naito', 'Free', 'Black-ext', 'Unknown'], 'Kiah V': ['Unity', 'Penn', 'Metson', 'Milnes', 'Limbrey', 'Foran', 'Penn-ext', 'Free', 'Unknown'], 'Fox L': ['Black', 'White', 'Herrman', 'Tweddle', 'Taylor', 'McGavock', 'Free', 'Black-ext', 'Unknown'], 'Tilly M': ['Vyas', 'Court', 'Silibek', 'Milnes', 'Parkinson', 'Free', 'Penn-ext', 'Vyas-ext', 'Unknown'], 'William J': ['Jones', 'White', 'Herrman', 'Wellings', 'Rayment', 'Phelps-anc', 'Free', 'Jones-ext', 'Unknown'], 'Nancy L': ['Black', 'Penn', 'Bullock', 'Milnes', 'Rayment', 'Naito', 'Free', 'Black-ext', 'Unknown'], 'William B': ['Robinson', 'Phelps', 'Clarke', 'Wellings', 'Ireland', 'Foran', 'Free', 'Robinson-ext', 'Unknown'], 'Renu V': ['Unity', 'Penn', 'Silibek', 'Free', 'Limbrey', 'Phelps-anc', 'Doyle', 'Doyle', 'Unknown'], 'Josie H': ['Woodley', 'Phelps', 'Clarke', 'Free', 'Rayment', 'Phelps-anc', 'Treleaven-ext', 'Offner', 'Unknown'], 'Luke T': ['Jones', 'White', 'Silibek', 'Free', 'Smith', 'Groves', 'Offner', 'Jones-ext', 'Unknown'], 'Til C': ['Unity', 'Penn', 'Herrman', 'Marsh', 'Emaneni', 'Free', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Johnny B': ['Woodley', 'White', 'Clarke', 'Heka', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Finn D': ['Robinson', 'Phelps', 'Clarke', 'Heka', 'Rayment', 'Foran', 'Free', 'Robinson-ext', 'Unknown'], 'Katherine L': ['Jones', 'Penn', 'Herrman', 'Heka', 'Taylor', 'Phelps-anc', 'Free', 'Jones-ext', 'Unknown'], 'Milly D': ['Unity', 'Court', 'Clarke', 'Heka', 'Ireland', 'Foran', 'Treleaven-ext', 'Free', 'Unknown'], 'Rhys B': ['Woodley', 'Treleaven', 'Hirsch', 'Free', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Angelyn W': ['Vyas', 'Treleaven', 'Free', 'Bullock', 'Rayment', 'Naito', 'Treleaven-ext', 'Vyas-ext', 'Unknown'], 'Mollie F': ['Robinson', 'Treleaven', 'Hirsch', 'Smith', 'Taylor', 'Free', 'Free', 'Robinson-ext', 'Unknown'], 'Soham M': ['Jones', 'Treleaven', 'Clarke', 'Bullock', 'Ireland', 'McGavock', 'Free', 'Jones-ext', 'Unknown'], 'Finn A': ['Woodley', 'Court', 'Metson', 'Heka', 'Free', 'Foran', 'Penn-ext', 'Offner', 'Unknown'], 'Caleb D': ['Jones', 'Penn', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Jones-ext', 'Unknown'], 'Kane G': ['Vyas', 'White', 'Richmond-drama', 'Milnes', 'Smith', 'Groves', 'Free', 'Vyas-ext', 'Unknown'], 'Arva B': ['Robinson', 'Phelps', 'Bullock', 'Tweddle', 'Ireland', 'Foran', 'Free', 'Robinson-ext', 'Unknown'], 'Addyson G': ['Vyas', 'Treleaven', 'Clarke', 'Bullock', 'Smith', 'McGavock', 'Free', 'Vyas-ext', 'Unknown'], 'Izakk C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Free', 'Unknown'], 'Savannah H': ['Free', 'Court', 'Bullock', 'Heka', 'Ireland', 'Phelps-anc', 'Treleaven-ext', 'Offner', 'Unknown'], 'Harrison S': ['Jones', 'Richmond', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Jones-ext', 'Unknown'], 'Dane C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Rayment', 'Free', 'Doyle', 'Doyle', 'Unknown'], 'Angel A': ['Jones', 'Richmond', 'Hirsch', 'Bullock', 'Rayment', 'Free', 'Offner', 'Jones-ext', 'Unknown'], 'Marlon M': ['Vyas', 'Phelps', 'Clarke', 'Smith', 'Rayment', 'Groves', 'Free', 'Vyas-ext', 'Unknown'], 'Cooper F': ['Robinson', 'Court', 'Hirsch', 'Wellings', 'Smith', 'Groves', 'Free', 'Robinson-ext', 'Unknown'], 'Katie D': ['Woodley', 'Phelps', 'Clarke', 'Milnes', 'Free', 'Foran', 'Doyle', 'Doyle', 'Unknown'], 'Sean M': ['Woodley', 'Phelps', 'Bullock', 'Tweddle', 'Rayment', 'Foran', 'Free', 'Free', 'Unknown'], 'Zoe D': ['Weekes', 'White', 'Metson', 'Tweddle', 'Parkinson', 'Phelps-anc', 'Treleaven-ext', 'Free', 'Unknown'], 'Henry S': ['Weekes', 'Richmond', 'Richmond-drama', 'Milnes', 'Free', 'Phelps-anc', 'Doyle', 'Doyle', 'Unknown'], 'Nina M': ['Black', 'Court', 'Silibek', 'Wellings', 'Parkinson', 'Phelps-anc', 'Free', 'Black-ext', 'Unknown'], 'Soli B': ['Woodley', 'White', 'Clarke', 'Tweddle', 'Limbrey', 'Free', 'Doyle', 'Doyle', 'Unknown'], 'Narelle B': ['Jones', 'Court', 'Silibek', 'Bullock', 'Smith', 'Free', 'Free', 'Jones-ext', 'Unknown'], 'Gwendolen T': ['Unity', 'Penn', 'Metson', 'Milnes', 'Parkinson', 'McGavock', 'Free', 'Free', 'Unknown'], 'Ned M': ['Black', 'White', 'Herrman', 'Free', 'Taylor', 'McGavock', 'Offner', 'Black-ext', 'Unknown'], 'Abdulmohimen T': ['Jones', 'Treleaven', 'Silibek', 'Smith', 'Taylor', 'Foran', 'Free', 'Jones-ext', 'Unknown'], 'Jai M': ['Woodley', 'Court', 'Silibek', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Alyssa S': ['Unity', 'White', 'Free', 'Bullock', 'Ireland', 'Moller', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Rosie V': ['Vyas', 'White', 'Silibek', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Vyas-ext', 'Unknown'], 'Ronan G': ['Jones', 'White', 'Herrman', 'Bullock', 'Taylor', 'McGavock', 'Free', 'Jones-ext', 'Unknown'], 'Riley G': ['Jones', 'Court', 'Bullock', 'Tweddle', 'Rayment', 'Groves', 'Free', 'Jones-ext', 'Unknown'], 'Oliver S': ['Black', 'Penn', 'Silibek', 'Tweddle', 'Smith', 'Free', 'Penn-ext', 'Black-ext', 'Unknown'], 'Jayanth S': ['Robinson', 'Treleaven', 'Bullock', 'Marsh', 'Smith', 'McGavock', 'Free', 'Robinson-ext', 'Unknown'], 'Aidan D': ['Black', 'White', 'Clarke', 'Heka', 'Ireland', 'McGavock', 'Free', 'Black-ext', 'Unknown'], 'Alicia S': ['Weekes', 'Treleaven', 'Metson', 'Tweddle', 'Ireland', 'Phelps-anc', 'Free', 'Free', 'Unknown'], 'William W': ['Robinson', 'Phelps', 'Silibek', 'Bullock', 'Smith', 'Foran', 'Free', 'Robinson-ext', 'Unknown'], 'Augie F': ['Robinson', 'Court', 'Clarke', 'Free', 'Smith', 'Foran', 'Offner', 'Robinson-ext', 'Unknown'], 'Anh N': ['Black', 'Treleaven', 'Bullock', 'Milnes', 'Rayment', 'Naito', 'Free', 'Black-ext', 'Unknown'], 'Ciaran S': ['Vyas', 'Court', 'Clarke', 'Smith', 'Limbrey', 'Groves', 'Free', 'Vyas-ext', 'Unknown'], 'Melody M': ['Woodley', 'Penn', 'Hirsch', 'Free', 'Parkinson', 'Phelps-anc', 'Penn-ext', 'Offner', 'Unknown'], 'Rayan M': ['Robinson', 'Phelps', 'Silibek', 'Tweddle', 'Smith', 'Foran', 'Free', 'Robinson-ext', 'Unknown'], 'Leah S': ['Robinson', 'White', 'Hirsch', 'Bullock', 'Rayment', 'Foran', 'Free', 'Robinson-ext', 'Unknown'], 'Subhaan U': ['Black', 'Court', 'Clarke', 'Bullock', 'Rayment', 'Naito', 'Free', 'Black-ext', 'Unknown'], 'Alice C': ['Woodley', 'Phelps', 'Metson', 'Heka', 'Free', 'Moller', 'Doyle', 'Doyle', 'Unknown'], 'Freya K': ['Jones', 'Treleaven', 'Clarke', 'Smith', 'Parkinson', 'McGavock', 'Free', 'Jones-ext', 'Unknown'], 'Giselle M': ['Woodley', 'Treleaven', 'Metson', 'Tweddle', 'Free', 'Groves', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Scarlett N': ['Woodley', 'Phelps', 'Richmond-drama', 'Bullock', 'Smith', 'Phelps-anc', 'Penn-ext', 'Free', 'Unknown'], 'Aarez K': ['Vyas', 'Court', 'Bullock', 'Free', 'Smith', 'McGavock', 'Offner', 'Vyas-ext', 'Unknown'], 'Jonathan C': ['Vyas', 'Richmond', 'Silibek', 'Smith', 'Ireland', 'Foran', 'Free', 'Vyas-ext', 'Unknown'], 'Ben I': ['Unity', 'Treleaven', 'Bullock', 'Tweddle', 'Free', 'Groves', 'Tsaccounis', 'Tsaccounis', 'Unknown'], 'Bonnie D': ['Vyas', 'Treleaven', 'Silibek', 'Tweddle', 'Parkinson', 'Free', 'Penn-ext', 'Vyas-ext', 'Unknown'], 'Innocent N': ['Robinson', 'Treleaven', 'Free', 'Smith', 'Parkinson', 'McGavock', 'Penn-ext', 'Robinson-ext', 'Unknown'], 'Marcus K': ['Free', 'Court', 'Clarke', 'Heka', 'Ireland', 'Phelps-anc', 'Penn-ext', 'Offner', 'Unknown']};

/* 
 *
 * ATTENTION: KEEP LINE 1 AS THE DEFINITION FOR DATA UNLESS YOU
 * CHANGE update-ppl.py
 *
 */

// Corrects for timezone, so it flips at 12am
const daysSinceEpoch = getDaysSinceEpoch(new Date());
const names = seededShuffle(Object.keys(data), "soham");
let guesee = names[daysSinceEpoch % names.length];

document.querySelector('#card1 .input-wrapper input').disabled = false;
document.querySelector('#card1 .input-wrapper input').focus();
document.querySelector('#card1 .input-wrapper button').disabled = false;

async function flipCards(name, card_num) {
  const id = "card" + (card_num);
  const card = document.getElementById(id);

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
  let hasNotWon = true;
  if (name === guesee) {
    hasNotWon = false;
    for (let i = card_num + 1; i <= 6; i++) {
      const nextInput = document.querySelector('#card' + i + ' .input-wrapper input');
      const nextButton = document.querySelector('#card' + i + ' .input-wrapper button');
      if (nextInput && nextButton) {
        nextInput.disabled = true;
        nextButton.disabled = true;
      }
    }
  }

  if (hasNotWon && card_num !== 6) {
    const nextInput = document.querySelector('#card' + (card_num + 1) + ' .input-wrapper input');
    const nextButton = document.querySelector('#card' + (card_num + 1) + ' .input-wrapper button');
    if (nextInput && nextButton) {
      nextInput.disabled = false;
      nextInput.focus();
      nextButton.disabled = false;
    }
  }
}

function output(name) {
  let guess = data[name];
  let target = data[guesee];
  let unmatched = target.slice();
  const usedSubjs = target.map((char, i) => guess[i] === char ? null : char);
  let out = [];
  guess.forEach((val, index) => {
    // Unknowns grey no matter what
    console.log(val);
    if (val === "Unknown") {
      out.push(['#3A3A3C', `${subjects[val]} - ${val.split('-')[0]}`]);
    } else if (val === target[index]) {
      out.push(['#6CA965', `${subjects[val]} - ${val.split('-')[0]}`]);
      unmatched[index] = null;
      usedSubjs[index] = null;
    } else if (val === "Woodley-phys" && target[index] === "Herrman" || val == "Herrman" && target[index] === "Woodley-phys") {
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

function showWelcome() {
  document.getElementById("welcomePopup").style.display = "block";
}

const PATH = "ppl.csv";
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
  "Milnes": "Visual Art",
  "Woodley-phys": "Physics",
  "Black-ext-2": "Mathematics Extension 2",
  "Unknown": "Unknown"
};
