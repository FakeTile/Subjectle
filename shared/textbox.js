const studentNames = ['Sebin P', 'Jackson B', 'William Y', 'Alan D', 'Evan M', 'Justin L', 'Calvin J', 'Ronin N', 'Oliver E', 'Matthew E', 'Jethro C', 'Oscar S', 'Lars A', 'William M', 'William Z', 'Byron H', 'Ajdin D', 'Ben H', 'Dylan P', 'Neil J', 'Marley N', 'Ashley N', 'Holly P', 'Hamish M', 'Tahlia R', 'Victoria H', 'Ilira V', 'Isabella H', 'Rory M', 'Larissa R', 'Elizabeth A', 'Ingrid S', 'Nyx B', 'Max H', 'Robert S', 'Tilly F', 'Axl H', 'Samuel P', 'Nat M', 'Hamish N', 'Hannah M', 'Charlie N', 'Victor V', 'Anouk M', 'Tijana P', 'Lily B', 'Catalina P', 'Sarah S', 'Alex S', 'Leki D', 'Isabel J', 'Eileen Z', 'Kiah V', 'Fox L', 'Tilly M', 'William J', 'Nancy L', 'William B', 'Renu V', 'Josie H', 'Luke T', 'Til C', 'Johnny B', 'Finn D', 'Katherine L', 'Milly D', 'Rhys B', 'Angelyn W', 'Mollie F', 'Soham M', 'Finn A', 'Caleb D', 'Kane G', 'Arva B', 'Addyson G', 'Izakk C', 'Savannah H', 'Harrison S', 'Dane C', 'Angel A', 'Marlon M', 'Cooper F', 'Katie D', 'Sean M', 'Zoe D', 'Henry S', 'Nina M', 'Soli B', 'Narelle B', 'Gwendolen T', 'Ned M', 'Abdulmohimen T', 'Jai M', 'Alyssa S', 'Rosie V', 'Ronan G', 'Riley G', 'Oliver S', 'Jayanth S', 'Aidan D', 'Alicia S', 'William W', 'Augie F', 'Anh N', 'Ciaran S', 'Melody M', 'Rayan M', 'Leah S', 'Subhaan U', 'Alice C', 'Freya K', 'Giselle M', 'Scarlett N'];
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
