const fibonacci = function (para) {
  if (isNaN(para)) {
    return "OOPS";
  }
  let number = Number(para);
  if (number < 0) {
    return "OOPS";
  }
  if (number == 0) {
    return 0;
  }

  let a = 1;
  let b = 1;
  let c = 2;

  for (let i = 4; i < number + 1; i++) {
    switch (i % 3) {
      case 0:
        c = b + a;
        break;
      case 1:
        a = b + c;
        break;
      case 2:
        b = a + c;
        break;
    }
  }

  switch (number % 3) {
    case 0:
      return c;
    case 1:
      return a;
    case 2:
      return b;
  }
};

// Do not edit below this line
module.exports = fibonacci;
