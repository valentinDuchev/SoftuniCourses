function combinations (input){
    let counter = 0;
    let sumNeeded = Number(input[0]);
    for (let x1 = 0; x1<26; x1++){
        for(let x2 = 0; x2<26; x2++){
            for(let x3 = 0; x3<26; x3++){
                if(x1+x2+x3===sumNeeded){
                    counter++;
                }
            }
        }
    }
    console.log(counter)

}