const stringLength = (string) => {
  const { length } = string;
  if (length < 1 && length > 10) {
    throw new Error('string is at least 1 character long and not longer than 10 characters');
  }
  return length;
};

module.exports = { stringLength };