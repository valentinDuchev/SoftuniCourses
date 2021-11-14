import { homeView } from "./home.js";

export async function deleteFunc (id) {
    const url = `http://localhost:3030/data/movies/${id}`

    const token = sessionStorage.getItem('token')
    const options = {
        method: 'delete',
        headers: {
            'X-Authorization': token
        }
    }

    const response = await fetch (url, options);
    const result = await response.json();

    homeView()
    location.reload()
}