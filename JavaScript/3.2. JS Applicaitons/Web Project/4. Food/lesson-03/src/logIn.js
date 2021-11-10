let logInForm = document.getElementById('logIn');
logInForm.addEventListener('submit', logIn);

async function logIn(event) {
    event.preventDefault();
    const url = `http://localhost:3030/users/login`;

    const formData = new FormData(logInForm);

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
            throw new Error (error.message);
        }
        const result = await response.json();
        const token = result.accessToken;
        sessionStorage.setItem('token', token);

        window.location = "http://127.0.0.1:5500/index.html";
    } catch (error) {
        alert(error.message)
    }
}