import { login } from '../api/api.js';
import { html } from '../lib.js'

const loginTemplate = (onSubmit, errorMsg) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            ${errorMsg ? html`<div class="form-group error">${errorMsg}</div> ` : null}
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class=${'form-control' + (errorMsg ? ' is-invalid' : '' )} id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class=${'form-control' + (errorMsg ? ' is-invalid' : '' )} id="password" type="password"
                    name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit, ''))

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email').trim()
        const password = formData.get('password').trim()
        try {
            await login(email, password)
            ctx.page.redirect('/')
            ctx.updateUserNav();
        } catch (err) {
            ctx.render(loginTemplate(onSubmit, err))
        }
        
    }
}