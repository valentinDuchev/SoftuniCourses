import { displayView, buttons } from './app.js'
import { homeView } from './home.js';

const section = document.getElementById('form-login');
section.remove();
const loginForm = document.getElementById('loginForm')

export function loginView () {
    displayView(section);
    section.children[0].addEventListener('submit', loginRequest);
}



export async function loginRequest (event) {
    event.preventDefault();
    const url = `http://localhost:3030/users/login`;

    const formData = new FormData(section.children[0]);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    try {
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
            const error = await response.json()
            throw new Error (error.message)
        }
        const result = await response.json();
        const token = result.accessToken;
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('email', result.email)
        sessionStorage.setItem('ownerId', result._id)
        
        homeView();
        location.reload()
    } catch (error) {
        alert (error.message)
    }
}