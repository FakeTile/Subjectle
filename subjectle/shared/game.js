const data = {'Dane C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Rayment', 'Free', 'Doyle', 'Doyle', 'Unknown'], 'Gwendolen T': ['Unity', 'Penn', 'Metson', 'Milnes', 'Parkinson', 'McGavock', 'Free', 'Free', 'Unknown'], 'Izakk C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Free', 'Unknown'], 'Kiah V': ['Unity', 'Penn', 'Metson', 'Milnes', 'Limbrey', 'Foran', 'Penn-ext', 'Free', 'Unknown'], 'Renu V': ['Unity', 'Penn', 'Silibek', 'Free', 'Limbrey', 'Phelps-anc', 'Doyle', 'Doyle', 'Unknown'], 'Tijana P': ['Unity', 'Penn', 'Free', 'Tweddle', 'Free', 'Free', 'Tsaccounis', 'Tsaccounis', 'Free'], 'Til C': ['Unity', 'Penn', 'Herrman', 'Marsh', 'Emaneni', 'Free', 'Tsaccounis', 'Tsaccounis', 'Unknown']};

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

  const change = val => {
    if (val === "Herrman") return "Woodley-phys";
    return val;
  };

  guess.forEach((val, index) => {
    // Unknowns grey no matter what
    const changedVal = change(val);
    // console.log(changedVal);
    if (changedVal === "Unknown") {
      out.push(['#3A3A3C', `${subjects[changedVal]} - ${changedVal.split('-')[0]}`]);
    } else if (changedVal === target[index]) {
      out.push(['#6CA965', `${subjects[changedVal]} - ${changedVal.split('-')[0]}`]);
      unmatched[index] = null;
      usedSubjs[index] = null;
    } else if (changedVal === "Woodley-phys" && target[index] === "Herrman" || changedVal == "Herrman" && target[index] === "Woodley-phys") {
      out.push(['#6CA965', `${subjects[changedVal]} - ${changedVal.split('-')[0]}`]);
      unmatched[index] = null;
      usedSubjs[index] = null;
    } else if (unmatched.includes(changedVal)) {
      out.push(['#C8B653', `${subjects[changedVal]} - ${changedVal.split('-')[0]}`]);
      unmatched[unmatched.indexOf(changedVal)] = null; // prevent dup yellow

    } else if (Object.values(subjects).includes(subjects[changedVal]) && usedSubjs.some(code => code && subjects[code] === subjects[changedVal])) {
      out.push(['#C8B653', `${subjects[changedVal]} - ${changedVal.split('-')[0]}`]);
      let firstMatch = usedSubjs.findIndex(code => code && subjects[code] === subjects[changedVal]);
      usedSubjs[firstMatch] = null; // prevent dup yellow on same subj

    } else {
      out.push(['#3A3A3C', `${subjects[changedVal]} - ${changedVal.split('-')[0]}`])
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
  "Heka-ext": "History Extension",
  "Unknown": "Unknown"
};
