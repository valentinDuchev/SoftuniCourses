function solve (input) {
    let toTrack = input.shift();
    let [word1, word2] = toTrack.split(' ')
    let obj = {};
    obj[word1] = 0;
    obj[word2] = 0;
    for (let element of input) {
        if (element == word1) {
            obj[word1] ++;
        }
        if (element == word2) {
            obj[word2] ++;
        }
    }
    console.log(obj)

}
solve ([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    )