function graduation(input) {
    let index = 0;
    let name = input[index];
    index++
    let clas = 0;
    let avarageGrade = 0
    while (index <= 12) {
        let grade = Number(input[index]);
        clas += 1;
        if (grade < 4) {
            console.log(`${name} has been excluded at ${clas} grade`)
            break;
        }
        index++
        avarageGrade += grade;
        if (clas === 12) {
            console.log(`${name} graduated. Average grade: ${(avarageGrade / 12).toFixed(2)}`)
            break;
        }
    }
}