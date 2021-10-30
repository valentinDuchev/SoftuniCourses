function solve() {

    let firstDiv = document.getElementById('container');
    let name = firstDiv.children[0];
    let age = firstDiv.children[1];
    let kind = firstDiv.children[2];
    let currOwner = firstDiv.children[3];
    let addBtn = firstDiv.children[4];
    //addBtn.addEventListener('click', console.log(name.value))
    addBtn.addEventListener('click', addPet);

    function addPet(event) {
        event.preventDefault();
        if (name.value != '' && age != '' && !Number.isNaN(age) && kind.value != '' && currOwner.value != '') {
            let ul = document.querySelectorAll('#adoption ul');
            let newLi = document.createElement('li');
            let newP = document.createElement('p');
            Array.from(ul)[0].appendChild(newLi);
            newLi.appendChild(newP);
            let newStrong1 = document.createElement('strong');
            newStrong1.textContent = name.value;
            newP.appendChild(newStrong1);
            let newText1 = document.createTextNode(' is a ');
            newP.appendChild(newText1);
            let newStrong2 = document.createElement('strong');
            newStrong2.textContent = age.value;
            newP.appendChild(newStrong2);
            let newText2 = document.createTextNode(' year old ');
            newP.appendChild(newText2);
            let newStrong3 = document.createElement('strong');
            newStrong3.textContent = kind.value;
            newP.appendChild(newStrong3);
            let newSpan = document.createElement('span');
            newSpan.textContent = `Owner: ${currOwner.value}`;
            newLi.appendChild(newSpan);

            let newBtn = document.createElement('button');
            newBtn.textContent = 'Contact with owner';
            newLi.appendChild(newBtn)
            //newDiv.appendChild(newBtn)
            newBtn.addEventListener('click', () => {
                let newDiv = document.createElement('div');
                newLi.appendChild(newDiv);
                let enterNamesField = document.createElement('input');
                enterNamesField.placeholder = 'Enter your names';
                newDiv.appendChild(enterNamesField);
                newBtn.remove();
                let takeItBtn = document.createElement('button');
                takeItBtn.textContent = 'Yes! I take it!';
                newDiv.appendChild(takeItBtn)
                takeItBtn.addEventListener('click', () => {
                    if (enterNamesField.value != '') {
                        let ulTwo = document.querySelector('#adopted ul');
                        ulTwo.appendChild(newLi);
                        let owner = document.createElement('span');
                        owner.textContent = (`New Owner: ${enterNamesField.value}`);
                        newLi.removeChild(newDiv);
                        newLi.removeChild(newSpan)
                        newLi.appendChild(owner);
                        let lastBtn = document.createElement('button');
                        lastBtn.textContent = 'Checked';
                        newLi.appendChild(lastBtn);
                        lastBtn.addEventListener('click', () => {
                            ulTwo.removeChild(newLi)
                        })
                    }
                })
            })
            name.value = '';
            age.value = '';
            kind.value = '';
            currOwner.value = '';
        }
    }
}

