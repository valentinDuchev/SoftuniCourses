//NOT TO END

let loadButton = document.getElementById('loadBtn');
loadButton.addEventListener('click', solve);

async function solve() {
    let main = document.querySelector('main')

    let url = 'http://localhost:3030/jsonstore/cookbook/recipes';

    try {
        const response = await fetch(url);
        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        let dataArr = Object.values(data)
        for (let element of dataArr) {
            let detailsUrl = `http://localhost:3030/jsonstore/cookbook/details/${element._id}`
            try {
                const response2 = await fetch(detailsUrl);
                if (response2.ok == false) {
                    throw new Error(`${response2.status} ${response2.statusText}`)
                }
                const data2 = await response2.json();
                const data2Arr = Object.values(data2)
                console.log(data2)
                //name, img, [steps], [ingredients]
            } catch (error2) {
                console.log('Error', error2)
            }
            
            let newArticle1 = document.createElement('article');
            newArticle1.setAttribute('class', 'preview')
            let divTitle1 = document.createElement('div')
            divTitle1.setAttribute('class', 'title');
            let newH2First = document.createElement('h2');
            newH2First.textContent = element.name;
            divTitle1.appendChild(newH2First);
            newArticle1.appendChild(divTitle1);
            let newDivSmall = document.createElement('div');
            newDivSmall.setAttribute('class', 'small');
            let newImg1 = document.createElement('img');
            newImg1.setAttribute('src', element.img);
            newDivSmall.appendChild(newImg1);
            newArticle1.appendChild(newDivSmall);
            main.appendChild(newArticle1);
            let showMoreBtn = document.createElement('button');
            showMoreBtn.setAttribute('class', 'showMoreButton')
            showMoreBtn.textContent = 'Show More'
            showMoreBtn.addEventListener('click', () => {
                //newArticle1.remove();
                let newArticle = document.createElement('article');
                let newH2 = document.createElement('h2');
                newH2.textContent = `Recipe ${dataArr.indexOf(element)}`;
                newArticle.appendChild(newH2);
                let divBand = document.createElement('div');
                divBand.setAttribute('class', 'band');
                let divThumb = document.createElement('div');
                divThumb.setAttribute('class', 'thumb')
                let newImg = document.createElement('img')
                newImg.setAttribute('src', element.img);
                divThumb.appendChild(newImg);
                divBand.appendChild(divThumb)
                newArticle.appendChild(divThumb)
                main.appendChild(newArticle)
                let newDivIngredients = document.createElement('div');
                newDivIngredients.setAttribute('class', 'ingredients');
                let newH3 = document.createElement('h3')
                newH3.textContent = 'Ingredients:';
                newDivIngredients.appendChild(newH3);
                let newUl = document.createElement('ul');
                /*for (let element2 of element.ingredients) {
                    let newLiIngredient = document.createElement('li');
                    newLiIngredient.textContent = element2;
                    newUl.appendChild(newLiIngredient);
                } */
                
                newDivIngredients.appendChild(newUl)


            })
            newArticle1.appendChild(showMoreBtn)


        }
        //console.log(data)
    } catch (error) {
        console.log('Error', error)
    }
}




/*
<h2>Title</h2>
            <div class="band">
                <div class="thumb">
                    <img src="assets/lasagna.jpg">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>Ingredient 1</li>
                        <li>Ingredient 2</li>
                        <li>Ingredient 3</li>
                        <li>Ingredient 4</li>
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia ipsam nulla vitae nobis
                    reprehenderit pariatur aut dolor exercitationem impedit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem odit officiis numquam
                    corrupti? Quam.</p>
            </div>
*/


/*

let newArticle = document.createElement('article');
            let newH2 = document.createElement('h2');
            newH2.textContent = `Recipe ${dataArr.indexOf(element)}`;
            newArticle.appendChild(newH2);
            let divBand = document.createElement('div');
            divBand.setAttribute('class', 'band');
            let divThumb = document.createElement('div');
            divThumb.setAttribute('class', 'thumb')
            let newImg = document.createElement('img')
            newImg.setAttribute('src', element.img);
            //divThumb.appendChild(newImg);
            divBand.appendChild(divThumb)
            newArticle.appendChild(divThumb)
            main.appendChild(newArticle)

*/