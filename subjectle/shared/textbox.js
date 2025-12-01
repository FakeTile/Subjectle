const studentNames = ['Aarez K', 'Abdulmohimen T', 'Addyson G', 'Aidan D', 'Ajdin D', 'Alan D', 'Alex S', 'Alice C', 'Alicia S', 'Alyssa S', 'Angel A', 'Angelyn W', 'Anh N', 'Anouk M', 'Arva B', 'Ashley N', 'Augie F', 'Axl H', 'Ben I', 'Ben H', 'Bonnie D', 'Byron H', 'Caleb D', 'Calvin J', 'Catalina P', 'Charlie N', 'Ciaran S', 'Cooper F', 'Dane C', 'Dylan P', 'Eileen Z', 'Elizabeth A', 'Evan M', 'Finn D', 'Finn A', 'Fox L', 'Freya K', 'Giselle M', 'Gwendolen T', 'Hamish N', 'Hamish M', 'Hannah M', 'Harrison S', 'Henry S', 'Holly P', 'Ilira V', 'Ingrid S', 'Innocent N', 'Isabel J', 'Isabella H', 'Izakk C', 'Jackson B', 'Jai M', 'Jayanth S', 'Jethro C', 'Johnny B', 'Jonathan C', 'Josie H', 'Justin L', 'Kane G', 'Katherine L', 'Katie D', 'Kiah V', 'Larissa R', 'Lars A', 'Leah S', 'Leki D', 'Lily B', 'Luke T', 'Marcus K', 'Marley N', 'Marlon M', 'Matthew E', 'Max H', 'Melody M', 'Milly D', 'Mollie F', 'Nancy L', 'Narelle B', 'Nat M', 'Ned M', 'Neil J', 'Nina M', 'Nyx B', 'Oliver E', 'Oliver S', 'Oscar S', 'Rayan M', 'Renu V', 'Rhys B', 'Riley G', 'Robert S', 'Ronan G', 'Ronin N', 'Rory M', 'Rosie V', 'Samuel P', 'Sarah S', 'Savannah H', 'Scarlett N', 'Sean M', 'Sebin P', 'Soham M', 'Soli B', 'Subhaan U', 'Tahlia R', 'Tijana P', 'Til C', 'Tilly F', 'Tilly M', 'Victor V', 'Victoria H', 'William B', 'William J', 'William Y', 'William W', 'William Z', 'William M', 'Zoe D'];
/* 
 *
 * ATTENTION: KEEP LINE 1 AS THE DEFINITION FOR DATA UNLESS YOU
 * CHANGE update-ppl.py
 *
 */

studentNames.sort((a, b) => {
    const lastNameA = a.split(' ')[1]; 
    const lastNameB = b.split(' ')[1]; 

    if (lastNameA === lastNameB) {
        const firstNameA = a.split(' ')[0]; 
        const firstNameB = b.split(' ')[0]; 
        return firstNameA.localeCompare(firstNameB); 
    }

    return lastNameA.localeCompare(lastNameB); 
});

const container = document.getElementById('card-container');
const template = document.getElementById('card-template');

// initialise cards
const cardIds = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'];


cardIds.forEach(id => {
  const clone = template.content.cloneNode(true);
  const card = clone.querySelector('.card');
  card.id = id;
  container.appendChild(clone);
});

const cards = document.querySelectorAll(".card");

let visibleSuggestions = [];

function getMatches(query) {
  query = query.toLowerCase();
  const startsWithMatches = studentNames.filter(name =>
    name.toLowerCase().startsWith(query)
  );
  if (startsWithMatches.length >= 3) {
    return startsWithMatches.slice(0, 3);
  }
  const minSimilarity = 0.1;

  function levenshtein(a, b) {
    const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++) dp[i][0] = i;
    for (let j = 0; j <= b.length; j++) dp[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }
    return dp[a.length][b.length];
  }

  const scored = studentNames
    .map(name => {
      const lowerName = name.toLowerCase();
      const distance = levenshtein(query, lowerName);
      const maxLen = Math.max(query.length, lowerName.length);
      const similarity = 1 - (distance / maxLen);
      return { name, similarity };
    })
    .filter(item => item.similarity >= minSimilarity && !startsWithMatches.includes(item.name))
    .sort((a, b) => b.similarity - a.similarity);

  const combinedMatches = [...startsWithMatches, ...scored.map(item => item.name)].slice(0, 3);
  return combinedMatches;
}

function isValidPerson(person) {
  return (studentNames.includes(person));
}

cards.forEach(card => {
  const input = card.querySelector(".name-input");
  const button = card.querySelector(".enter-button");
  const suggestionsDiv = card.querySelector(".suggestions");

  function toProperCase(name) {
    let n = name
      .trim()
      .split(' ')
      .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
    card.querySelector(".name-input").value=n;
    return n;
  }
    
  suggestionsDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("suggestion")) {
      input.value = e.target.textContent;
      suggestionsDiv.innerHTML = "";
    }
  });

  let selectedSuggestionIndex = -1;

  function showSuggestions(matches) {
    suggestionsDiv.innerHTML = "";
    visibleSuggestions = matches.slice(0, 3);

    // Start by selecting the first item
    selectedSuggestionIndex = 0;

    visibleSuggestions.forEach((match, idx) => {
      const div = document.createElement("div");
      div.className = "suggestion";
      div.textContent = match;
      if (idx === selectedSuggestionIndex) {
        div.classList.add("highlighted");
      }
      suggestionsDiv.appendChild(div);
    });
  }

  function updateSuggestionHighlight(index) {
    const children = suggestionsDiv.querySelectorAll(".suggestion");
    children.forEach((child, i) => {
      child.classList.toggle("highlighted", i === index);
    });
  }

  input.addEventListener("input", () => {
    const val = input.value.trim();
    if (val === "") {
      suggestionsDiv.innerHTML = "";
      visibleSuggestions = [];
      return;
    }
    const matches = getMatches(val);
    showSuggestions(matches);
  });

  button.addEventListener("click", () => {
    const finalInput = toProperCase(input.value);
    if (isValidPerson(finalInput)) {
      window.enterGuess(finalInput);
      suggestionsDiv.innerHTML = "";
    };
  });

  input.addEventListener("keydown", (e) => {
    if (visibleSuggestions.length === 0) return;

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (selectedSuggestionIndex < visibleSuggestions.length - 1) {
        selectedSuggestionIndex++;
        updateSuggestionHighlight(selectedSuggestionIndex);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (selectedSuggestionIndex > 0) {
        selectedSuggestionIndex--;
        updateSuggestionHighlight(selectedSuggestionIndex);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();

      // Select first suggestion by default if none selected
      if (selectedSuggestionIndex === -1) {
        selectedSuggestionIndex = 0;
        updateSuggestionHighlight(selectedSuggestionIndex);
      }

      const selected = visibleSuggestions[selectedSuggestionIndex];
      if (selected) {
        input.value = selected;
        suggestionsDiv.innerHTML = "";
      }    
    
    } else if (e.key === "Enter") {
      e.preventDefault();
      const finalInput = toProperCase(input.value);
      if (isValidPerson(finalInput)) {
        window.enterGuess(finalInput, selectedSuggestionIndex);
        suggestionsDiv.innerHTML = "";
      }
    }
  });
});
