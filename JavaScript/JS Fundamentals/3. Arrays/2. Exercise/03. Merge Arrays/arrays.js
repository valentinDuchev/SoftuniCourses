function solve(arr1, arr2) {
    let newArr = [];
    let counter = 0;

    for (let i = 0; i < arr1.length; i++) {

        if (i % 2 == 0) {
            counter += Number(arr1[i]);
            counter += Number(arr2[i]);

            newArr.push(Number(counter))
        } else {
            newArr.push(arr1[i] + arr2[i])
        }
        counter = 0;

    }
    console.log(newArr.join(' - '))


}
solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])