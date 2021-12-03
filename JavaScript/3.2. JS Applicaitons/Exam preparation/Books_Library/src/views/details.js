import { register } from '../api/api.js';
import { delBook, getById, getLikes, getSpecificLike, likeBook } from '../api/data.js';
import { html, until } from '../lib.js'
import { getUserData } from '../util.js';

let liked = false;

const template = (book, userId, deleteBook, userData, onLike, likesCount) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            ${userId == book._ownerId
                ? html`<a class="button" href="${`/edit/${book._id}`}">Edit</a>
                       <a class="button" href="javascript:void(0)" @click=${deleteBook}>Delete</a>`
                : console.log('non auhtor')
            }
            ${userData && userId != book._ownerId && liked == false
                ? html`<a class="button" id="likeBtn" href="javascript:void(0)" @click=${onLike}>Like</a>`
                : console.log('either not logged or owner of the current book')
            }
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likesCount}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`

export async function detailsPage (ctx) {
    const book = await getById(ctx.params.id)
    const userData = getUserData()
    const likesCount = await getLikes(book._id)
    let isLikedFromThisUser = await getSpecificLike (userData.id, book._id);
    console.log(isLikedFromThisUser)
    if (userData) {
        ctx.render(template(book, userData.id, deleteBook, userData, onLike, likesCount));
    } else {
        ctx.render(template(book, {}, deleteBook));

    }
    
    async function deleteBook () {
        await delBook(book._id);
        ctx.page.redirect('/');
    }

    async function onLike () {
        const bookId = book._id;
        const data = { bookId } 
        await likeBook (data);
        isLikedFromThisUser = 1;
        document.getElementById('likeBtn').remove();
        ctx.render(template(book, userData.id, deleteBook, userData, onLike, likesCount));
    }
} 


