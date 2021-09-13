function solve (input) {

    let inputNum = Number(input.shift())
    
    for (let i = 0; i<inputNum; i++) {
        let pattern = /\|([A-Z]{4,})\|:#([A-Za-z]+\s[A-Za-z]+)#/g;
        let match = pattern.exec(input[i]);
        if (match != null) {
            console.log(`${match[1]}, The ${match[2]}`)
            console.log(`>> Strength: ${match[1].length}`);
            console.log(`>> Armour: ${match[2].length}`)
            
        } else {
            console.log('Access denied!')
        }
    }


}
solve (["3",
"|GEORGI|:#Lead architect#",
"|Hristo|:#High Overseer#",
"|STEFAN|:#Assistant Game Developer#"])
console.log('---')
solve (["3",
"|PETER|:#H1gh Overseer#",
"|IVAN|:#Master detective#",
"|KARL|: #Marketing lead#"])
