const capitalizeString = (string) => {
  const splitedString = string[0].toUpperCase() + string.slice(1);
  return splitedString;
};

module.exports = { capitalizeString };