window.addEventListener('load', solve);

function solve() {

    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author')
    let date = document.getElementById('date')
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addFunc);

    function addFunc(event) {
        event.preventDefault();
        if (genre.value != '' && name.value != '' && author.value != '' && date.value != '') {

            let firstDiv = document.querySelector('.all-hits-container')
            let divHits = document.createElement('div');
            divHits.setAttribute('class', 'hits-info')
            let img = document.createElement('img');
            img.setAttribute('src', './static/img/img.png');
            divHits.appendChild(img);
            let firstH2 = document.createElement('h2');
            firstH2.textContent = `Genre: ${genre.value}`;
            divHits.appendChild(firstH2);
            let secondH2 = document.createElement('h2');
            secondH2.textContent = `Name: ${name.value}`;
            divHits.appendChild(secondH2);
            let thirdH2 = document.createElement('h2');
            thirdH2.textContent = `Author: ${author.value}`;
            divHits.appendChild(thirdH2);
            let firstH3 = document.createElement('h3');
            firstH3.textContent = `Date: ${date.value}`
            divHits.appendChild(firstH3);
            let firstBtn = document.createElement('button');
            firstBtn.textContent = 'Save song';
            firstBtn.setAttribute('class', 'save-btn');
            divHits.appendChild(firstBtn);
            let secondBtn = document.createElement('button')
            secondBtn.textContent = 'Like Song';
            secondBtn.setAttribute('class', 'like-btn');
            divHits.appendChild(secondBtn);
            let thirdBtn = document.createElement('button')
            thirdBtn.textContent = 'Delete';
            thirdBtn.setAttribute('class', 'delete-btn');
            divHits.appendChild(thirdBtn);
            firstDiv.appendChild(divHits)

            firstBtn.addEventListener('click', () => {
                let savedSongs = document.querySelector('.saved-container');
                divHits.removeChild(firstBtn);
                divHits.removeChild(secondBtn);
                savedSongs.appendChild(divHits);
            })

            secondBtn.addEventListener('click', () => {

                let likes = document.querySelector('.likes>p');
                let likesNum = Number(likes.textContent[13])
                likesNum++;
                likes.textContent = `Total likes: ${likesNum}`;
                secondBtn.disabled = true;
            })
            thirdBtn.addEventListener('click', () => {
                divHits.remove()
            })
        }
        genre.value = '';
        author.value = '';
        date.value = '';
        name.value = '';
    }

}