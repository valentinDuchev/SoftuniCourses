function wordTracker(arr) {

    let obj = {};

    for (let word of arr) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 0;
        }
        if (obj.hasOwnProperty(word)) {
            obj[word] += 1;
        }
    }
    let sortedObj = Object.entries(obj);
    sortedObj.sort((a, b) => b[1] - a[1]);

    for (let [word, tracker] of sortedObj) {
        console.log(`${word} -> ${tracker} times`)
    }


}