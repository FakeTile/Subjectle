const countries = [
    "Australia", "Austria", "Argentina", "Brazil", "Belgium", "Canada", "China",
    "Denmark", "Dominican Republic", "Egypt", "France", "Finland", "Germany",
    "Greece", "Hungary", "India", "Indonesia", "Italy", "Japan", "Kenya", "Mexico",
    "Netherlands", "New Zealand", "Norway", "Poland", "Portugal", "Russia", "Spain",
    "Sweden", "Switzerland", "Thailand", "Turkey", "United Kingdom", "United States",
    "Vietnam", "Zimbabwe"
  ];
  
  const input = document.getElementById("name-input");
  const suggestionsDiv = document.getElementById("suggestions");
  
  function getMatches(query) {
    query = query.toLowerCase();
    return countries.filter(country =>
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
      if (countries.some(c => c.toLowerCase() === value)) {
        console.log("valid");
      }
    }
  });  