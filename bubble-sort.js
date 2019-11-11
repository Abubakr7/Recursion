var arr = [1, 7, 5, 6, 8, -7, 9, 100, 24, 35, 10];

function bubbleSort(arr, cur = 0) {
    if (cur == arr.length) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let newvar = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = newvar;
        }
    }
    return bubbleSort(arr, cur + 1);

}
console.log(bubbleSort(arr));