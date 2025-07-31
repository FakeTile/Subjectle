function getDaysSinceEpoch(date) {
    return Math.floor((new Date() - new Date("1970-01-01") - 50400000) / 86400000);
}

// For determinstic Shuffle
function mulberry32(seed) {
    return function () {
      let t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  
function seededShuffle(array, seed) {
	const rng = mulberry32(seed);
	const arr = array.slice();

	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(rng() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	return arr;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}