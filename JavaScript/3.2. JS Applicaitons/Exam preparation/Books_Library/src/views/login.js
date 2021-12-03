import { login, register } from '../api/api.js';
import { html, until } from '../lib.js'

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="login">
    <form id="login-form" action="" method="" @submit=${onSubmit}>
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>`

export function loginPage (ctx) {
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit (event) {
        event.preventDefault();

        const formData = new FormData (event.target);
        const email = formData.get('email').trim()
        const password = formData.get('password').trim()
        await login (email, password)
        ctx.page.redirect('/');
        ctx.updateUserNav();
    }
}
