window.addEventListener('load', async () => {
    const token = sessionStorage.getItem('token');
    if (token == null) {
        window.location = 'http://127.0.0.1:5500/login.html'
    }
    const createForm = document.getElementById('createForm');
    createForm.addEventListener('submit', createRecipe);
})

async function createRecipe(event) {
    event.preventDefault();
    const url = 'http://localhost:3030/data/recipes';

    const createForm = document.getElementById('createForm');
    const formData = new FormData(createForm)
    const name = formData.get('name').trim();
    const img = formData.get('img').trim();
    const ingredients = formData.get('ingredients').split('\n')
    const steps = formData.get('steps').split('\n');
    const token = sessionStorage.getItem('token');


    const data = {
        name,
        img,
        ingredients,
        steps
    }
    try {
        const options = {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(data)
        };
        if (name.length == 0 || img.length == 0 || ingredients.length == 0 || steps.length == 0) {
            const error = 'You cannot submit empty textareas!'
            throw new Error(error);
        }
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message)
        }
        const result = await response.json();
        console.log(result);
        window.location = 'index.html'
    } catch (error) {
        alert(error.message)
    }

}

const logOutbtn = document.getElementById('logOutBtn')
logOutbtn.addEventListener('click', logOut);

async function logOut(event) {
    const url = `http://localhost:3030/users/logout`;
    const token = sessionStorage.getItem('token')

    try {
        const response = await fetch(url, {
            methor: 'get',
            headers: {
                'X-Authorization': token
            },
        });
        if (response.ok == false) {
            const error = await response.message;
            throw new Error(error)
        }
        sessionStorage.clear();
    } catch (error) {
        alert(error.message)
    }
}
