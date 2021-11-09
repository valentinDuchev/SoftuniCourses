const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', onRegister);




async function onRegister(event) {
    const url = `http://localhost:3030/users/register`

    event.preventDefault();
    const formData = new FormData(registerForm);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repass = formData.get('rePass').trim();

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
    if (response.ok == false) {
        throw new Error(`${response.status} ${response.statusText}`)
    }
    const result = await response.json();
    console.log(result);

    const token = result.accessToken;
    sessionStorage.setItem('token', token);

    window.location = `http://127.0.0.1:5500/05.Fisher-Game/src/index.html`


}


