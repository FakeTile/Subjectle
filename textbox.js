const studentNames = ['Abdulmohimen T', 'Addyson G', 'Aidan D', 'Ajdin D', 'Alan D', 'Alex S', 'Alicia S', 'Alyssa S', 'Angel A', 'Angelyn W', 'Anh N', 'Anouk M', 'Arva B', 'Ashley N', 'Augie F', 'Axl H', 'Ben H', 'Byron H', 'Caleb D', 'Calvin J', 'Catalina P', 'Charlie N', 'Ciaran S', 'Cooper F', 'Dane C', 'Dylan P', 'Eileen Z', 'Elizabeth A', 'Evan M', 'Finn D', 'Finn A', 'Fox L', 'Gwendolen T', 'Hamish M', 'Hamish N', 'Hannah M', 'Harrison S', 'Henry S', 'Holly P', 'Ilira V', 'Ingrid S', 'Isabel J', 'Isabella H', 'Izakk C', 'Jackson B', 'Jai M', 'Jayanth S', 'Jethro C', 'Johnny B', 'Josie H', 'Justin L', 'Kane G', 'Katherine L', 'Katie D', 'Kiah V', 'Larissa R', 'Lars A', 'Leki D', 'Lily B', 'Luke T', 'Marley N', 'Marlon M', 'Matthew E', 'Max H', 'Melody M', 'Milly D', 'Mollie F', 'Nancy L', 'Narelle B', 'Nat M', 'Ned M', 'Neil J', 'Nina M', 'Nyx B', 'Oliver E', 'Oliver S', 'Oscar S', 'Renu V', 'Rhys B', 'Riley G', 'Robert S', 'Ronan G', 'Ronin N', 'Rory M', 'Rosie V', 'Samuel P', 'Sarah S', 'Savannah H', 'Sean M', 'Sebin P', 'Soham M', 'Soli B', 'Tahlia R', 'Tijana P', 'Til C', 'Tilly F', 'Tilly M', 'Victor V', 'Victoria H', 'William Y', 'William M', 'William Z', 'William J', 'William B', 'William W', 'Zoe D'];

const container = document.getElementById('card-container');
const template = document.getElementById('card-template');

// initialise cards
const cardIds = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'];

cardIds.forEach(id => {
  const clone = template.content.cloneNode(true);
  const card = clone.querySelector('.card');
  let visibleSuggestions = [];
  card.id = id;
  container.appendChild(clone);
});

const cards = document.querySelectorAll(".card");

function getMatches(query) {
  query = query.toLowerCase();
  return studentNames.filter(name =>
    name.toLowerCase().startsWith(query)
  );
}

function isValidPerson(person) {
  return person in studentNames;
}

cards.forEach(card => {
  const input = card.querySelector(".name-input");
  const suggestionsDiv = card.querySelector(".suggestions");

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
    
     } if (e.key === "Enter") {
      e.preventDefault();
      const finalInput = input.value.trim();
      if (isValidPerson(finalInput)) {
        enterGuess(finalInput);
        suggestionsDiv.innerHTML = "";
      }
    }
  });
});
