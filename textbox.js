// parse csv to get name list
studentNames = ["Angel A", "Tilly C", "Alan D"];

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
        let nameSplit = name.split(' ')
        nameSplit[1] = nameSplit[1][0];
        studentNames.push(nameSplit[0] + ' ' + nameSplit[1]);
    }
  })
  const container = document.getElementById('card-container');
  const template = document.getElementById('card-template');

  // initialise cards
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
  
    function showSuggestions(matches) {
      suggestionsDiv.innerHTML = "";
      matches.slice(0, 4).reverse().forEach((match, idx, arr) => {
        const div = document.createElement("div");
        div.className = "suggestion";
        div.textContent = match;
        if (idx === arr.length - 1) {
          div.classList.add("top-option");
        }
  
        div.onclick = () => {
          input.value = match;
          suggestionsDiv.innerHTML = "";
  
          // Optional: enable next input
          const nextCard = card.nextElementSibling;
          if (nextCard) {
            const nextInput = nextCard.querySelector(".name-input");
            if (nextInput) {
              nextInput.disabled = false;
              nextInput.focus();
            }
          }
  
          input.disabled = true;
        };
        suggestionsDiv.appendChild(div);
      });
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
  
      if (e.key === "Tab" && matches.length > 0) {
        e.preventDefault();
        input.value = matches[0];
        suggestionsDiv.innerHTML = "";
      }
  
      if (e.key === "Enter") {
        const value = input.value.trim().toLowerCase();
        if (studentNames.some(name => name.toLowerCase() === value)) {
          enterGuess(); // adapt if needed
        }
      }
    });
  });
  
