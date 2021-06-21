function twoSmallestNums(arr) {

    let sortedInAscending = arr.sort((a, b) => {
        return a - b;
    })
    console.log(sortedInAscending.slice(0, 2).join(' '))

}