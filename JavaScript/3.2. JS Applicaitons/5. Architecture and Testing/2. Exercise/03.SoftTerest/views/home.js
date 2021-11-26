import { showSection } from "../app.js";


const section = document.getElementById('homePage');
section.remove();

export async function showHomePage () {
    showSection(section)
}