/*Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
removes all dashes, each word after dash becomes uppercased
split string into array
find first letter of every word except the first and uppercase it
join and remove the ,
*/
function camelize(str) {
    let arr = str.split("-");

    let result = arr.map((word, index) => {
        if (index === 0) {
            return word;
        }
        return word[0].toUpperCase() + word.slice(1);
    });

    return result.join("");
}

console.log(camelize("el-perro-samurai"));