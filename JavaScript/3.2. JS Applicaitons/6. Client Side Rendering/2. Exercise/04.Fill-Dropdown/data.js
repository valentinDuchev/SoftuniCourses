export async function getData () {
    const url = `http://localhost:3030/jsonstore/advanced/dropdown`;
    
    const response = await fetch (url);
    const result = await response.json();
    return result
}

export async function postData (text) {
    const url = `http://localhost:3030/jsonstore/advanced/dropdown`;
    const response = await fetch (url, {
        method: 'post', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            text
        })
    });
    const result = await response.json()

    console.log(result)


}