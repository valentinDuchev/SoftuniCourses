import { displayView, buttons } from './app.js'
import { homeView } from './home.js';

const section = document.getElementById('edit-movie');
section.remove();
const editForm = document.getElementById('editForm')

export async function editMovie(id) {
    displayView(section);
    section.children[0].addEventListener('submit', async (ev) => {
        ev.preventDefault()
        const url = `http://localhost:3030/data/movies/${id}`;
        const formData = new FormData(section.children[0]);

        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const img = formData.get('imageUrl').trim();
        const token = sessionStorage.getItem('token')

        try {
            if (title == '' || description == '' || img == '') {
                const error = 'You cannot submit an empty field.'
                throw new Error(error)
            }
            const response = await fetch(url, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': token
                },
                body: JSON.stringify({
                    title,
                    description,
                    img
                })
            })
            if (response.ok == false) {
                const error = await response.json();
                throw new Error(error.message)
            }
            const result = await response.json();
            console.log(result)
            homeView()
            location.reload();
        } catch (err) {
            alert(err.message)
        }
    });
}


