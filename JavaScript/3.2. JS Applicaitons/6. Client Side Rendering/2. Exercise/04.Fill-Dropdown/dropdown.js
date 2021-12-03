import { getData, postData } from './data.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

const menu = document.getElementById('menu');

const template = (element) => html`
<option value=${element._id}>${element.text}</option>
`;
const result = await getData();
render(Object.values(result).map(template), menu);

const form = document.querySelector('form');
form.addEventListener('submit', addItem);

async function addItem(event) {
    event.preventDefault();
    const text = document.getElementById('itemText');
    postData (text.value);
    const result = await getData();
    render(Object.values(result).map(template), menu);
}

