const letterScore = (letter) => {
  return letter.charCodeAt(0) - 96;
};

const high = (string) => {
  const words = string.split(' ');

  if (words.length > 1) {
    if (letterScore(words[0]) > letterScore(words[1])) {
      return words[0];
    }

    return words[1];
  }

  return string;
};

module.exports = {
  letterScore,
  high,
};
