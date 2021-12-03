import { get, logout } from './api/api.js';
import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { myProfilePage } from './views/myProfile.js';
import { registerPage } from './views/register.js';
import { welcome } from './views/welcome.js';


const root = document.querySelector('main');
const logoutBtn = document.getElementById('logoutBtn')
logoutBtn.addEventListener('click', onLogout)

page(decorateContext);
page('/', welcome)
page('/home', homePage) 
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage) 
page('/details/:id', detailsPage)
page('/edit/:id', editPage) 
page('/my-profile', myProfilePage)

updateUserNav()
page.start();



function decorateContext (ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

function updateUserNav () {
    const userData = getUserData()
    if (userData) {
        document.querySelector('.user').style.display = 'block'
        document.querySelector('.guest').style.display = 'none'
    } else {
        document.querySelector('.user').style.display = 'none'
        document.querySelector('.guest').style.display = 'block'
    }
}

async function onLogout () {
   await logout()
   page.redirect('/')
   updateUserNav()
}