import { displayView, buttons, addMovieBtnClick } from './app.js'

const section = document.getElementById('home-page');
section.remove();

export function homeView() {
    displayView(section);
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    if (token == null) {
        buttons[0].style.display = 'none';
        buttons[1].style.display = 'none';

       
    } else {
        buttons[0].style.display = '';
        buttons[0].textContent = `Welcome, ${email}`
        buttons[1].style.display = '';
        buttons[2].style.display = 'none';
        buttons[3].style.display = 'none';
    }
    section.children[2].addEventListener('click', addMovieBtnClick)
}

