let newDiv = document.getElementById('container')


async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;


    const response = await fetch(url);
    if (response.ok == false) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    for (let key in data) {
        let currentProfile = (data[key]);
        addProfile(currentProfile);
    }
    newDiv.children[0].remove()
}

async function addProfile(currentProfile) {
    const body = document.querySelector('body')
    const newMain = document.createElement('main')
    newMain.setAttribute('id', 'main');
    let index = 0;
    index++;
    newMain.innerHTML = `
    <div class="profile">
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock" ><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${currentProfile.username}" disabled readonly style="display:none" />
        <div id="user1HiddenFields"">
            <hr>
            <label style="display:none">Email:</label>
            <input type="email" name="user1Email" value="${currentProfile.email}" disabled readonly style="display:none" />
            <label style="display:none">Age:</label>
            <input type="email" name="user1Age" value="${currentProfile.age}" disabled readonly style="display:none" />
        </div>
        <button id="${currentProfile.username}">Show more</button>
    </div>
`
    newDiv.appendChild(newMain)
    const showMoreBtn = document.getElementById(`${currentProfile.username}`)
    if (showMoreBtn.textContent == 'Show more') {
        showMoreBtn.addEventListener('click', (ev) => {
            const profile = (ev.target.parentNode);
            const unlocked = (profile.children[4].checked)
            let shown = false;
            if (unlocked == true) {
                if (profile.children[10].textContent == 'Show more') {
                    profile.children[8].style.display = ""
                    profile.children[9].children[1].style.display = "";
                    profile.children[9].children[2].style.display = "";
                    profile.children[9].children[3].style.display = "";
                    profile.children[9].children[4].style.display = "";
                    profile.children[10].textContent = 'Hide it';
                    profile.children[10].addEventListener('click', (ev) => {
                        profile.children[8].style.display = "none"
                        profile.children[9].children[1].style.display = "none";
                        profile.children[9].children[2].style.display = "none";
                        profile.children[9].children[3].style.display = "none";
                        profile.children[9].children[4].style.display = "none";
                        profile.children[10].textContent = 'Show more';
                    })
                } else {
                    profile.children[8].style.display = "none"
                    profile.children[9].children[1].style.display = "none";
                    profile.children[9].children[2].style.display = "none";
                    profile.children[9].children[3].style.display = "none";
                    profile.children[9].children[4].style.display = "none";
                    profile.children[10].textContent = 'Show more';
                    profile.children[10].addEventListener('click', (ev) => {
                        profile.children[8].style.display = ""
                        profile.children[9].children[1].style.display = "";
                        profile.children[9].children[2].style.display = "";
                        profile.children[9].children[3].style.display = "";
                        profile.children[9].children[4].style.display = "";
                        profile.children[10].textContent = 'Hide it';
                    })
                }
            }

            if (shown == true) {

            }
        })
    }
}