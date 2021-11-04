function loadRepos() {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;
	const list = document.getElementById('repos');

	fetch(url)
		.then(response =>  {
			if (response.ok == false) {
				//console.log(response.statusText)
				throw new Error (`${response.status} ${response.statusText}`)
			}
			return response.json()
		})
		.then(handleResponse)
		.catch(handleError)

		function handleResponse (data) {
			list.innerHTML = '';
			for (let repo of data) {
				let newLi = document.createElement('li');
				let newA = document.createElement('a');
				newA.setAttribute('href', repo.html_url);
				newA.textContent = repo.full_name
				newLi.appendChild(newA);
				list.appendChild(newLi)
				//console.log(repo.full_name, repo.html_url);
			}
		}

		function handleError (error) {
			list.innerHTML = '';
			list.textContent = `${error.message}`
			console.log(error)
		}


} 