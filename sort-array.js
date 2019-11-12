var arr = [9, 8, 10, -5, 6, 3, 5];
sort = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);