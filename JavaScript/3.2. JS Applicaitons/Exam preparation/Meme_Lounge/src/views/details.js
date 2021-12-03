import { getById } from '../api/data.js'
import { html, until } from '../lib.js'
//import { login } from '../api/api.js'

const detailsTemplate = (itemPromise) => html`
<div class = "row space-top">
    ${until (itemPromise, html`<p>Loading &hellip;</p>`)}
</div>`


const itemTemplate = (item) => html`
<h1>${item.title}

</h1>
<div class="meme-details">
    <div class="meme-img">
        <img alt="meme-alt" src="${item.imageUrl}">
    </div>
    <div class="meme-description">
        <h2>Meme Description</h2>
        <p>
            ${item.description}
        </p>

        <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
        <a class="button warning" href=${`/edit/${item._id}`}>Edit</a>
        <button class="button danger">Delete</button>
        
    </div>
</div>`

export function detailsPage(ctx) {
    
    ctx.render(detailsTemplate(loadItem(ctx.params.id)))
}

async function loadItem (id) {
    const item = await getById(id)

    return itemTemplate(item)
}