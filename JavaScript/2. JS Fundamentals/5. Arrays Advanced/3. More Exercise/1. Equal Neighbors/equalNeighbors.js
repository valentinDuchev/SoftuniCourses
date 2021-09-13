function solve(input) {
    let nieghborsCount = 0;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (row < input.length - 1) {
                if (input[row][col] == input[row+1][col]) {
                    nieghborsCount++;
                }
            }
            if (col < input[row].length) {
                if (input[row][col] == input[row][col + 1]) {
                    nieghborsCount++;
                }
            }
        }
    }
    console.log(nieghborsCount)
    

}

(solve([[2, 2, 5, 7, 4],
       [4, 0, 5, 3, 4],
       [2, 5, 5, 4, 2]]
))