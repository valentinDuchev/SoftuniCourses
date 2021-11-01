function solve() {

    const textArea = document.getElementById('info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let currentId = 'depot';

    async function depart() {
        try {
            let url = `http://localhost:3030/jsonstore/bus/schedule/${currentId}`
            const response = await fetch (url)
            if (response.ok == false) {
                throw new Error (`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            textArea.textContent = `Next stop ${data.name}`
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            console.log(error.message)
        }
    }

    async function arrive() {
        try {
            let url = `http://localhost:3030/jsonstore/bus/schedule/${currentId}`
            const response = await fetch (url);
            if (response.ok == false) {
                throw new Error (`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            departBtn.disabled = false;
            arriveBtn.disabled = true;
            
            textArea.textContent = `Arriving at ${data.name}`
            currentId = data.next;
        } catch (error) {
            console.log(error.message)
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();