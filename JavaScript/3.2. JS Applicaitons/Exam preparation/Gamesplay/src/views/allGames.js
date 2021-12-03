import { getAll } from '../api/data.js'
import { html, until } from '../lib.js'

const allGamesTemplate = (items) => html`
<section id="catalog-page">
<h1 class='titleAll'>All Games</h1>
${items.length == 0
    ? html `<h3 class="no-articles">No articles yet</h3>`
    : items.map(itemTemplate)
}
</section>`

const itemTemplate = (item) => html`    
<div class="allGames">
    <div class="allGames-info">
        <img src="${item.imageUrl}">
        <h6>${item.category}</h6>
        <h2>${item.title}</h2>
        <a href=${`/details/${item._id}`} class="details-button">Details</a>
    </div>
</div>`

    
export async function allGamesPage (ctx) {
    const items = await getAll();
    ctx.render(allGamesTemplate(items))
}

