function grades(grade) {

    let description = String();
    if (grade < 3) {
        description = 'Fail';
    } else if (grade >= 3 && grade < 3.5) {
        description = 'Poor'
    } else if (grade >= 3.5 && grade < 4.5) {
        description = 'Good';
    } else if (grade >= 4.5 && grade < 5.5) {
        description = 'Very good';
    } else if (grade >= 5.5 && grade <= 6.00) {
        description = 'Excellent'
    }
    if (grade >= 3.00 && grade <= 6.00) {
        console.log(`${description} (${grade.toFixed(2)})`)
    } else if (grade <= 2.99 && grade >= 2.00) {
        console.log('Fail (2)')
    }
}