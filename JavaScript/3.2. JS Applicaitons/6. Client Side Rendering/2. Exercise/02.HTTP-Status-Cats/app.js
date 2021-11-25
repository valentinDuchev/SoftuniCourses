import { cats } from './catSeeder.js'
import { html, render } from './node_modules/lit-html/lit-html.js'


const ul = document.getElementById('allCats')
const template = (cat) => html`
<ul>
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
</ul>
`

render(cats.map(template), ul)

ul.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        const button = event.target;
        const info = (button.parentNode.children[1]);
        if (info.style.display == ''){
            info.style.display = 'none';
            button.textContent = 'Show status code'
        } else {
            info.style.display = '';
            button.textContent = 'Show Less' 
        }   
    }
});
