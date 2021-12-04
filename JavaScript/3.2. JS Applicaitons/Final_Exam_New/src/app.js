import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { page, render } from "./lib.js"
import { getUserData } from "./util.js";
import { logout } from './api/api.js'
import { catalogPage } from './views/catalog.js'
import { searchPage } from "./views/search.js";

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
page('/catalog', catalogPage)
page('/index.html', homePage) 
page('/search', searchPage)

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
        document.getElementById('createBtn').style.display = 'inline-block'
        document.getElementById('logoutBtn').style.display = 'inline-block'
        document.getElementById('registerBtn').style.display = 'none'
        document.getElementById('loginBtn').style.display = 'none'
    } else {
        document.getElementById('createBtn').style.display = 'none'
        document.getElementById('logoutBtn').style.display = 'none'
        document.getElementById('registerBtn').style.display = 'inline-block'
        document.getElementById('loginBtn').style.display = 'inline-block'
    }
}

async function onLogout () {
    await logout ();
    page.redirect('/')
    updateUserNav()
}


/* 

*/