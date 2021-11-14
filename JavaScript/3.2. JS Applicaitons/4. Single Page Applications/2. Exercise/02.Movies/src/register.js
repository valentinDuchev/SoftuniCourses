import { displayView } from './app.js'
import { homeView } from './home.js';

const section = document.getElementById('form-sign-up');
section.remove();

export function registerView () {
    displayView(section);
    section.children[0].addEventListener('submit', registerRequest);
}

export async function registerRequest (ev) {
    ev.preventDefault();
    const url = `http://localhost:3030/users/register`;
    const formData = new FormData (section.children[0]);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePass = formData.get('repeatPassword').trim();

    try {
        if (password != rePass) {
            throw new Error ('Passwords must be the same!')
        }
        if (password.length <= 5) {
            throw new Error ('Password must be at least 6 symbols!')
        }
        const response = await fetch (url, {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, 
                password
            })
        });
        if (response.ok == false) {
            const error = await response.json();
            throw new Error (error.message)
        }
        const result = await response.json();
        console.log(result);
        const token = result.accessToken;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('email', result.email);
        homeView()
        location.reload()
    } catch (err) {
        alert (err.message)
    }

}

