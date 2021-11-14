import { sections, hideSections, sectionYears } from "./app.js";
import { findYear } from "./home.js"

hideSections (sections);
sectionYears.style.display = '';

sectionYears.addEventListener('click', (ev) => {
    console.log(findYear(ev))
})