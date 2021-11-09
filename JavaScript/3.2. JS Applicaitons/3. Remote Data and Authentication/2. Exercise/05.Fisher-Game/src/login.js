const logForm = document.getElementById('logIn')
logForm.addEventListener('submit', onLogin);

async function onLogin(event) {
    const url = `http://localhost:3030/users/login`

    event.preventDefault();
    const formData = new FormData(logForm);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    try {
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
            const error = await response.json();
            throw new Error(`${error.message}`)
        }

        const result = await response.json();
        console.log(result)

        const token = result.accessToken;
        sessionStorage.setItem('token', token);
        window.location = `http://127.0.0.1:5500/05.Fisher-Game/src/index.html`
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }

}