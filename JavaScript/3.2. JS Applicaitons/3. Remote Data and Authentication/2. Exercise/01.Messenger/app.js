const sendButton = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh')
sendButton.addEventListener('click', attachEvents);
refreshBtn.addEventListener('click', displayData);
const textarea = document.getElementById('messages');
const nameAuthor = document.querySelector('[name="author"]');
const message = document.querySelector('[name="content"]');


async function attachEvents() {
    const url = `http://localhost:3030/jsonstore/messenger`;
    const data = {
        author: nameAuthor.value,
        content: message.value 
    }
    const options = {
        method: 'post',
        headers: {
            'Content-type': 'aplictaion/json'
        },
        body: JSON.stringify(data)
    }

    const response = await fetch (url, options);
    const result = await response.json();

    nameAuthor.value = '';
    message.value = '';
}

async function displayData () {
    textarea.textContent = '';

    const url = 'http://localhost:3030/jsonstore/messenger';
    const response = await fetch (url);
    const data = await response.json();
    for (let element in data) {
        textarea.textContent += `${data[element].author}: ${data[element].content} \n`
    }
}

