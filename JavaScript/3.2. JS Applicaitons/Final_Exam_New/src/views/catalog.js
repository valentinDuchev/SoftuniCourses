import { register } from '../api/api.js';
import { getAll } from '../api/data.js';
import { html, until } from '../lib.js'
import { getUserData } from '../util.js';

const template = (items) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${items.length == 0
    ? html`<p>No Albums in Catalog!</p>`
    : items.map(itemTemplate)
    }
</section>`

const itemTemplate = (item) => html`
<div class="card-box">
    <img src="${item.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${item.name}</p>
            <p class="artist">Artist: ${item.artist}</p>
            <p class="genre">Genre: ${item.genre}</p>
            <p class="price">Price: ${item.price}</p>
            <p class="date">Release Date: ${item.releaseDate}</p>
        </div>
        ${ sessionStorage.getItem('userData') == null
        ? console.log('not logged in')
        : html`<div class="btn-group">
            <a href="${`details/${item._id}`}" id="details">Details</a>
            </div>`
        }
    </div>
</div>`


export async function catalogPage (ctx) {
    const items = await getAll();
    const userData = await getUserData()
    console.log(userData)
    if (userData != null) {
        ctx.render(template(items, userData))
    } else {
        ctx.render(template(items, {}))
    }
}

