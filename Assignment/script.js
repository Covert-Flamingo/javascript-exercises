/*adds seven to the input number*/
function add7(addingLucky){
    return addingLucky + 7
    
}
console.log(add7(10))

/*multiplies both input numbers*/
function multiplication(firstNum , secondNum){
    return firstNum * secondNum
    
}
console.log(multiplication(2 , 5))

/*Capitalizes a the first letter of a string*/
function capitalize(stringy){
    stringy = stringy.toLowerCase();
    return stringy.charAt(0).toUpperCase() + stringy.slice(1)
    
}
console.log(capitalize("PePe"))

/*Capitalizes a the first letter of a string*/
function lastLetter(stringy){
    return stringy.charAt(stringy.length -1)
    
}
console.log(lastLetter("Pepo"))