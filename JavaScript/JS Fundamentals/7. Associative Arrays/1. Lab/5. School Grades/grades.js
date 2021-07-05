function grades(arr) {

    let obj = {};

    for (let line of arr) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!obj.hasOwnProperty(name)) {
            obj[name] = grades;
        } else {
            let currentGrades = obj[name];
            for (let i = 0; i < grades.length; i++) {
                currentGrades.push(Number(grades[i]));
            }
        }

    }

    let sorted = Object.entries(obj);
    sorted.sort(average);

    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`)
    }

    function average([nameA, gradesA], [nameB, gradesB]) {
        let avgA = 0;
        gradesA.forEach(x => avgA += x)
        avgA /= gradesA.length;

        let avgB = 0;
        gradesB.forEach(x => avgB += x);
        avgB /= gradesB.length;

        return avgA - avgB;
    }


}