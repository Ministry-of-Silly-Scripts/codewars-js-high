const letterScore = (letter) => {
  return letter.charCodeAt(0) - 96;
};

const high = () => true;

module.exports = {
  letterScore,
  high,
};
