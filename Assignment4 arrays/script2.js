function filterRange(arr, a, b) {
    return arr.filter(value => value >= a && value <= b);
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);