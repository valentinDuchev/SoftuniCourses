import { allGamesPage } from "./views/allGames.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { page, render } from "./lib.js"
import { getUserData } from "./util.js";
import { logout } from './api/api.js'

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext);
page('/', homePage)
page('/home', homePage) 
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage) 
page('/details/:id', detailsPage)
page('/edit/:id', editPage) 
page('/allGames', allGamesPage)

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
        document.getElementById('user').style.display = 'block'
        document.getElementById('guest').style.display = 'none'
    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'block'
    }
}

async function onLogout () {
    await logout ();
    page.redirect('/')
    updateUserNav()
}

