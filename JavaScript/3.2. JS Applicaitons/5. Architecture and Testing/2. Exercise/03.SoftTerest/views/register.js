import { register } from "../api/api.js";
import { showSection, userNav } from "../app.js";
import { showHomePage } from "./home.js";


const section = document.getElementById('registerPage');
section.remove();


export async function showRegisterPage (event) {
    event.preventDefault()
    showSection(section)
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const formData = new FormData(registerForm);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim()
        const rePass = formData.get('repeatPassword').trim()
        if (password != rePass) {
            return alert ('Passwords must be the same.')
        }
        await register(email, password);
        alert ('You created an account.')
        showHomePage()
    })
}