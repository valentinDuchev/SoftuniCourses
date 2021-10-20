function solve() {
  const textAreas = document.querySelectorAll('textarea')
  const buttons = document.querySelectorAll('button');
  const tbody = document.querySelector('tbody');
  let nameArr = [];
  let totalPrice = 0;
  let decorationArr = [];
  let decoration = 0;

  buttons[0].addEventListener('click', function (event) {
    const arr = JSON.parse(textAreas[0].value);

    for (let element of arr) {
      const row = document.createElement('tr');

      //Create image cell
      const tdImage = document.createElement('td')
      const image = document.createElement('img');
      image.setAttribute('src', element.img);
      tdImage.appendChild(image)
      row.appendChild(tdImage);

      //Create Name Cell
      const tdName = document.createElement('td');
      const pName = document.createElement('p');
      pName.textContent = element.name;
      tdName.appendChild(pName);
      row.appendChild(tdName);

      //Create Price Cell
      const tdPrice = document.createElement('td');
      const pPrice = document.createElement('p');
      pPrice.textContent = element.price;
      tdPrice.appendChild(pPrice);
      row.appendChild(tdPrice);

      //Create Decoration Dactor Cell
      const tdDec = document.createElement('td')
      const pDec = document.createElement('p');
      pDec.textContent = element.decFactor;
      tdDec.appendChild(pDec)
      row.appendChild(tdDec);

      //Create Check Box Cell
      const tdCheck = document.createElement('td')
      const inputCheck = document.createElement('input');
      inputCheck.setAttribute('type', 'checkbox');
      tdCheck.appendChild(inputCheck);
      row.appendChild(tdCheck)

      tbody.appendChild(row)

    }
  })


  console.log(buttons[1])

  buttons[1].addEventListener('click', function (event) {

    const furniture = Array.from(tbody.querySelectorAll('input[type=checkbox]:checked')).map(input => Array.from(input.parentNode.parentNode.children));


    for (let element of furniture) {
      if (!nameArr.includes(element[1].textContent)) {
        nameArr.push(element[1].textContent);
      }
      totalPrice += Number(element[2].textContent);
      decorationArr.push(Number(element[3].textContent))
    }


    for (let element of decorationArr) {
      decoration += Number(element);
    }
    decoration /= Number(decorationArr.length)

    

    textAreas[1].textContent = `Bought furniture: ${nameArr.join(', ')} \nTotal Price: ${totalPrice.toFixed(2)} \nAverage decoration factor: ${decoration}`
  })


}