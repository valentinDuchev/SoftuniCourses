function test(input) {
    let bookNeeded = input[0];
    let index = 1;
    let currentBook = input[index];
    index++;
    while (currentBook !== "No More Books") {
        if (currentBook === bookNeeded) {
            console.log(`You checked ${index - 2} books and found it.`);
            break;
        }
        currentBook = input[index];
        index++;
    } if (currentBook === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 2} books.`);
    }

}