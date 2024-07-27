const palindromes = function (string) {
  let rawString = [...string]
    .filter(
      (c) => c.toLowerCase() !== c.toUpperCase() || (!isNaN(c) && c !== " ")
    )
    .join();
  let stringLength = rawString.length;
  for (let i = 0; i < stringLength / 2; i++) {
    if (
      rawString[i].toLowerCase() !==
      rawString[stringLength - i - 1].toLowerCase()
    ) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
