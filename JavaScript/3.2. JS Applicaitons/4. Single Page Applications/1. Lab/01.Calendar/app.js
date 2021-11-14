const year2020 = document.getElementById('year-2020')
const year2021 = document.getElementById('year-2021');
const year2022 = document.getElementById('year-2022');
const year2023 = document.getElementById('year-2023');

export const sectionYears = document.getElementById('years');
export const sections = document.querySelectorAll('section');
//console.log(sections) 

console.log(year2023)

export function hideSections (sections) {
    sections.forEach(section => {
        section.style.display = 'none';
    })
}

hideSections (sections)
