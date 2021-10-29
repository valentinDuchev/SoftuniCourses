window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let addBtn = document.getElementById('add');
    let totalPrice = (document.querySelector('.total-price'))
   
    addBtn.addEventListener('click', add)

    function add(event) {
        event.preventDefault();
        if (model.value != '' && description.value != '' && year.value != '' && year.value >= 0 && price.value != '' && price.value >= 0 && !Number.isNaN(year) && !Number.isNaN(price)) {
            let furnitureList = document.getElementById('furniture-list');
            let newTr = document.createElement('tr');
            newTr.classList.add('info');
            let firstTd = document.createElement('td');
            firstTd.textContent = model.value;
            let secondTd = document.createElement('td');
            secondTd.textContent = price.value;
            secondTd.textContent = Number(secondTd.textContent).toFixed(2)
            let thirdTd = document.createElement('td');
            let moreBtn = document.createElement('button');
            moreBtn.classList.add('moreBtn');
            let buyBtn = document.createElement('button');
            buyBtn.classList.add('buyBtn');
            moreBtn.textContent = 'More Info';
            buyBtn.textContent = 'Buy it';
            let secondNewTr = document.createElement('tr');
            secondNewTr.classList.add('hide');
            let fourthTd = document.createElement('td');
            fourthTd.textContent = `Year: ${year.value}`;
            secondNewTr.appendChild(fourthTd);
            let fifthTd = document.createElement('td');
            fifthTd.setAttribute('colspan', '3');
            fifthTd.textContent = `Description: ${description.value}`
            secondNewTr.appendChild(fifthTd);
            thirdTd.appendChild(moreBtn);
            thirdTd.appendChild(buyBtn);
            newTr.appendChild(firstTd);
            newTr.appendChild(secondTd);
            newTr.appendChild(thirdTd)
            furnitureList.appendChild(secondNewTr);
            furnitureList.appendChild(newTr);
            moreBtn.addEventListener('click', () => {
                if (moreBtn.textContent = 'More Info') {
                    moreBtn.textContent = 'Less Info';
                    secondNewTr.style.display = 'contents';
                    moreBtn.addEventListener('click', () => {
                       moreBtn.textContent = 'More Info' 
                       secondNewTr.style.display = 'none';
                    })
                }
            })
            buyBtn.addEventListener('click', () => {
                let finalNum = (Number(totalPrice.textContent));
                finalNum += Number(secondTd.textContent)
                totalPrice.textContent = finalNum.toFixed(2);
                newTr.remove()
                //totalPriceNum += Number(secondTd.textContent)
                //totalPrice.textContent
                
            })

        }
        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
    }

   

}
