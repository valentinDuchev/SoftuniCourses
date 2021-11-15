import { displayView } from './app.js'
import { homeView } from './home.js';

const section = document.getElementById('add-movie');
section.remove();
const addMovieForm = document.getElementById('addMovieForm')

export function addMovieView () {
    displayView(section);
    section.children[0].addEventListener('submit', addMovieRequest);
}

async function addMovieRequest (ev) {
    ev.preventDefault();
    const url = `http://localhost:3030/data/movies`;
    const formData = new FormData (section.children[0]);
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageUrl').trim();

    const token = sessionStorage.getItem('token');

    try {
        if (title == '' || description == '' || img == '') {
            throw new Error ('Cannot submit empty fields.')
        }
        const response = await fetch (url, {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json', 
                'X-Authorization': token
            }, 
            body: JSON.stringify({
                title, 
                description, 
                img
            })
        });
        if (response.ok == false) {
            const error = await response.json();
            throw new Error (error.message)
        } 
        const result = await response.json();
        homeView()
        location.reload()

    } catch (err) {
        alert (err.message)
    }
}