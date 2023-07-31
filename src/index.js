const letterScore = (letter) => {
  return letter.charCodeAt(0) - 96;
};

const high = () => 'a';

module.exports = {
  letterScore,
  high,
};
