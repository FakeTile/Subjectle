function renderHistogram(targetId) {
  const data = getHistogram();
  const container = document.getElementById(targetId);
  if (!container) return;
  container.innerHTML = '';

  const maxVal = Math.max(...data, 1);

  for (let i = 5; i >= 1; i--) {
    const row = document.createElement('div');
    row.className = 'histogram-row';

    const label = document.createElement('div');
    label.className = 'histogram-label';
    label.textContent = i;

    const barContainer = document.createElement('div');
    barContainer.className = 'bar-container';

    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = `${(data[i] / maxVal) * 100}%`;
    bar.textContent = data[i];

    barContainer.appendChild(bar);
    row.appendChild(label);
    row.appendChild(barContainer);
    container.appendChild(row);
  }

  const failedRow = document.createElement('div');
  failedRow.className = 'histogram-row';

  const failedLabel = document.createElement('div');
  failedLabel.className = 'histogram-label failed';
  failedLabel.textContent = '⨯';

  const failedBarContainer = document.createElement('div');
  failedBarContainer.className = 'bar-container';

  const failedBar = document.createElement('div');
  failedBar.className = 'bar';
  failedBar.style.width = `${(data[0] / maxVal) * 100}%`;
  failedBar.textContent = data[0];

  failedBarContainer.appendChild(failedBar);
  failedRow.appendChild(failedLabel);
  failedRow.appendChild(failedBarContainer);
  container.appendChild(failedRow);

  const total = data.reduce((a, b) => a + b, 0);
  const totalLine = document.createElement('div');
  totalLine.style.marginTop = '2vh';
  totalLine.style.fontWeight = 'bold';
  totalLine.style.textAlign = 'center';
  totalLine.textContent = `${total} game${total === 1 ? '' : 's'} played.`;
  container.appendChild(totalLine);
}

function getHistogram(cookie = "histogramSubjections") {
  h = getCookie(cookie);

  if (h) {
    return h.split(' ').map(Number);
  } else {
    return [0,0,0,0,0,0];
  }
}

function updateHistogram(numGuesses) {
  h = getHistogram();
  h[numGuesses] += 1;
  setCookie("histogramSubjections", h.join(' '), 30);
}

function removeFailedHistogram() {
  h = getHistogram();
  h[0] -= 1;
  setCookie("histogramSubjections", h.join(' '), 30);
}