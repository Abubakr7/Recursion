var arr = [9, 8, 10, -5, 6, 3, 5];
sort = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);
var nums = [1, 2, 3, 4, 5];
var min = Math.min.apply(Math, nums);
var max = Math.max.apply(Math, nums);

console.log("Min: ", min, " Max: ", max);

function mod(a, b) {
    let m = 0,
        x;
    m = a * x + b;
    return m;
}

console.log(mod(3, 2));