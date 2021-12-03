import { logout } from "./api/api.js";
import { page, render } from "./lib.js"
import { getUserData } from "./util.js";
import { addBookPage } from "./views/addBook.js";
import { dashboardPage } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { loginPage } from "./views/login.js";
import { myBooksPage } from "./views/myBooks.js";
import { registerPage } from "./views/register.js";

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext);
page('/', dashboardPage)
page('/login', loginPage) 
page('/register', registerPage)
page('/add-book', addBookPage)
page('/dashboard', dashboardPage) 
page('/details/:id', detailsPage)
page('/edit/:id', editPage) 
page('/my-books', myBooksPage)
page ('/index.html', dashboardPage)

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
        document.getElementById('welcomeSpan').textContent = `Welcome, ${userData.email}`;
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