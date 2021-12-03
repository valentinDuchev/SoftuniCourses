import { editMeme, getById } from '../api/data.js';
import { html } from '../lib.js'
//import { login } from '../api/api.js'

const editTemplate = (item, onSubmit) => html`
<form id="edit-form" @submit=${onSubmit}>
    <h1>Edit Meme</h1>
    <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" value="${item.title}">
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description">
                          ${item.description}
                        </textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value = "${item.imageUrl}">
        <input type="submit" class="registerbtn button" value="Edit Meme">
    </div>
</form>`

export async function editPage(ctx) {
    const item = await getById(ctx.params.id)
    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const title = formData.get('title')
        const description = formData.get('description')
        const imageUrl = formData.get('imageUrl')

        const data = {
            title, 
            description,
            imageUrl
        }

        await editMeme (ctx.params.id, data);

    }

}





