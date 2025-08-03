const date = new Date()
document.getElementById('num-subjections').textContent = "Subjections #" + (daysSinceEpoch-20302) + ": " + String(date.getDate()).padStart(2, "0") + "/" + String(date.getMonth()+1).padStart(2, "0") + "/" + date.getFullYear();
