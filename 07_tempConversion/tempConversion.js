const convertToCelsius = function (degree) {
    const formula = ((degree - 32) * 5) / 9;
    return +formula.toFixed(1);
};

const convertToFahrenheit = function (degree) {
    const formula = (degree * 9) / 5 + 32;
    return +formula.toFixed(1);
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
