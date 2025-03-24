const reverseString = function (input) {
    const reverse = [];

    for (let index = input.length; index >= 0; index--) {
        const element = input[index];
        reverse.push(element);
    }

    return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
