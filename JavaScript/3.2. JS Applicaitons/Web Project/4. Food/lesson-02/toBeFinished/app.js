window.addEventListener('load', loading);
const main = document.querySelector('main')
let closed = true;

async function loading(event) {
    event.preventDefault();
    const url = `http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg`;
    try {
        const response = await fetch(url);
        if (response.ok == false) {
            const error = await response.message;
            throw new Error(error.message);
        }
        const data = await response.json();
        data.closed = true;
        for (let element of data) {
            const moreData = await moreRequest(element._id)
            let newArticle = document.createElement('article');
            newArticle.innerHTML = `
            <div class="title">
                <h2>${element.name}</h2>
                </div>
                <div class="small">
                    <img src="${element.img}">
                </div>`
            newArticle.style.display = '';
            newArticle.setAttribute('class', 'preview')
            main.appendChild(newArticle)

            let secondArticle = document.createElement('article');
            secondArticle.innerHTML = `<h2>${moreData.name}</h2>
                <div class="band">
                    <div class="thumb">
                        <img src="${moreData.img}">
                    </div>
                    <div class="ingredients">
                        <h3>Ingredients:</h3>
                        <ul>
                        </ul>
                    </div>
                </div>
                <div class="description">
                    <h3>Preparation:</h3>
                </div>`
            for (let element of moreData.ingredients) {
                let newLi = document.createElement('li');
                newLi.textContent = element;
                (secondArticle.children[1].children[1].children[1]).appendChild(newLi)
            }
            for (let element of moreData.steps) {
                let newP = document.createElement('p');
                newP.textContent = element;
                secondArticle.children[2].children[0].appendChild(newP)
            }
            secondArticle.setAttribute('class', 'moreInfo')
            secondArticle.style.display = 'none';
            main.appendChild(secondArticle);
        }
        let preview = Array.from(document.querySelectorAll('.preview'))
        let moreInfo = document.querySelectorAll('.moreInfo')
        for (let i = 0; i < preview.length; i++) {
            preview[i].addEventListener('click', (event) => {
                if (closed == false) {
                    preview[i].style.display = 'none';
                    moreInfo[i].style.display = ''
                    closed = true;
                }
                else if (closed == true) {
                    moreInfo[i].addEventListener('click', (ev) => {
                        preview[i].style.display = '';
                        moreInfo[i].style.display = 'none';
                    })

                    closed = false;
                }
            })
        }
        main.children[0].remove();
    } catch (error) {
        alert(error.message)
    }
}

async function moreRequest(id) {
    const url = `http://localhost:3030/data/recipes/${id}`;
    try {
        const response = await fetch(url);
        if (response.ok == false) {
            const error = await response.message;
            throw new Error(error.message)
        } const data = await response.json();
        return (data);

    } catch (error) {
        alert(error.message)
    }
}

