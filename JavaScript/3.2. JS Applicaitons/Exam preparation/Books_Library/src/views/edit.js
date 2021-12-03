import { register } from '../api/api.js';
import { editBook, getById } from '../api/data.js';
import { html, until } from '../lib.js'

const template = (onSubmit, item) => html`
<section id="edit-page" class="edit">
    <form id="edit-form" action="#" method="" @submit=${onSubmit}>
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value="${item.title}">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description">${item.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value="${item.imageUrl}">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value="Fiction">
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`

export async function editPage(ctx) {

    const item = await getById(ctx.params.id);
    ctx.render(template(onSubmit, item))

    async function onSubmit(event) {
        event.preventDefault();

        try {
            const formData = new FormData(event.target);

            const title = formData.get('title').trim()
            const description = formData.get('description').trim()
            const imageUrl = formData.get('imageUrl').trim()
            const type = formData.get('type').trim();

            if (title == '' || description == '' || imageUrl == '' || type == '') {
                throw new Error ('You cannot submit an empty fields')
            }

            const data = {
                title,
                description,
                imageUrl,
                type
            }

            await editBook(ctx.params.id, data)
            ctx.page.redirect('/my-books')
        } catch (err) {
            alert(err)
        }

    }
}