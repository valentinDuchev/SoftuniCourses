import { getDetails, deleteGame, loadComments, createComment } from '../api/data.js'
import { html, until } from '../lib.js'
import { getUserData } from '../util.js'

const template = (item, deleteFunction, comments, commentSubmit) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${item.imageUrl}" />
            <h1>${item.title}</h1>
            <span class="levels">MaxLevel: ${item.maxLevel}</span>
            <p class="type">${item.category}</p>
        </div>
        <p class="text">
            ${item.summary}
        </p>
        <div class="details-comments">
            <h2>Comments</h2>
        ${comments.length == 0
        ? html`<p class="no-comment">No comments.</p>`
        : html`<h2>Comments:</h2>
            <ul>
                ${comments.map(commentTemplate)}
            </ul>`}
        </div>
        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${((JSON.parse(sessionStorage.getItem('userData'))).id) == item._ownerId
    ? html`<div class="buttons">
            <a href="${`/edit/${item._id}`}" class="button">Edit</a>
            <a href="javascript:void(0)" class="button" @click=${deleteFunction}>Delete</a>
            </div>
            `
    : console.log('non author')
    }
    ${(((JSON.parse(sessionStorage.getItem('userData'))).id) == item._ownerId)
    ? console.log('author-cannot submit comments')
    : html`<article class="create-comment">
        <label>Add new comment:</label>
        <form class="form" @submit=${commentSubmit}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`
}    
        </div>
</section>`

const commentTemplate = (currComment) => html`
<li class="comment">
    <p>Content: ${currComment.comment}</p>
</li>`

export async function detailsPage (ctx) {
    

    const item = await getDetails(ctx.params.id)

    console.log(item)
    const comments = await loadComments (item._id);
    console.log(comments)
    ctx.render(template(item, deleteFunction, comments, commentSubmit))

    async function deleteFunction () {
        await deleteGame(item._id)
        ctx.page.redirect('/')
    }

    async function commentSubmit (event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const comment = formData.get('comment').trim();
        const id = ctx.params.id;
        

        const data = {
            id, 
            comment
        }
        await createComment (data);
        ctx.page.redirect('/')

    }
}


/*            
    
    <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>

</section>


*/





