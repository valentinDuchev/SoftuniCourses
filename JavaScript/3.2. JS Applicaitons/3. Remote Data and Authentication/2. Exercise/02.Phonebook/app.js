function attachEvents() {

    const loadBtn = document.getElementById('btnLoad');
    const phonesList = document.getElementById('phonebook');
    const createBtn = document.getElementById('btnCreate');
    let counterOne = 0;
    let counterTwo = 0;
    loadBtn.addEventListener('click', loadNumbers);
    createBtn.addEventListener('click', createNumber);

    async function loadNumbers() {
        phonesList.textContent = ''

        const url = `http://localhost:3030/jsonstore/phonebook`;
        try {
            const response = await fetch(url);
            if (response.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            for (let element in data) {
                phonesList.innerHTML += `
            <li>${data[element].person}: ${data[element].phone}<button class="delete">DELETE</button></li>`;
                counterTwo++;

            } for (let el in data) {
                let buttons = document.querySelectorAll(`.delete`);
                buttons[counterOne].addEventListener('click', (ev) => {
                    const numberToDelete = ev.target.parentNode;
                    for (let element of Object.values(data)) {
                        if (numberToDelete.textContent === element.person + ': ' + element.phone+"DELETE") {
                            removeNumber(element._id);
                        }
                    }
                    numberToDelete.remove();
                })


                counterOne++;
            }
        } catch (error) {

        }
        counterTwo = 0;
        counterOne = 0;
    }

    async function createNumber() {
        console.log('yes')
        const url = `http://localhost:3030/jsonstore/phonebook`;
        let person = document.getElementById('person');
        let phone = document.getElementById('phone');
        

        let data = {
            person: person.value,
            phone: phone.value
        }

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {
            const response = await fetch(url, options);
            if (response.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const result = await response.json();
            console.log(result)

        } catch (error) {

        }
        person.value = '';
        phone.value = '';

    }

    async function removeNumber(el) {
        const url = `http://localhost:3030/jsonstore/phonebook/${el}`;
        const options = {
            method: 'delete'
        }
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            return result;

        } catch (error) {
            alert('An Error has occured.')
        }
    }
}

attachEvents();