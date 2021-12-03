import { getUserData } from "../util.js";
import { html } from "../lib.js"
import { homePage } from "./home.js";


export function welcome(ctx) {
    const userData = getUserData()
    if (userData == null) {
        welcomePage(ctx);
    } else {
        homePage(ctx)
    }
}

const welcomeTemplate = () => html`
<div id="welcome-container">
    <h1>Welcome To Meme Lounge</h1>
    <img src="/images/welcome-meme.jpg" alt="meme">
    <h2>Login to see our memes right away!</h2>
    <div id="button-div">
        <a href="/login" class="button">Login</a>
        <a href="/register" class="button">Register</a>
    </div>
</div>`

function welcomePage(ctx) {
    ctx.render(welcomeTemplate())
}