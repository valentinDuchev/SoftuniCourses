function solve (input) {
    let obj = {};
    let arr = [];

    let words = input.split(' ')
    for (let word of words) {
        if (obj.hasOwnProperty(word.toLowerCase()) == false) {
            obj[word.toLowerCase()] = 1;
        } else {
            obj[word.toLowerCase()] ++;
        }
     }
    //console.log(obj)
    for (let key in obj) {
        if (obj[key] % 2 == 1) {
            arr.push(key)
        }
    }
    console.log(arr.join(' '))
    
} 
solve ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')