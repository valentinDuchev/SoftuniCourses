const form = document.getElementById('form');
form.addEventListener('submit', submitData);
const url = `http://localhost:3030/jsonstore/collections/students`;
const table = document.getElementById('results');


async function submitData(event) {
    
    event.preventDefault();
    const formData = new FormData(form);

    const firstName = formData.get('firstName').trim();
    const lastName = formData.get('lastName').trim();
    const facultyNumber = formData.get('facultyNumber').trim();
    const grade = formData.get('grade').trim();

    const record = {
        firstName,
        lastName,
        facultyNumber,
        grade
    };

    const options = {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(record)
    };
    if (firstName != '' && lastName != '' && facultyNumber != '' && grade != '') {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
    }

    getStudents(event);
}

async function getStudents(event) {
    event.preventDefault()
    table.children[1].textContent = '';
    try {
        const response = await fetch(url);
        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        for (let element in data) {
             table.children[1].innerHTML += `
            <tr>
                <th>${data[element].firstName}</th>
                <th>${data[element].lastName}</th>
                <th>${data[element].facultyNumber}</th>
                <th>${data[element].grade}</th>
            </tr>
            ` 
            //console.log(table)
           // console.log(data[element].firstName)

        }

    } catch (err) {

    }
    form.reset()
}