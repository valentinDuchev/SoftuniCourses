import { register } from '../api/api.js';
import { getAll } from '../api/data.js';
import { html, until } from '../lib.js'

const template = (items) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${items.length == 0
        ? html`<p class="no-books">No books in database!</p>`
        : html`<ul class="other-books-list">
           ${items.map(itemTemplate)}
            </ul>`}
</section>`

const itemTemplate = (item) => html`
<li class="otherBooks">
    <h3>${item.title}</h3>
    <p>Type: ${item.type}</p>
    <p class="img"><img src="${item.imageUrl}"></p>
    <a class="button" href="${`/details/${item._id}`}">Details</a>
</li>`

export async function dashboardPage (ctx) {
    const items = await getAll();
    ctx.render(template(items)) 
} 