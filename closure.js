var add = (function() {
    var sum = 0;

    function add(n) {
        sum += +n || 0;
        return add;
    }
    add.valueOf = function() {
        return sum;
    }
    add.toString = valueOf;
    return add;
}());

console.log(add(2)(1)()()(23)()());