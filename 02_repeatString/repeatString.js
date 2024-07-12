const repeatString = function (string, repeatCount) {
  if (repeatCount < 0) {
    return "ERROR";
  }
  let res = "";
  for (let i = 0; i < repeatCount; i++) {
    res += string;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
