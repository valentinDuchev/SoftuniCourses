let registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', register);


async function register(event) {
    event.preventDefault();

    const url = `http://localhost:3030/users/register`;
    const formData = new FormData(registerForm);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repass = formData.get('rePass').trim();

    try {
        if (password !== repass) {
            const error = `Passwords must be the same!`
            throw new Error(error)
        }
        if (password.length <= 5 || password.length >= 21) {
            const error = `Password must be between 6 and 20 letters`;
            throw new Error(error)
        }
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        let error = await response.message;
        
        if (response.ok == false) {
            error = await response.json();
            throw new Error(error.message)

        }
        const result = await response.json();
        const token = result.accessToken;
        sessionStorage.setItem('token', token);

        window.location = 'http://127.0.0.1:5500/index.html'
    } catch (error) {

        alert(error.message)
    }
}