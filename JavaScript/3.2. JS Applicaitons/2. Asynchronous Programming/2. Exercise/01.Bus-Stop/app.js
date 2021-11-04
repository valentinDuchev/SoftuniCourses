async function getInfo() {

    let currentId = document.getElementById('stopId').value;
    let url = `http://localhost:3030/jsonstore/bus/businfo/${currentId}`;
    let currentStop = document.getElementById('stopName');
    let busesList = document.getElementById('buses')

    try {
        busesList.textContent = '';
        currentStop.textContent = '';
        const response = await fetch (url);
        if (response.ok == false) {
            throw new Error (`${response.status} ${response.statusText}`)
        }
        const data = await response.json();

        currentStop.textContent = data.name;
        for (let key in data.buses) {
            const busNumber = key;
            const minutesLeft = data.buses[key];
            let newLi = document.createElement('li');
            newLi.textContent = `Bus ${busNumber} arrives in ${minutesLeft} minutes`
            busesList.appendChild(newLi)
        }
        currentId.value = '';
    } catch (error) {
        busesList.textContent = '';
        currentStop.textContent = '';
        currentStop.textContent = 'Error'
    }

    
}