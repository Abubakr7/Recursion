" use strict";

var arr = ["Abubakr", "Juraev", 18, "March", 1998];

function rec(array) {

    if (array.length > 0) {
        console.log(array.shift());
        rec(array);
    }

}

rec(arr);