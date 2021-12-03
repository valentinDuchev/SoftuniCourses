import { getAll } from '../api/data.js'
import { html, until } from '../lib.js'
//import { login } from '../api/api.js'

const homeTemplate = (dataPromise) => html`
<h1>All Memes</h1>
<div id="memes">
    
</div>

<div class="row space-top">
    ${until(dataPromise, html`<p>Loading &hellip;</p>`)}
</div>`


const itemTemplate = (item) => html`
    ${item  ?             
        html `<div class="meme">
                <div class="card">
                    <div class="info">
                        <p class="meme-title">${item.title}</p>
                        <img class="meme-image" alt="meme-img" src=${item.imageUrl}>
                    </div>
                    <div id="data-buttons">
                        <a class="button" href=${`/details/${item._id}`}>Details</a>
                    </div>
                </div>
            </div>`  
            :  
        html `<p class="no-memes">No memes in database.</p>`
    }
`
                

export function homePage(ctx) {
    ctx.render(homeTemplate(loadItems()))
}

async function loadItems () {
    const items = await getAll();
    console.log(items)
    return items.map(itemTemplate)
}

