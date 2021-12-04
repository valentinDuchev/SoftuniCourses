import { register } from '../api/api.js';
import { getBySearch } from '../api/data.js';
import { html, until } from '../lib.js';

const template = () => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list searchBtn" id="searchBtn">Search</button>
    </div>

    <h2>Results:</h2>
</section>`

const resultTemplate = (item) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list searchBtn">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="search-result">

        <div class="card-box">
            <img src="${item[0].imgUrl}">
            <div>
                <div class="text-center">
                    <p class="name">Name: ${item[0].name}</p>
                    <p class="artist">Artist: ${item[0].artist}</p>
                    <p class="genre">Genre: ${item[0].genre}</p>
                    <p class="price">Price: ${item[0].price}</p>
                    <p class="date">Release Date: ${item[0].releaseDate}</p>
                </div>
                ${sessionStorage.getItem('userData') == null
        ? console.log('not logged in')
        : html`<div class="btn-group">
                    <a href="${`details/${item[0]._id}`}" id="details">Details</a>
                </div>`
    }

            </div>
        </div>
    </div>
</section>`

const noResultTemplate = () => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list searchBtn">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="search-result">

        <p class="no-result">No result.</p>
    </div>
</section>`



export function searchPage(ctx) {
    
    ctx.render(template())
    const searchBtn = document.querySelector('.searchBtn');


    if (searchBtn.textContent == 'Searched') {
        searchBtn.addEventListener('click', () => console.log('clicked'))
        searchBtn.textContent = 'Search';
    } else {
        searchBtn.addEventListener('click', onSubmit)
        searchBtn.textContent = 'Searched'
    }
    


    async function onSubmit(event) {
        event.preventDefault()
        try {
            const name = (searchBtn.parentNode.children[0].value)
            if (name == '') {
                throw new Error('You cannot search by an empty field')
            }
            const item = await getBySearch(name)
            if (item.length != 0) {
                ctx.render(resultTemplate(item))
            } else {
                ctx.render(noResultTemplate())
            }
        } catch (err) {
            alert(err)
        }
    }
}


/*
 ${item.length == 0
        ? html`<p class="no-result">No result.</p>`
        : html`<div class="card-box">
            <img src="${item[0].imgUrl}">
            <div>
                <div class="text-center">
                    <p class="name">Name: ${item[0].name}</p>
                    <p class="artist">Artist: ${item[0].artist}</p>
                    <p class="genre">Genre: ${item[0].genre}</p>
                    <p class="price">Price: ${item[0].price}</p>
                    <p class="date">Release Date: ${item[0].releaseDate}</p>
                </div>
                <div class="btn-group">
                    <a href="${`/details/${item[0]._id}`}" id="details">Details</a>
                </div>
            </div>
        </div>`
    }
*/