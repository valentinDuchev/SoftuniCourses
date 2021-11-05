async function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostsBtn = document.getElementById('btnViewPost');
    const posts = document.getElementById('posts');
    const title = document.getElementById('post-title')
    const body = document.getElementById('post-body')
    const comments = document.getElementById('post-comments')

    loadPostsBtn.addEventListener('click', async (ev) => {
        const url = `http://localhost:3030/jsonstore/blog/posts`
        try {
            const response = await fetch(url);
            if (response.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            for (let key in data) {
                const newOption = document.createElement('option');
                newOption.textContent = data[key].title;
                newOption.setAttribute('id', key)
                posts.appendChild(newOption)
            }
            viewPostsBtn.addEventListener('click', async (ev) => {
                const secondUrl = `http://localhost:3030/jsonstore/blog/comments`;
                comments.textContent = '';
                body.textContent = '';
                title.textContent = '';
                try {
                    const secondResponse = await fetch (secondUrl);
                    if (secondResponse.ok == false) {
                        throw new Error (`${secondResponse.status} ${secondResponse.statusText}`);
                    }
                    const secondData = await secondResponse.json();
                    let currentId;
                    let optionsArr = Array.from(document.querySelectorAll('option'))
                    for (let element of optionsArr) {
                        if (element.textContent == posts.value) {
                            currentId = element.id;
                        }
                    }
                    title.textContent = data[currentId].title;
                    body.textContent = (data[currentId].body);

                    for (let key in secondData) {
                        if (data[currentId].id == secondData[key].postId) {
                            let newLi = document.createElement('li')
                            newLi.textContent = secondData[key].text;
                            comments.appendChild(newLi)
                        }  
                    }
                } catch (error) {
                    body.textContent = "Error";
                }
            })
        } catch (error) {
            body.textContent = "Error";
        }
    })
}
attachEvents();
