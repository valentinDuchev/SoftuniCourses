import { logout } from "./api/api.js";
import { showCatalogPage } from "./views/catalog.js";
import { showCreatePage } from "./views/create.js";
import { showHomePage } from "./views/home.js";
import { showLoginPage } from "./views/login.js";
import { showRegisterPage } from "./views/register.js";

const main = document.querySelector('main');

export function showSection(section) {
    main.replaceChildren(section);
}

const navigation = document.querySelectorAll('nav a')
showHomePage();

export function userNav() {
    
    const userData = sessionStorage.getItem('userData');
    if (userData != null) {
        navigation.forEach(btn => {
            if (btn.textContent == 'Login') {
                btn.parentNode.style.display = 'none';
            } if (btn.textContent == 'Register') {
                btn.parentNode.style.display = 'none';
            }
            if (btn.textContent == 'Create') {
                btn.parentNode.style.display = '';
            } if (btn.textContent == 'Logout') {
                btn.parentNode.style.display = ''
            }
        })
    } else {
        navigation.forEach(btn => {
            if (btn.textContent == 'Create') {
                btn.parentNode.style.display = 'none';
            } if (btn.textContent == 'Logout') {
                btn.parentNode.style.display = 'none'
            } if (btn.textContent == 'Login') {
                btn.parentNode.style.display = '';
            } if (btn.textContent == 'Register') {
                btn.parentNode.style.display = '';
            }
        })
    }
}

userNav()



for (let element of navigation) {
    if (element.textContent == 'Login') {
        element.addEventListener('click', showLoginPage)
    } else if (element.textContent == 'Register') {
        element.addEventListener('click', showRegisterPage)
    } else if (element.textContent == 'Home') {
        element.addEventListener('click', showHomePage);
    } else if (element.textContent == 'Logout') {
        element.addEventListener('click', async (ev) => {
            ev.preventDefault();
            await logout()
            alert ('Logged out.')
        });
    } else if (element.textContent == 'Dashboard') {
        element.addEventListener('click', showCatalogPage);
    } else if (element.textContent == 'Create') {
        element.addEventListener('click', showCreatePage);
    }
}

