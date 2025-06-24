studentNames = []

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
        console.log(nameSplit);
        studentNames.push(nameSplit[0] + ' ' + nameSplit[1]);
    }
  })
 
  const input = document.getElementById("name-input");
  const suggestionsDiv = document.getElementById("suggestions");
  
  function getMatches(query) {
    query = query.toLowerCase();
    return studentNames.filter(country =>
      country.toLowerCase().startsWith(query)
    );
  }
  
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
      if (studentNames.some(c => c.toLowerCase() === value)) {
        console.log("valid");
      }
    }
  });  
