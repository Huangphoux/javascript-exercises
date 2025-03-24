const sumAll = function (start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    if (start < 0 || end < 0) {
        return "ERROR";
    }

    if (end < start) {
        [start, end] = [end, start];
    }
    return ((end - start + 1) * (start + end)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
