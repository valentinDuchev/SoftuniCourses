import { sections, hideSections, sectionYears } from "./app.js";

hideSections (sections);
sectionYears.style.display = '';

export function findYear (ev) {
    if (ev.target.children[0] != undefined) {
        let currentYear = (ev.target.children[0].textContent)
        console.log(currentYear.textContent)
        /* for (let element of sections) {
            if (element.id == `year-${currentYear.textContent}`) {
                console.log(currentYear.textContent)
            }
        } */
        //return currentYear.textContent;
    } else {
       const currentYear = (ev.target.textContent)
       return currentYear.textContent;
    };
}

