import { addMovieView } from './addMovie.js';
import { homeView } from './home.js';
import { loginView, loginRequest } from './login.js';
import { logout } from './logout.js';
import { registerView } from './register.js'
import { displayMovies } from './displayMovies.js'

displayMovies();
const main = document.querySelector('main');
export const buttons = document.querySelectorAll('.nav-link');
export function displayView (section) {
    main.replaceChildren(section);
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');
    const homePageBtn = document.getElementById('homePageBtn')
}

document.getElementById('all-views').style.display = 'none';

const moviesBtn = document.getElementById('moviesBtn')
moviesBtn.addEventListener('click', homeView)

buttons.forEach(button => {
    if (button.textContent == 'Login') {
        button.addEventListener('click', loginView);
    } else if (button.textContent == 'Logout') {
        button.addEventListener('click', logout);
    } else if (button.textContent == 'Register') {
        button.addEventListener('click', registerView)
    }
});
const token = sessionStorage.getItem('token');
const addMovieButton = document.getElementById('add-movie-button');
//console.log(addMovieButton)
//addMovieButton.children[0].addEventListener('click', addMovieBtnClick);

export function addMovieBtnClick () {
    if (token == null) {
        alert('You have to be logged in to add movies.')
    } else {
        addMovieView();
    }
};
//console.log('yes')
const movies = document.getElementById('movie');
//console.log('yes')
//console.log(movies)

homeView()

