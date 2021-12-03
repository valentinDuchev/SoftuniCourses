import { register } from '../api/api.js';
import { html, until } from '../lib.js'

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${onSubmit}>
        <fieldset>
            <legend>Register Form</legend>
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
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>
`

export function registerPage (ctx) {
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit (event) {
        event.preventDefault();
        try {
        const formData = new FormData (event.target);
        const email = formData.get('email').trim()
        const password = formData.get('password').trim()
        const repass = formData.get('confirm-pass').trim()

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