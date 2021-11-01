async function loadCommits() {
    const username = document.getElementById('username').value
    const repo = document.getElementById('repo').value
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    let commits = document.getElementById('commits');

    try {
        const response = await fetch (url);
        commits.textContent = '';
        if (response.ok == false) {
            throw new Error (`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        for (let element of data) {
            let newLi = document.createElement('li');
            newLi.textContent = `${element.commit.author.name}: ${element.commit.message}`;
            commits.appendChild(newLi);
        }
    } catch (error) {
        commits.textContent = '';
        commits.textContent = error.message;
    }

}
