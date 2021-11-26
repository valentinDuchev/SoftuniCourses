//import { showSection } from "../../app.js";

import { showSection } from "../app.js";

const section = document.getElementById('catalogPage');
section.remove();

export async function showCatalogPage (ev) {
    ev.preventDefault()
    showSection(section)
}