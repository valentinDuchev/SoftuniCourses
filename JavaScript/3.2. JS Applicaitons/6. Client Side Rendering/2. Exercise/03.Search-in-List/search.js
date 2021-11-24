import { towns } from './towns.js'
import { html, render } from './node_modules/lit-html/lit-html.js'

const townsDiv = document.getElementById('towns');
const template = (town) => html`

   <li>${town}</li>
`
render (html`<ul>${towns.map(template)}</ul>`, townsDiv)

const searchText = document.getElementById('searchText');
const searchBtn = document.querySelector('button');
const result = document.getElementById('result')
searchBtn.addEventListener('click', search)
let counter = 0;

function search() {
   for (let element of Array.from(townsDiv.children[0].children)){ 
      element.removeAttribute('class')
   }
   for (let element of Array.from(townsDiv.children[0].children)){
      if (element.textContent.toLowerCase().includes(searchText.value.toLowerCase())) {
         if (searchText.value != '') {
            counter++;
            element.setAttribute('class', 'active');
         }
      }
   }
   result.textContent = `${counter} matches found.`;
   searchText.value = '';
   counter = 0;
   


}


