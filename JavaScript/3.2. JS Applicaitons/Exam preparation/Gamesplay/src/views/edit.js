import { editGame, getDetails } from '../api/data.js';
import { html, until } from '../lib.js'

const template = (item, onSubmit) => html`<section id="edit-page" class="auth">
    <form id="edit" @submit=${onSubmit}>
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="${item.title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="${item.category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="${item.maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="${item.imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${item.summary}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`

export async function editPage(ctx) {
    const item = await getDetails(ctx.params.id)
    ctx.render(template(item, onSubmit))

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.target);

            const title = formData.get('title').trim()
            const category = formData.get('category').trim()
            const maxLevel = formData.get('maxLevel').trim()
            const imageUrl = formData.get('imageUrl').trim()
            const summary = formData.get('summary').trim()

            if (title == '' || category == ''|| maxLevel == '' || imageUrl == '' || summary == '') {
                throw new Error ('You cannot submit an empty fields.')
            }

            const data = {
                title,
                category,
                maxLevel,
                imageUrl,
                summary
            }

            editGame(ctx.params.id, data)
            ctx.page.redirect('/')
            ctx.updateUserNav()
        } catch (err) {
            alert(err)
        }
        
    }
}