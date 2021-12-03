import { register } from '../api/api.js';
import { html, until } from '../lib.js'

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
<form id="register" @submit=${onSubmit}>
    <div class="container">
        <div class="brand-logo"></div>
        <h1>Register</h1>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="maria@email.com">

        <label for="pass">Password:</label>
        <input type="password" name="password" id="register-password">

        <label for="con-pass">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password">

        <input class="btn submit" type="submit" value="Register">

        <p class="field">
            <span>If you already have profile click <a href="/login">here</a></span>
        </p>
    </div>
</form>
</section>`

export function registerPage (ctx) {
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit (event) {
        event.preventDefault();
        try {
        const formData = new FormData (event.target);
        const email = formData.get('email').trim()
        const password = formData.get('password').trim()
        const repass = formData.get('confirm-password').trim()

        if (email == '' || password == '' || repass == '') {
            throw new Error ('You cannot submit an empty fields.')
        }
        if (password != repass) {
            throw new Error ('Passwords must be the same.')
        }
        
        await register (email, password);
        ctx.page.redirect('/')
        ctx.updateUserNav()
        } catch (err) {
            alert(err)
        }

    }
}