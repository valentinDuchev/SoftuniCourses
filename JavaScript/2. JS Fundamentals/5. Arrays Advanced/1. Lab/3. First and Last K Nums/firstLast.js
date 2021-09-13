function slice (arr){
    let k = arr.shift();

    let forward = arr.slice(0, k)
    let backward = arr.slice(arr.length-k);

    console.log(forward.join(' '))
    console.log(backward.join(' '));
    
}