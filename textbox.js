// parse csv to get name list
let studentNames = [];

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

const cardIds = ['card1', 'card2', 'card3', 'card4'];

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
  let selectedIndex = -1; 

  function showSuggestions(matches) {
    suggestionsDiv.innerHTML = "";
    matches.slice(0, 3).reverse().forEach((match, idx, arr) => {
      const div = document.createElement("div");
      div.className = "suggestion";
      div.textContent = match;
      if (idx === arr.length - 1) {
        div.classList.add("top-option");
      }
      suggestionsDiv.appendChild(div);
    });
    selectedIndex = -1; 
  }

  input.addEventListener("input", () => {
    const val = input.value.trim();
    if (val === "") {
      suggestionsDiv.innerHTML = "";
      return;
    }
    const matches = getMatches(val);
    showSuggestions(matches);
  });

  input.addEventListener("keydown", (e) => {
    const matches = getMatches(input.value.trim());
    const suggestions = suggestionsDiv.querySelectorAll(".suggestion");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (selectedIndex < suggestions.length - 1) {
        selectedIndex++;
        updateSelectedSuggestion(suggestions);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (selectedIndex > 0) {
        selectedIndex--;
        updateSelectedSuggestion(suggestions);
      }
    } else if (e.key === "Tab" && matches.length > 0) {
      e.preventDefault();
      input.value = matches[0];
      suggestionsDiv.innerHTML = "";
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      const selectedSuggestion = suggestions[selectedIndex].textContent;
      input.value = selectedSuggestion;
      enterGuess(selectedSuggestion); 
      suggestionsDiv.innerHTML = "";
    }
  });

  function updateSelectedSuggestion(suggestions) {
    suggestions.forEach((suggestion, index) => {
      if (index === selectedIndex) {
        suggestion.classList.add("selected");
      } else {
        suggestion.classList.remove("selected");
      }
    });
  }

  suggestionsDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("suggestion")) {
      const selectedSuggestion = e.target.textContent;
      input.value = selectedSuggestion;
      enterGuess(selectedSuggestion); 
      suggestionsDiv.innerHTML = "";
    }
  });
});
