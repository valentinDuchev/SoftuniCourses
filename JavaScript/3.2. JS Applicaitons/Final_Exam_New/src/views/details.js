import { register } from '../api/api.js';
import { deleteSong, getById } from '../api/data.js';
import { html, until } from '../lib.js'
import { getUserData } from '../util.js';

const template = (item, userId, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${item.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${item.name}</h1>
                <h3>Artist: ${item.artist}</h3>
                <h4>Genre: ${item.genre}</h4>
                <h4>Price: ${item.price}</h4>
                <h4>Date: ${item.relaseDate}</h4>
                <p>Description: ${item.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${userId == item._ownerId
                ? html` <div class="actionBtn">
                            <a href="${`/edit/${item._id}`}" class="edit">Edit</a>
                            <a href="javascript:void(0)" class="remove" @click=${onDelete}>Delete</a>
                        </div>`
                : console.log('not logged in')
            } 
           
        </div>
    </div>
</section>`



export async function detailsPage (ctx) {

    const currentItem = await getById(ctx.params.id)
    const userData = getUserData()
    console.log(currentItem)
    ctx.render(template(currentItem, userData.id, onDelete))

    async function onDelete (event) {
        event.preventDefault();
        await deleteSong(currentItem._id)  
        ctx.page.redirect('/catalog')      
    }
}