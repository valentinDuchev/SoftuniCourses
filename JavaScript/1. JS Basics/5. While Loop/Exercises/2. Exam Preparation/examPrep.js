function exam(input) {
    let index = 0;
    let badGradesPossible = input[index];
    index++;
    let command;
    let exerciseName = String();
    let exerciseGrade = 0;
    let goodGrades = 0;
    let badGrades = 0;
    let allGrades = 0;

    while (badGrades < badGradesPossible) {

        command = input[index];
        exerciseName = String(input[index]);
        allGrades = allGrades + exerciseGrade;

        if (exerciseGrade <= 4.00) {
            badGrades++;
        } else if (exerciseGrade > 4.00) {
            goodGrades++;
        }
        if (badGrades >= badGradesPossible) {
            console.log(`You need a break, ${badGradesPossible} poor grades.`);
            break;
        } if (command === "Enough") {
            console.log(`Average score: ${(allGrades / ((index - 1) / 2)).toFixed(2)}`);
            console.log(`Number of problems: ${(index - 1) / 2}`);
            console.log(`Last problem: ${(input[index - 2])}`);
            break;
        }

        command = input[index];
        exerciseName = String(input[index]);
        index++;
        exerciseGrade = Number(input[index]);
        command = input[index];
        index++;

    }
}