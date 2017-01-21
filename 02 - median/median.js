// A median is a numerical value separating the upper half of a sorted array of numbers from the lower half.
// In a list where there are an odd number of entities, the median is the number found in the middle of the array.
// If the array contains an even number of entities, then there is no single middle value, instead the median becomes
// the average of the two numbers found in the middle.
// For this mission, you are given a non-empty array of natural numbers (X).
// With it, you must separate the upper half of the numbers from the lower half and find the median.
// Input: An array as a list of integers.
// Output: The median as a float or an integer.


// My own
function median(data) {
    var sorted = data.slice().sort((a, b) => a - b);
    var length = data.length;
    if (length % 2) {
        return sorted [(length - 1) / 2];
    } else {
        return (sorted [(length / 2)] + sorted [(length / 2 - 1)]) / 2;
    }
}

// Best

function median(data) {
    data = data.sort((a, b) => a - b)
    n = Math.floor(data.length / 2)
    return (data[n] + data[data.length - 1 - n]) / 2
}

console.log(median([3, 1, 2, 5, 3]));
console.log(median([3, 6, 20, 99, 10, 15]));