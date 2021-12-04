import { register } from '../api/api.js';
import { html, until } from '../lib.js';

const registerTemplate = (onSubmit) => html`
<section id="registerPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
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
            const repass = formData.get('conf-pass').trim()
    
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