import {html, render} from './node_modules/lit-html/lit-html.js';

const citiesForm = document.querySelector('form');
const loadBtn = document.querySelector('button');
const rootDiv = document.getElementById('root')
const template = (town) => html `
    <ul>
        <li>${town}</li>
    </ul>
`

loadBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData (citiesForm);
    const towns = formData.get('towns')

    const townsSplit = towns.split(', ')
    render(townsSplit.map(template), rootDiv) 
})
