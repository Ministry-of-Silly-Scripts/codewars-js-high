const letterScore = (letter) => {
  return letter.charCodeAt(0) - 96;
};

const wordScore = (word) => {
  const chars = word.split('');
  let score = 0;

  for (let i = 0; i < chars.length; i += 1) {
    score += letterScore(chars[i]);
  }

  return score;
};

const high = (string) => {
  const words = string.split(' ');
  const score = [];

  for (let i = 0; i < words.length; i += 1) {
    score.push(wordScore(words[i]));
  }

  const maxValue = Math.max(...score);
  const maxIdx = score.indexOf(maxValue);

  return words[maxIdx];
};

module.exports = {
  letterScore,
  wordScore,
  high,
};
