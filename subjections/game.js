const data = {'Sebin P': ['Unity', 'White', 'Silibek', 'Tweddle', 'Free', 'Naito', 'Doyle', 'Doyle'], 'Jackson B': ['Unity', 'Richmond', 'Clarke', 'Free', 'Smith', 'Naito', 'Tsaccounis', 'Tsaccounis'], 'William Y': ['Jones', 'Phelps', 'Silibek', 'Smith', 'Parkinson', 'Naito', 'Free', 'Jones-ext'], 'Alan D': ['Vyas', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Vyas-ext'], 'Evan M': ['Vyas', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Vyas-ext'], 'Justin L': ['Black', 'Treleaven', 'Clarke', 'Smith', 'Rayment', 'Naito', 'Free', 'Black-ext'], 'Calvin J': ['Black', 'Court', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Black-ext'], 'Ronin N': ['Black', 'White', 'Free', 'Smith', 'Ireland', 'Foran', 'Treleaven-ext', 'Black-ext'], 'Oliver E': ['Weekes', 'Treleaven', 'Clarke', 'Heka', 'Ireland', 'Naito', 'Free', 'Free'], 'Matthew E': ['Black', 'Court', 'Emaneni', 'Marsh', 'Smith', 'Foran', 'Free', 'Black-ext'], 'Jethro C': ['Free', 'Penn', 'Metson', 'Heka', 'Ireland', 'Phelps-anc', 'Treleaven-ext', 'Offner'], 'Oscar S': ['Jones', 'Richmond', 'Herrman', 'Bullock', 'Rayment', 'Naito', 'Free', 'Jones-ext'], 'Lars A': ['Black', 'Richmond', 'Silibek', 'Smith', 'Taylor', 'Moller', 'Free', 'Black-ext'], 'William M': ['Jones', 'Richmond', 'Herrman', 'Marsh', 'Emaneni', 'Naito', 'Free', 'Jones-ext'], 'William Z': ['Robinson', 'Court', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Robinson-ext'], 'Byron H': ['Jones', 'Richmond', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Jones-ext'], 'Ajdin D': ['Robinson', 'White', 'Herrman', 'Marsh', 'Taylor', 'Naito', 'Free', 'Robinson-ext'], 'Ben H': ['Black', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'McGavock', 'Free', 'Black-ext'], 'Dylan P': ['Black', 'White', 'Herrman', 'Bullock', 'Limbrey', 'McGavock', 'Free', 'Black-ext'], 'Neil J': ['Robinson', 'Phelps', 'Herrman', 'Marsh', 'Taylor', 'Groves', 'Free', 'Robinson-ext'], 'Marley N': ['Weekes', 'Treleaven', 'Free', 'Milnes', 'Rayment', 'Groves', 'Doyle', 'Doyle'], 'Ashley N': ['Unity', 'White', 'Silibek', 'Tweddle', 'Parkinson', 'Moller', 'Penn-ext', 'Free'], 'Holly P': ['Robinson', 'White', 'Bullock', 'Smith', 'Ireland', 'McGavock', 'Free', 'Robinson-ext'], 'Hamish M': ['Free', 'Penn', 'Richmond-drama', 'Heka', 'Limbrey', 'Moller', 'Treleaven-ext', 'Offner'], 'Tahlia R': ['Vyas', 'Penn', 'Bullock', 'Heka', 'Ireland', 'McGavock', 'Free', 'Vyas-ext'], 'Victoria H': ['Vyas', 'White', 'Silibek', 'Heka', 'Ireland', 'Free', 'Treleaven-ext', 'Vyas-ext'], 'Ilira V': ['Weekes', 'White', 'Metson', 'Heka', 'Ireland', 'Free', 'Treleaven-ext', 'Offner'], 'Isabella H': ['Weekes', 'Court', 'Free', 'Tweddle', 'Limbrey', 'Foran', 'Doyle', 'Doyle'], 'Rory M': ['Weekes', 'Treleaven', 'Richmond-drama', 'Milnes', 'Free', 'Moller', 'Penn-ext', 'Offner'], 'Larissa R': ['Weekes', 'Court', 'Richmond-drama', 'Free', 'Parkinson', 'Moller', 'Treleaven-ext', 'Offner'], 'Elizabeth A': ['Unity', 'Phelps', 'Silibek', 'Heka', 'Ireland', 'Phelps-anc', 'Penn-ext', 'Free'], 'Ingrid S': ['Black', 'Treleaven', 'Herrman', 'Heka', 'Free', 'Naito', 'Treleaven-ext', 'Black-ext'], 'Nyx B': ['Jones', 'Penn', 'Richmond-drama', 'Marsh', 'Smith', 'Naito', 'Free', 'Jones-ext'], 'Max H': ['Jones', 'Richmond', 'Bullock', 'Smith', 'Free', 'McGavock', 'Offner', 'Jones-ext'], 'Robert S': ['Robinson', 'White', 'Silibek', 'Smith', 'Parkinson', 'Phelps-anc', 'Free', 'Robinson-ext'], 'Tilly F': ['Weekes', 'Penn', 'Bullock', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Axl H': ['Unity', 'Treleaven', 'Free', 'Tweddle', 'Ireland', 'Groves', 'Tsaccounis', 'Tsaccounis'], 'Samuel P': ['Woodley', 'Treleaven', 'Free', 'Tweddle', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis'], 'Nat M': ['Unity', 'Court', 'Richmond-drama', 'Free', 'Rayment', 'Moller', 'Doyle', 'Doyle'], 'Hamish N': ['Weekes', 'Penn', 'Bullock', 'Tweddle', 'Taylor', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Hannah M': ['Robinson', 'Court', 'Free', 'Bullock', 'Rayment', 'Phelps-anc', 'Penn-ext', 'Robinson-ext'], 'Charlie N': ['Woodley', 'Treleaven', 'Bullock', 'Milnes', 'Free', 'Naito', 'Treleaven-ext', 'Offner'], 'Victor V': ['Vyas', 'Penn', 'Bullock', 'Marsh', 'Ireland', 'Naito', 'Free', 'Vyas-ext'], 'Anouk M': ['Weekes', 'Phelps', 'Free', 'Milnes', 'Limbrey', 'Phelps-anc', 'Doyle', 'Free'], 'Tijana P': ['Unity', 'Penn', 'Free', 'Tweddle', 'Ireland', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Lily B': ['Black', 'Court', 'Hirsch', 'Bullock', 'Smith', 'McGavock', 'Free', 'Black-ext'], 'Catalina P': ['Jones', 'White', 'Herrman', 'Wellings', 'Limbrey', 'Moller', 'Free', 'Jones-ext'], 'Sarah S': ['Black', 'White', 'Metson', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Black-ext'], 'Alex S': ['Vyas', 'Penn', 'Herrman', 'Heka', 'Rayment', 'Moller', 'Free', 'Vyas-ext'], 'Leki D': ['Robinson', 'Phelps', 'Metson', 'Tweddle', 'Parkinson', 'Free', 'Penn-ext', 'Robinson-ext'], 'Isabel J': ['Free', 'Phelps', 'Richmond-drama', 'Milnes', 'Parkinson', 'Phelps-anc', 'Treleaven-ext', 'Free'], 'Eileen Z': ['Black', 'Penn', 'Silibek', 'Milnes', 'Parkinson', 'Naito', 'Free', 'Black-ext'], 'Kiah V': ['Unity', 'Penn', 'Metson', 'Milnes', 'Limbrey', 'Foran', 'Penn-ext', 'Free'], 'Fox L': ['Black', 'White', 'Herrman', 'Tweddle', 'Taylor', 'McGavock', 'Free', 'Black-ext'], 'Tilly M': ['Vyas', 'Court', 'Silibek', 'Milnes', 'Parkinson', 'Free', 'Penn-ext', 'Vyas-ext'], 'William J': ['Jones', 'White', 'Herrman', 'Wellings', 'Rayment', 'Phelps-anc', 'Free', 'Jones-ext'], 'Nancy L': ['Black', 'Penn', 'Bullock', 'Milnes', 'Rayment', 'Naito', 'Free', 'Black-ext'], 'William B': ['Robinson', 'Phelps', 'Clarke', 'Wellings', 'Ireland', 'Foran', 'Free', 'Robinson-ext'], 'Renu V': ['Unity', 'Penn', 'Silibek', 'Free', 'Limbrey', 'Phelps-anc', 'Doyle', 'Doyle'], 'Josie H': ['Woodley', 'Phelps', 'Clarke', 'Free', 'Rayment', 'Phelps-anc', 'Treleaven-ext', 'Offner'], 'Luke T': ['Jones', 'White', 'Silibek', 'Free', 'Smith', 'Groves', 'Offner', 'Jones-ext'], 'Til C': ['Unity', 'Penn', 'Herrman', 'Marsh', 'Emaneni', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Johnny B': ['Woodley', 'White', 'Clarke', 'Heka', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Finn D': ['Robinson', 'Phelps', 'Clarke', 'Heka', 'Rayment', 'Foran', 'Free', 'Robinson-ext'], 'Katherine L': ['Jones', 'Penn', 'Herrman', 'Heka', 'Taylor', 'Phelps-anc', 'Free', 'Jones-ext'], 'Milly D': ['Unity', 'Court', 'Clarke', 'Heka', 'Ireland', 'Foran', 'Treleaven-ext', 'Free'], 'Rhys B': ['Woodley', 'Treleaven', 'Hirsch', 'Free', 'Limbrey', 'Groves', 'Tsaccounis', 'Tsaccounis'], 'Angelyn W': ['Vyas', 'Treleaven', 'Free', 'Bullock', 'Rayment', 'Naito', 'Treleaven-ext', 'Vyas-ext'], 'Mollie F': ['Robinson', 'Treleaven', 'Hirsch', 'Smith', 'Taylor', 'Free', 'Free', 'Robinson-ext'], 'Soham M': ['Jones', 'Treleaven', 'Clarke', 'Bullock', 'Ireland', 'McGavock', 'Free', 'Jones-ext'], 'Finn A': ['Woodley', 'Court', 'Metson', 'Heka', 'Free', 'Foran', 'Penn-ext', 'Offner'], 'Caleb D': ['Jones', 'Penn', 'Silibek', 'Bullock', 'Smith', 'Naito', 'Free', 'Jones-ext'], 'Kane G': ['Vyas', 'White', 'Richmond-drama', 'Milnes', 'Smith', 'Groves', 'Free', 'Vyas-ext'], 'Arva B': ['Robinson', 'Phelps', 'Bullock', 'Tweddle', 'Ireland', 'Foran', 'Free', 'Robinson-ext'], 'Addyson G': ['Vyas', 'Treleaven', 'Clarke', 'Bullock', 'Smith', 'McGavock', 'Free', 'Vyas-ext'], 'Izakk C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Free'], 'Savannah H': ['Free', 'Court', 'Bullock', 'Heka', 'Ireland', 'Phelps-anc', 'Treleaven-ext', 'Offner'], 'Harrison S': ['Jones', 'Richmond', 'Clarke', 'Smith', 'Taylor', 'Groves', 'Free', 'Jones-ext'], 'Dane C': ['Unity', 'Penn', 'Clarke', 'Smith', 'Rayment', 'Free', 'Doyle', 'Doyle'], 'Angel A': ['Jones', 'Richmond', 'Hirsch', 'Bullock', 'Rayment', 'Free', 'Offner', 'Jones-ext'], 'Marlon M': ['Vyas', 'Phelps', 'Clarke', 'Smith', 'Rayment', 'Groves', 'Free', 'Vyas-ext'], 'Cooper F': ['Robinson', 'Court', 'Hirsch', 'Wellings', 'Smith', 'Groves', 'Free', 'Robinson-ext'], 'Katie D': ['Woodley', 'Phelps', 'Clarke', 'Milnes', 'Free', 'Foran', 'Doyle', 'Doyle'], 'Sean M': ['Woodley', 'Phelps', 'Bullock', 'Tweddle', 'Rayment', 'Foran', 'Free', 'Free'], 'Zoe D': ['Weekes', 'White', 'Metson', 'Tweddle', 'Parkinson', 'Phelps-anc', 'Treleaven-ext', 'Free'], 'Henry S': ['Weekes', 'Richmond', 'Richmond-drama', 'Milnes', 'Free', 'Phelps-anc', 'Doyle', 'Doyle'], 'Nina M': ['Black', 'Court', 'Silibek', 'Wellings', 'Parkinson', 'Phelps-anc', 'Free', 'Black-ext'], 'Soli B': ['Woodley', 'White', 'Clarke', 'Tweddle', 'Limbrey', 'Free', 'Doyle', 'Free'], 'Narelle B': ['Jones', 'Court', 'Silibek', 'Bullock', 'Smith', 'Free', 'Free', 'Jones-ext'], 'Gwendolen T': ['Unity', 'Penn', 'Metson', 'Milnes', 'Parkinson', 'McGavock', 'Free', 'Free'], 'Ned M': ['Black', 'White', 'Herrman', 'Free', 'Taylor', 'McGavock', 'Offner', 'Black-ext'], 'Abdulmohimen T': ['Jones', 'Treleaven', 'Silibek', 'Smith', 'Taylor', 'Foran', 'Free', 'Jones-ext'], 'Jai M': ['Woodley', 'Court', 'Silibek', 'Tweddle', 'Limbrey', 'Free', 'Tsaccounis', 'Tsaccounis'], 'Alyssa S': ['Unity', 'White', 'Free', 'Bullock', 'Ireland', 'Moller', 'Tsaccounis', 'Tsaccounis'], 'Rosie V': ['Vyas', 'White', 'Silibek', 'Bullock', 'Limbrey', 'Foran', 'Free', 'Vyas-ext'], 'Ronan G': ['Jones', 'White', 'Herrman', 'Bullock', 'Taylor', 'McGavock', 'Free', 'Jones-ext'], 'Riley G': ['Jones', 'Court', 'Bullock', 'Tweddle', 'Rayment', 'Groves', 'Free', 'Jones-ext'], 'Oliver S': ['Black', 'Penn', 'Silibek', 'Tweddle', 'Smith', 'Free', 'Penn-ext', 'Black-ext'], 'Jayanth S': ['Robinson', 'Treleaven', 'Bullock', 'Marsh', 'Smith', 'McGavock', 'Free', 'Robinson-ext'], 'Aidan D': ['Black', 'White', 'Clarke', 'Heka', 'Ireland', 'McGavock', 'Free', 'Black-ext'], 'Alicia S': ['Weekes', 'Treleaven', 'Metson', 'Tweddle', 'Ireland', 'Phelps-anc', 'Free', 'Free'], 'William W': ['Robinson', 'Phelps', 'Silibek', 'Bullock', 'Smith', 'Foran', 'Free', 'Robinson-ext'], 'Augie F': ['Robinson', 'Court', 'Clarke', 'Free', 'Smith', 'Foran', 'Offner', 'Robinson-ext'], 'Anh N': ['Black', 'Treleaven', 'Bullock', 'Milnes', 'Rayment', 'Naito', 'Free', 'Black-ext'], 'Ciaran S': ['Vyas', 'Court', 'Clarke', 'Smith', 'Limbrey', 'Groves', 'Free', 'Vyas-ext'], 'Melody M': ['Woodley', 'Penn', 'Hirsch', 'Free', 'Parkinson', 'Phelps-anc', 'Penn-ext', 'Offner'], 'Rayan M': ['Robinson', 'Phelps', 'Silibek', 'Tweddle', 'Smith', 'Foran', 'Free', 'Robinson-ext'], 'Leah S': ['Robinson', 'White', 'Hirsch', 'Bullock', 'Rayment', 'Foran', 'Free', 'Robinson-ext'], 'Subhaan U': ['Black', 'Court', 'Clarke', 'Bullock', 'Rayment', 'Naito', 'Free', 'Black-ext'], 'Alice C': ['Woodley', 'Phelps', 'Metson', 'Heka', 'Free', 'Moller', 'Doyle', 'Doyle'], 'Freya K': ['Jones', 'Treleaven', 'Clarke', 'Smith', 'Parkinson', 'McGavock', 'Free', 'Jones-ext'], 'Giselle M': ['Woodley', 'Treleaven', 'Metson', 'Tweddle', 'Free', 'Groves', 'Tsaccounis', 'Tsaccounis'], 'Scarlett N': ['Woodley', 'Phelps', 'Richmond-drama', 'Bullock', 'Smith', 'Phelps-anc', 'Penn-ext', 'Free'], 'Aarez K': ['Vyas', 'Court', 'Bullock', 'Free', 'Smith', 'McGavock', 'Offner', 'Vyas-ext'], 'Jonathan C': ['Vyas', 'Richmond', 'Silibek', 'Smith', 'Ireland', 'Foran', 'Free', 'Vyas-ext'], 'Ben I': ['Unity', 'Treleaven', 'Bullock', 'Tweddle', 'Free', 'Groves', 'Tsaccounis', 'Tsaccounis'], 'Bonnie D': ['Vyas', 'Treleaven', 'Silibek', 'Tweddle', 'Parkinson', 'Free', 'Penn-ext', 'Vyas-ext'], 'Innocent N': ['Robinson', 'Treleaven', 'Free', 'Smith', 'Parkinson', 'McGavock', 'Penn-ext', 'Robinson-ext'], 'Marcus K': ['Free', 'Court', 'Clarke', 'Heka', 'Ireland', 'Phelps-anc', 'Penn-ext', 'Offner']};

/* 
 *
 * ATTENTION: KEEP LINE 1 AS THE DEFINITION FOR DATA UNLESS YOU
 * CHANGE update-ppl.py
 *
 */

const daysSinceEpoch = getDaysSinceEpoch(new Date());
const rngToday = mulberry32(daysSinceEpoch);

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
  "Treleaven & Penn-ext": "English Extension",
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

function makeBoard() {
    window.table = document.getElementById('board');
    window.inList = [];

    function baseClass(cls) {
        if (cls === 'Treleaven-ext' || cls === 'Penn-ext') return 'Treleaven & Penn-ext';
        if (cls.endsWith('-ext')) return cls; 
        return cls;
    }

    function getClassCategory(cls) {
        if (cls === 'Treleaven & Penn-ext') return 'english';

        const subject = subjects[cls] || '';
        if (subject.includes('Mathematics')) return 'maths';
        if (subject.includes('English')) return 'english';
        return 'elective';
    }

    const classMapRaw = {};
    for (const [name, classes] of Object.entries(data)) {
        for (let cls of classes) {
            if (cls === 'Free') continue;
            cls = baseClass(cls);
            if (!classMapRaw[cls]) classMapRaw[cls] = new Set();
            classMapRaw[cls].add(name);
        }
    }

    const classMap = {};
    for (const [cls, studentsSet] of Object.entries(classMapRaw)) {
        classMap[cls] = Array.from(studentsSet);
    }

    const weightedClasses = [];
    for (const cls of Object.keys(classMap)) {
        const cat = getClassCategory(cls);
        if (cat === 'elective') {
            weightedClasses.push(cls);
        } else {
            if (rngToday() < 0.5) weightedClasses.push(cls);
        }
    }
    weightedClasses.sort(() => rngToday() - 0.5);

    function numSharedClasses(students) {
        const counts = {};
        for (const student of students) {
            const classes = data[student];
            for (let cls of classes) {
                if (cls === 'Free') continue;
                cls = baseClass(cls);
                counts[cls] = (counts[cls] || 0) + 1;
            }
        }
        let total = 0;
        for (const val of Object.values(counts)) {
            if (val === 4) total++;
        }
        return total;
    }

    const usedStudents = new Set();
    window.selectedStudents = [];
    const selectedGroups = [];

    let classIndex = 0;
    while (selectedGroups.length < 4 && classIndex < weightedClasses.length) {
        const cls = weightedClasses[classIndex];
        const pool = classMap[cls].filter(name => !usedStudents.has(name));
        if (pool.length < 4) {
            classIndex++;
            continue;
        }

        let validGroup = null;
        for (let tries = 0; tries < 25; tries++) {
            const sample = [];
            const copy = [...pool];
            while (sample.length < 4 && copy.length > 0) {
                const idx = Math.floor(rngToday() * copy.length);
                sample.push(copy.splice(idx, 1)[0]);
            }
            if (sample.length === 4 && numSharedClasses(sample) <= 2) {
                validGroup = sample;
                break;
            }
        }

        if (!validGroup) {
            classIndex++;
            continue;
        }

        selectedGroups.push([...validGroup, cls]);
        for (const name of validGroup) usedStudents.add(name);
        classIndex++;
    }

    for (const group of selectedGroups) {
        const cls = group[4];
        console.warn(cls)
        for (let i = 0; i < 4; i++) {
            window.selectedStudents.push({ name: group[i], cls });
        }
    }

    for (let i = selectedStudents.length - 1; i > 0; i--) {
        const j = Math.floor(rngToday() * (i + 1));
        [window.selectedStudents[i], window.selectedStudents[j]] = [window.selectedStudents[j], window.selectedStudents[i]];
    }

    table.innerHTML = '';
    window.toggledCount = 0;

    for (let i = 0; i < 4; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 4; j++) {
            const index = i * 4 + j;
            const { name } = selectedStudents[index];
            const cell = document.createElement('td');
            const button = document.createElement('button');
            button.textContent = name;
            button.className = 'cell-button';

            button.addEventListener('click', () => {
                if (button.classList.contains('toggle')) {
                    button.classList.remove('toggle');
                    toggledCount--;
                } else if (toggledCount < 4) {
                    button.classList.add('toggle');
                    toggledCount++;
                }
                document.getElementById('submitButton').disabled = toggledCount !== 4;
                document.getElementById('deselectButton').disabled = toggledCount === 0;
            });

            cell.appendChild(button);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    console.log(selectedGroups);
}

makeBoard();

let guesses = 5;

function removeAGuess() {
    guesses--;
    const guessP = document.getElementById('guessP');
    const dotsSpan = guessP.querySelector('.dots');
    if (dotsSpan) {
        dotsSpan.textContent = '•'.repeat(guesses) + '·'.repeat(5 - guesses);
    }
}

function deselectAll() {
    document.querySelectorAll('.cell-button').forEach(button => {
        if (button.classList.contains('toggle')) {
            button.classList.remove('toggle');
        }
        window.toggledCount = 0;
    });
}

function shuffleBoard() {
    const cells = Array.from(document.querySelectorAll('#board td'));
    const buttons = cells.map(cell => cell.querySelector('button'));

    const enabledButtons = buttons.filter(btn => !btn.disabled);
    const disabledButtons = buttons.filter(btn => btn.disabled);

    const positions = new Map();
    buttons.forEach(btn => {
        positions.set(btn, btn.getBoundingClientRect());
    });

    for (let i = enabledButtons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [enabledButtons[i], enabledButtons[j]] = [enabledButtons[j], enabledButtons[i]];
    }

    const merged = [];
    let enabledIndex = 0, disabledIndex = 0;
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].disabled) {
            merged.push(disabledButtons[disabledIndex++]);
        } else {
            merged.push(enabledButtons[enabledIndex++]);
        }
    }

    merged.forEach((btn, i) => {
        cells[i].appendChild(btn);
    });

    buttons.forEach(btn => {
        const oldRect = positions.get(btn);
        const newRect = btn.getBoundingClientRect();
        const dx = oldRect.left - newRect.left;
        const dy = oldRect.top - newRect.top;

        btn.style.transition = 'none';
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    requestAnimationFrame(() => {
        buttons.forEach(btn => {
            btn.style.transition = 'transform 0.4s ease';
            btn.style.transform = '';
        });
    });
}

let numCorrect = 0;

let guessLog = []

function submitGuess() {
    const selectedButtons = Array.from(document.querySelectorAll('.cell-button.toggle'));
    if (selectedButtons.length !== 4) return;

    const selectedNames = selectedButtons.map(btn => btn.textContent);

    function arraysAreEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }

    function containsArray(arrayOfArrays, targetArray) {
        for (let i = 0; i < arrayOfArrays.length; i++) {
            if (arraysAreEqual(arrayOfArrays[i], targetArray)) {
                return true;
            }
        }
        return false;
    }

    const studentToClass = {};
    for (const { name, cls } of selectedStudents) {
        studentToClass[name] = cls;
    }

    const classGroups = {};
    for (const name of selectedNames) {
        const cls = studentToClass[name];
        if (!classGroups[cls]) classGroups[cls] = [];
        classGroups[cls].push(name);
    }

    let correctClass = null;
    for (const [cls, group] of Object.entries(classGroups)) {
        if (group.length === 4) {
            correctClass = cls;
            break;
        }
    }

    function oneAway(groups, guess) {
        const guessSet = new Set(guess);
        for (const group of Object.values(groups)) {
            const groupSet = new Set(group);
            const unionSize = new Set([...guessSet, ...groupSet]).size;
            const intersectionSize = [...guessSet].filter(x => groupSet.has(x)).length;
            const diff = unionSize - intersectionSize;
            if (diff === 1) {
                return true;
            }
        }
        return false;
    }

    var snackbar = document.getElementById("snackbar");

    if (containsArray(guessLog, selectedNames)) {
        snackbar.textContent = "Combination already guessed!"
        snackbar.className = "show";

        setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
        return;
    }

    guessLog.push(selectedNames);
    if (oneAway(classGroups, selectedNames)) {
        snackbar.textContent = "One away!"
        snackbar.className = "show";

        setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
    }

    if (correctClass) {
        selectedButtons.forEach(btn => {
            btn.classList.remove('toggle');
            btn.classList.add('correct');
            btn.disabled = true;
        });

        const correctGroupNames = new Set(classGroups[correctClass]);

        const currentlyCorrectNames = new Set(
            Array.from(document.querySelectorAll('.cell-button.correct')).map(btn => btn.textContent)
        );

        correctGroupNames.forEach(name => currentlyCorrectNames.add(name));

        const correctStudents = selectedStudents.filter(s => currentlyCorrectNames.has(s.name));
        const restStudents = selectedStudents.filter(s => !currentlyCorrectNames.has(s.name));

        const newCorrectStudents = [...correctGroupNames].map(name => correctStudents.find(s => s.name === name)).filter(Boolean);
        const remainingCorrectStudents = correctStudents.filter(s => !correctGroupNames.has(s.name));

        selectedStudents = [...newCorrectStudents, ...remainingCorrectStudents, ...restStudents];

        const oldButtons = Array.from(document.querySelectorAll('.cell-button'));
        const oldPositions = new Map();
        oldButtons.forEach(btn => {
            oldPositions.set(btn.textContent, btn.getBoundingClientRect());
        });

        table.innerHTML = '';
        for (let i = 0; i < 4; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 4; j++) {
                const index = i * 4 + j;
                const { name, cls } = selectedStudents[index];
                const cell = document.createElement('td');

                const button = document.createElement('button');
                button.textContent = name;
                button.className = 'cell-button';

                if (currentlyCorrectNames.has(name)) {
                    button.classList.add('correct');
                    button.disabled = true;
                    if (!correctGroupNames.has(name)) {
                        button.style.opacity = '0';
                    } else {
                        setTimeout(() => {
                            button.style.opacity = '0';
                        }, 400);
                    }
                }

                button.addEventListener('click', () => {
                    if (button.classList.contains('toggle')) {
                        button.classList.remove('toggle');
                        toggledCount--;
                    } else {
                        if (toggledCount < 4) {
                            button.classList.add('toggle');
                            toggledCount++;
                        }
                    }
                    document.getElementById('submitButton').disabled = (toggledCount !== 4);
                    document.getElementById('deselectButton').disabled = (toggledCount === 0);
                });

                cell.appendChild(button);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        requestAnimationFrame(() => {
            const newButtons = Array.from(document.querySelectorAll('.cell-button'));
            newButtons.forEach(btn => {
                const oldRect = oldPositions.get(btn.textContent);
                if (!oldRect) return;

                const newRect = btn.getBoundingClientRect();
                const dx = oldRect.left - newRect.left;
                const dy = oldRect.top - newRect.top;

                btn.style.transition = 'none';
                btn.style.transform = `translate(${dx}px, ${dy}px)`;
            });

            requestAnimationFrame(() => {
                newButtons.forEach(btn => {
                    btn.style.transition = 'transform 0.4s ease';
                    btn.style.transform = '';
                });
            });
        });

        numCorrect++;
        setTimeout(() => {
            shiftOverlaysDown();
            const newOverlay = document.getElementById('CorrectOverlay' + numCorrect);
            const className = subjects[correctClass];
            newOverlay.querySelector('h').textContent = `${className} - ${correctClass.replace('-ext', '').replace('-drama', '').replace('-anc', '')}`;
            newOverlay.querySelector('p').textContent = `${classGroups[correctClass].join(", ")}`;
            newOverlay.classList.remove('hidden');
            newOverlay.classList.add('visible');
            newOverlay.style.top = '14.8%';
        }, 200);

        toggledCount = 0;
        document.getElementById('submitButton').disabled = true;
        document.getElementById('deselectButton').disabled = true;

    } else {
        removeAGuess();
    }
    if (numCorrect === 4) {
        winGame(guesses);
    }

    if (guesses === 0) {
        loseGame();
    }
}

const overlayShiftPercent = 11.1; 

function shiftOverlaysDown() {
  const overlays = document.querySelectorAll('.correctOverlay.visible');
  overlays.forEach(el => {
    const currentTop = parseFloat(el.style.top) || 0;
    el.style.top = (currentTop + overlayShiftPercent) + '%';
  });
}

function winGame(guessNum) {
    document.getElementById('shuffleButton').disabled = true;
    const winPopup = document.getElementById('winSubjectionsPopup');
    winPopup.querySelector('p').textContent = `You won with ${guessNum} ` + (guessNum == 1 ? `guess` : `guesses`) +` to spare!`;
    winPopup.style.display = "block";
}

function loseGame() {
    document.getElementById('gameOverSubjectionsPopup').style.display = 'block';

    const classGroups = {};
    for (const { name, cls } of selectedStudents) {
        if (!classGroups[cls]) classGroups[cls] = [];
        classGroups[cls].push(name);
    }

    const correctClassNames = Object.entries(classGroups)
        .filter(([cls, names]) => names.length === 4)
        .filter(([cls, names]) => {
            const revealed = Array.from(document.querySelectorAll('.cell-button.correct'))
                .map(b => b.textContent);
            return !names.every(n => revealed.includes(n));
        })
        .map(([cls]) => cls);

    const existingButtons = Array.from(document.querySelectorAll('.cell-button'));
    const nameToButton = new Map(existingButtons.map(b => [b.textContent, b]));
    window.loseClassSequence = [...correctClassNames];
    const table = window.table;

    if (!document.getElementById('faded-button-style')) {
        const style = document.createElement('style');
        style.id = 'faded-button-style';
        style.textContent = `
            .faded-button {
                opacity: 0 !important;
                pointer-events: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    function nextReveal() {
        if (loseClassSequence.length === 0) return;
        const cls = loseClassSequence.shift();
        const group = classGroups[cls];

        group.forEach(name => {
            const btn = nameToButton.get(name);
            btn.classList.add('correct');
            btn.disabled = true;
        });

        const newCorrect = group.map(n => selectedStudents.find(s => s.name === n));
        const rest = selectedStudents.filter(s => !group.includes(s.name));
        selectedStudents = [...newCorrect, ...rest];

        const oldRects = new Map();
        existingButtons.forEach(btn => {
            oldRects.set(btn.textContent, btn.getBoundingClientRect());
        });

        const cells = Array.from(table.querySelectorAll('td'));
        selectedStudents.forEach((s, idx) => {
            const btn = nameToButton.get(s.name);
            cells[idx].appendChild(btn);
        });

        existingButtons.forEach(btn => {
            const oldRect = oldRects.get(btn.textContent);
            const newRect = btn.getBoundingClientRect();
            const dx = oldRect.left - newRect.left;
            const dy = oldRect.top - newRect.top;
            btn.style.transition = 'none';
            btn.style.transform = `translate(${dx}px, ${dy}px)`;
        });

        requestAnimationFrame(() => {
            existingButtons.forEach(btn => {
                btn.style.transition = 'transform 0.4s ease';
                btn.style.transform = '';
            });
            setTimeout(() => {
                group.forEach(name => {
                    const btn = nameToButton.get(name);
                    btn.classList.add('faded-button');
                });

                shiftOverlaysDown();
                const overlay = document.getElementById('CorrectOverlay' + (++numCorrect));
                overlay.querySelector('h').textContent =
                    subjects[cls] + ' – ' + cls.replace(/-ext|-drama|-anc/g, '');
                overlay.querySelector('p').textContent = group.join(', ');
                overlay.classList.remove('hidden');
                overlay.classList.add('visible');
                overlay.style.top = '14.8%';

                setTimeout(nextReveal, 400);
            }, 300);
        });
    }

    document.getElementById('submitButton').disabled = true;
    document.getElementById('deselectButton').disabled = true;
    document.getElementById('shuffleButton').disabled = true;

    nextReveal();
}

function closeWinPopup() {
  document.getElementById('winSubjectionsPopup').style.display = 'none';
}

function closeGameOverPopup() {
  document.getElementById('gameOverSubjectionsPopup').style.display = 'none';
}