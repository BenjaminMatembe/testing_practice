const reverseString = (string) => {
  const stringReversed = string.split('').reverse().join('');
  return stringReversed;
};

module.exports = { reverseString };