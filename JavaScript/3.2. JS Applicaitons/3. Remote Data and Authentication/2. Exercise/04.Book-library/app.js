const loadBtn = document.getElementById('loadBooks');
let table = document.querySelector('table');
const submitForm = document.getElementById('submitForm')
loadBtn.addEventListener('click', loadBooks);
submitForm.addEventListener('submit', addBook);
const body = document.querySelector('body')

async function loadBooks() {
    document.getElementById('h2Press').remove()
    table.children[1].textContent = '';
    const url = `http://localhost:3030/jsonstore/collections/books`;
    try {
        const response = await fetch(url);
        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        for (let element in data) {
            table.children[1].innerHTML += `
            <tr>
                <td>${data[element].title}</td>
                <td>${data[element].author}</td>
                <td>
                    <button class="edit">Edit</button>
                    <button class="edit">Delete</button>
                </td>
            </tr>`
        }
        let buttonsEdit = document.querySelectorAll('.edit');
        for (let button of Array.from(buttonsEdit)) {
            button.addEventListener('click', (ev) => {
                if (button.textContent == 'Edit') {
                    const name = ev.target.parentNode.parentNode.children[0];
                    for (let element in data) {
                        if (name.textContent == data[element].title) {
                            const id = element;
                            editBook(id)
                        }
                    }
                } else if (button.textContent == 'Delete') {
                    const name = ev.target.parentNode.parentNode.children[0];
                    for (let element in data) {
                        if (name.textContent == data[element].title) {
                            const id = element;
                            deleteBook(id)
                        }
                    }
                    ev.target.parentNode.parentNode.remove()
                }
            })
        }
    } catch (err) {
        alert('Error Found.' + error.message)
    }
}

async function editBook(id) {
    const secondUrl = `http://localhost:3030/jsonstore/collections/books/${id}`;
    submitForm.style.display = 'none'
    body.innerHTML += `
    <form id="editForm" style="display:''">
    <h3>Edit FORM</h3>
        <label>TITLE</label>
        <input type="text" name="title2" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author2" placeholder="Author...">
        <button id="saveBtn">Save</button>
    </form>`
    const editForm = document.getElementById('editForm');
    const saveBtn = document.getElementById('saveBtn');
    console.log(saveBtn)
    editForm.addEventListener('submit', async (ev) => {
        try {
            const data = new FormData(editForm);
            const title = data.get('title2').trim();
            const author = data.get('author2').trim();
            const record = {
                title,
                author
            };
            const options = {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(record)
            }
            submitForm.style.display == ''
            const response = await fetch(secondUrl, options);
            if (response.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const result = await response.json();
            alert('Book Changed')
            editForm.remove();
        } catch (error) {
            alert('An Error has occured.')
        }

    })
}

async function deleteBook(id) {
    const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    const options = {
        method: 'delete'
    }
    const response = await fetch(url, options);
    const result = await response.json()
}

async function addBook() {
    const url = `http://localhost:3030/jsonstore/collections/books`;
    try {
        const data = new FormData(submitForm);
        const title = data.get('title').trim();
        const author = data.get('author').trim();
        const record = {
            title,
            author
        };

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(record)
        }
        if (title != '' && author != '') {
            const response = await fetch(url, options);
            if (response.ok == false) {
                throw new Error (`${response.status} ${response.statusText}`)
            }
            const result = await response.json();
        }
        alert('Book added.');
    } catch (error) {
        alert ('An Error has occured.')
    }
}
