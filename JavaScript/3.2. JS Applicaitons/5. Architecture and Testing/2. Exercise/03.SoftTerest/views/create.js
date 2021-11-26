import { createIdea } from "../api/data.js";
import { showSection } from "../app.js";
import { showHomePage } from "./home.js";

const section = document.getElementById('createPage');
section.remove();

export async function showCreatePage (ev) {
    ev.preventDefault();
    showSection(section)
    const form = document.getElementById('createForm');
    form.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const formData = new FormData (form);
        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageURL').trim();
        await createIdea({ title, description, imageUrl });
        alert ('You created an idea.')
        showHomePage()
    })
}