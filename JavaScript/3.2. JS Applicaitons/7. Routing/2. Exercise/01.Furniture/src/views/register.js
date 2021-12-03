import { register } from '../api/api.js';
import { html } from '../lib.js'

const registerTemplate = (onSubmit, errorMsg) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            ${errorMsg ? html`<div class="form-group error">${errorMsg}</div> ` : null}
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class=${'form-control' + (errorMsg ? ' is-invalid' : '')} id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class=${'form-control' + (errorMsg ? ' is-invalid' : '')} id="password" type="password"
                    name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class=${'form-control' + (errorMsg ? ' is-invalid' : '')} id="rePass" type="password"
                    name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>`

export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit), '')

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email').trim()
        const password = formData.get('password').trim()
        const repass = formData.get('rePass').trim()
        try {
            if (email == '' || password == '') {
                throw new Error('All fields are required')
            }
            if (password != repass) {
                throw new Error('Passwords don\'t match ')
            }
            await register(email, password);
            ctx.page.redirect('/')
            ctx.updateUserNav()
        } catch (err) {
            ctx.render(registerTemplate(onSubmit, err))
        }

    }
}