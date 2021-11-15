import { displayView } from "./app.js";
import { deleteFunc } from "./delete.js";
import { editMovie } from "./editMovie.js";
import { homeView } from "./home.js";
import { getLikes, getLikesNum, getUserLike } from "./likes.js";


export async function displayMovies(ev) {

    const url = `http://localhost:3030/data/movies`;
    try {
        const response = await fetch(url);
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message)
        }
        const result = await response.json();
        const moviesSection = document.getElementById('movie');
        for (let i = 0; i <= 3; i++) {
            moviesSection.children[0].children[0].children[0].children[0].remove();
        }
        for (let element of result) {
            let currentDiv = document.createElement('div');
            currentDiv.setAttribute('class', 'card mb-4');
            currentDiv.innerHTML = `
            <img class="card-img-top" src="${element.img}"
                                        alt="Card image cap" width="400">
                                    <div class="card-body">
                                        <h4 class="card-title">${element.title}</h4>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#/details/${element._ownerId}">
                                            <button type="button" class="btn btn-info">Details</button>
                                        </a>
                                    </div>
            `
            moviesSection.children[0].children[0].children[0].appendChild(currentDiv)
        }
        for (let element of moviesSection.children[0].children[0].children[0].children) {
            (element.children[2].children[0]).addEventListener('click', (ev) => {
                const currentName = (ev.target.parentNode.parentNode.parentNode.children[1].children[0].textContent);
                for (let element of result) {
                    if (element.title == currentName) {
                        const token = sessionStorage.getItem('token');
                        try {
                            if (token == null) {
                                const error = 'You have to be logged in to see movie details.'
                                throw new Error(error)
                            }
                            detailsRequest(element)
                        } catch (err) {
                            alert(err.message)
                        }
                    }
                }
            })
        }
    } catch (err) {
        alert(err.message)
    }
}

async function detailsRequest(element) {
    const newSection = document.createElement('section');
    newSection.innerHTML = `
    <div class="container">
                    <div class="row bg-light text-dark">
                        <h1>Movie title: ${element.title}</h1>

                        <div class="col-md-8">
                            <img class="img-thumbnail"
                                src="${element.img}" alt="Movie">
                        </div>
                        <div class="col-md-4 text-center">
                            <h3 class="my-3 ">Movie Description</h3>
                            <p>${element.description}</p>
                            <a class="btn btn-danger" id="deleteBtn" href="#">Delete</a>
                            <a class="btn btn-warning" id="editBtn" href="#">Edit</a>
                            <a class="btn btn-primary" id="likeBtn" href="#">Like</a>
                            <a class ="btn" id="homePageBtn" href="#">Return to Home page</a>
                            <span id="likesNumber" class="enrolled span">Likes: ${await getLikesNum(element._id)}</span>
                        </div>
                    </div>
                </div>
    `
    displayView(newSection)
    const homebtn = document.getElementById('homePageBtn');
    homebtn.addEventListener('click', (ev) => {
        homeView()
    })

    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.addEventListener('click', (ev) => {
        deleteFunc(element._id);
    })

    const editBtn = document.getElementById('editBtn');
    editBtn.addEventListener('click', (ev) => {
        editMovie(element._id);
    })

    const likeBtn = document.getElementById('likeBtn');
    let movie = sessionStorage.getItem(element._id)
    let user = sessionStorage.getItem('ownerId');
    if (movie == user) {
        likeBtn.remove();
    }
   
    likeBtn.addEventListener('click', async (ev) => {
        getLikes(element._id, likeBtn);
        const likesNum = document.getElementById('likesNumber');
        likesNum.textContent = `Likes: ${await getLikesNum(element._id)}`;
        const result = await getUserLike(element._id, user);
        console.log(result)
    })

    if (element._ownerId != sessionStorage.getItem('ownerId')) {
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';
    } else {
        likeBtn.style.display = 'none'
    }
}

