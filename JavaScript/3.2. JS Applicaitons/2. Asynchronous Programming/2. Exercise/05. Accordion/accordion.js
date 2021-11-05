async function solution() {

    const url = `http://localhost:3030/jsonstore/advanced/articles/list`
    const mainSection = document.getElementById('main')
    const secondDataArr = [];


    try {
        const response = await fetch(url);
        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data)
        for (let element of data) {
            createElement(element)
            makeRequest(element)
        }
        makeNewRequest()
    } catch (error) {
        mainSection.textContent = error.message;

    }

    async function createElement(element) {

        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'accordion');
        newDiv.innerHTML = `
            <div class="head">
                <span>${element.title}</span>
                <button class="button" id="${element._id}">More</button>
            </div>
            <div class="extra">
                <p>Scalable Vector Graphics .....</p>
            </div>`
        mainSection.appendChild(newDiv)

    }

    async function makeRequest(element) {
        const secondUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${element._id}`
        try {
            const secondResponse = await fetch(secondUrl);
            if (secondResponse.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const secondData = await secondResponse.json();
            secondDataArr.push(secondData.content)
        } catch (secondError) {
            mainSection.textContent = error.message;
        }
    }

    async function makeNewRequest() {
        const btn = document.querySelectorAll('.button')
        const btnArr = Array.from(btn);
        btnArr[0].addEventListener('click', (ev) => {
            if (btnArr[0].textContent == 'More') { 
                const currentDiv = (ev.target.parentNode.parentNode);
                currentDiv.children[1].children[0].textContent = secondDataArr[0]
                currentDiv.children[1].style.display = 'inline';
                btnArr[0].textContent = 'Less'
            }  else if (btnArr[0].textContent == 'Less') {
                const currentDiv = (ev.target.parentNode.parentNode);
                currentDiv.children[1].style.display = 'none';
                btnArr[0].textContent = 'More'
            }
        })
        btnArr[1].addEventListener('click', (ev) => {
            if (btnArr[1].textContent == 'More') { 
                const currentDiv = (ev.target.parentNode.parentNode);
                currentDiv.children[1].children[0].textContent = secondDataArr[1]
                currentDiv.children[1].style.display = 'inline';
                btnArr[1].textContent = 'Less'
            }  else if (btnArr[1].textContent == 'Less') {
                const currentDiv = (ev.target.parentNode.parentNode);
                currentDiv.children[1].style.display = 'none';
                btnArr[1].textContent = 'More'
            }
        })
        btnArr[2].addEventListener('click', (ev) => {
            if (btnArr[2].textContent == 'More') { 
                const currentDiv = (ev.target.parentNode.parentNode);
                currentDiv.children[1].children[0].textContent = secondDataArr[2]
                currentDiv.children[1].style.display = 'inline';
                btnArr[2].textContent = 'Less'
            }  else if (btnArr[2].textContent == 'Less') {
                const currentDiv = (ev.target.parentNode.parentNode);
                currentDiv.children[1].style.display = 'none';
                btnArr[2].textContent = 'More'
            }
        })
        btnArr[3].addEventListener('click', (ev) => {
            if (btnArr[3].textContent == 'More') { 
                const currentDiv = (ev.target.parentNode.parentNode);
                currentDiv.children[1].children[0].textContent = secondDataArr[3]
                currentDiv.children[1].style.display = 'inline';
                btnArr[3].textContent = 'Less'
            }  else if (btnArr[3].textContent == 'Less') {
                const currentDiv = (ev.target.parentNode.parentNode);
                currentDiv.children[1].style.display = 'none';
                btnArr[3].textContent = 'More'
            }
        })
    }
}