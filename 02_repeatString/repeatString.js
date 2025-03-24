const repeatString = function (string, num) {
  if (num === 0) return "";
  if (num < 0) return "ERROR";

  const start = string;
  for (let i = 0; i < num - 1; i++) {
    string += start;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
