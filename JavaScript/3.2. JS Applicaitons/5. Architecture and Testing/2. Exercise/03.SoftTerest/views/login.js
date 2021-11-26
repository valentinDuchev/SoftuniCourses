import { login } from "../api/api.js";
import { showSection, userNav } from "../app.js";
import { showCatalogPage } from "./catalog.js";
import { showHomePage } from "./home.js";


const section = document.getElementById('loginPage');
section.remove();

export async function showLoginPage(event) {
    event.preventDefault()
    showSection(section)
    const loginForm = document.getElementById('loginForm')
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        const formData = new FormData(loginForm);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim()
        await login(email, password);
        showHomePage()
        userNav();
    });
}


