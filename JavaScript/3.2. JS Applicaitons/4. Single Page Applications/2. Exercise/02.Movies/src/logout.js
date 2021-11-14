import { displayView } from './app.js'
import { homeView } from './home.js';


export async function logout () {
    const url = `http://localhost:3030/users/logout`;
    const token = sessionStorage.getItem('token')
    try {
        if (token !== null) {
            const response = await fetch (url, {
            headers: {
                'X-Authorization': token
            }
        });
        if (response.ok == false) {
            const error = await response.json();
            throw new Error (error.message)
        } 
        sessionStorage.clear();
        homeView()
        alert ('Logged out.')
        location.reload()
        }
        
    } catch (error) {
        alert (error.message)
    }
}