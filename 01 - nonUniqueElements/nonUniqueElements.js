// You are given a non-empty list of integers (X). For this task, you should return a
// list consisting of only the non-unique elements in this list. To do so you will need to remove all
// unique elements (elements which are contained in a given list only once). When solving this task, do not
// change the order of the list.
// Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].

// My own
function nonUniqueElements(data) {
    return data.filter(function (i) {
        var count = 0;
        data.forEach(j => {
            if (i === j) count++
        });
        if (count > 1) {
            return true;
        }
    });
}

// Best
function nonUniqueElements(data) {
    return data.filter(function(a){
        return data.indexOf(a) !== data.lastIndexOf(a)
    });
}

console.log(nonUniqueElements([1, 2, 3, 1, 3]));