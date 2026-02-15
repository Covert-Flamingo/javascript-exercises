let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

function copySorted(arr){
    return [...arr].sort()
}