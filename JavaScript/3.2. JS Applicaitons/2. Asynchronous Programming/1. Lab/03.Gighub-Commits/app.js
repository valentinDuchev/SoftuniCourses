async function loadCommits() {
   const username = document.getElementById('username').value
   const repo = document.getElementById('repo').value
   const url = `https://api.github.com/repos/${username}/${repo}/commits`;

   let commits = document.getElementById('commits');

   fetch (url) 
      .then (response => {
         if (response.ok == false) {
            throw new Error (`${response.status} ${response.statusText}`)
         }
         return response.json();
      })
      .then (handleResponse)
      .catch(handleError);


      function handleResponse (data) {
         commits.textContent = '';
         for (let element of data) {
            let newLi = document.createElement('li');
            newLi.textContent = `${element.commit.author.name}: ${element.commit.message}`;
            commits.appendChild(newLi);
            //console.log(element.commit.author.name)
            //console.log(element.commit.message)
         }
      }

      function handleError (error) {
         commits.textContent = '';
         commits.textContent = error.message


      }

}