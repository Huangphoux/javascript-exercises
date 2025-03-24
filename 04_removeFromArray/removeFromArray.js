const removeFromArray = function (array, ...args) {
    const temp = array;

    let i = 0;
    while (i < array.length) {
        if (args.includes(array[i])) {
            temp.splice(i, 1);
        } else {
            i++;
        }
    }

    return temp;
};

// Do not edit below this line
module.exports = removeFromArray;
