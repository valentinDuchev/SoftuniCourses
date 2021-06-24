function solve(input) {
    let newArr = [];
    let sorted = input.sort((a, b) => a - b);
    if (input.length % 2 == 0) {
        while (input.length > 0) {
            let smallest = input.shift()
            let biggest = input.pop();
            newArr.push(biggest)
            newArr.push(smallest)
        }
    } else {
        console.log(input)
        for (let i = 0; i <= input.length + 1; i++) {
           if (sorted.length != 1) {
                let smallest = sorted.shift()
                let biggest = sorted.pop();
                newArr.push(biggest)
                newArr.push(smallest)
            } 
             else {
                newArr.push(sorted[0])
            } 

        }

    }


    console.log(newArr.join(' '))

}
solve([1, 21, 3, 52, 69])