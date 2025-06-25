// parse csv to get name list
studentNames = [];
let visibleSuggestions = [];
fetch('ppl.csv')
  .then(response => {
    if (!response.ok) {
      throw new Error('failed reading csv');
    }
    return response.text();
  })
  .then(csvText => {
    const lines = csvText.split('\n');
    for (const line of lines.slice(1)) {
        const values = line.split(',');
        let name = values[2].slice(1, -1);
        let nameSplit = name.split(' ');
        nameSplit[1] = nameSplit[1][0];
        studentNames.push(nameSplit[0] + ' ' + nameSplit[1]);
    }
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

function getMatches(query) {
  query = query.toLowerCase();
  return studentNames.filter(name =>
    name.toLowerCase().startsWith(query)
  );
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

  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (selectedSuggestionIndex < visibleSuggestions.length - 1) {
      selectedSuggestionIndex++;
      updateSuggestionHighlight(selectedSuggestionIndex);
    }
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (selectedSuggestionIndex > 0) {
      selectedSuggestionIndex--;
      updateSuggestionHighlight(selectedSuggestionIndex);
    }
  } else if (e.key === "Tab" || e.key === "Enter") {
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

      if (e.key === "Enter") {
        if (studentNames.includes(selected)) {
          enterGuess(selected);
        }
      }
    }
  }
  }
});
