const date = new Date()
document.getElementById('num-subjectle').textContent = "Subjectle #" + (daysSinceEpoch-20262) + ": " + String(date.getDate()).padStart(2, "0") + "/" + String(date.getMonth()+1).padStart(2, "0") + "/" + date.getFullYear();
