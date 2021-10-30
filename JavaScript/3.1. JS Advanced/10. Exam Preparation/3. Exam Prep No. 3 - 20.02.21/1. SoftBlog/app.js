function solve() {
   let autor = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content')

   let createBtn = Array.from(document.querySelectorAll('button'))[0];
   createBtn.addEventListener('click', create);

   function create(event) {
      event.preventDefault();

      

         let section = Array.from(document.querySelectorAll('section'))[1]
         let newArticle = document.createElement('article');
         let newH1 = document.createElement('h1')
         newH1.textContent = title.value; //Javascript
         newArticle.appendChild(newH1);
         
         let newP1 = document.createElement('p');
         newP1.textContent = "Category:";  //category
         let newStrong1 = document.createElement('strong')
         newStrong1.textContent = category.value; //Programming
         newP1.appendChild(newStrong1);
         newArticle.appendChild(newP1);

         let newP2 = document.createElement('p')
         newP2.textContent = "Creator:" // creator
         let newStrong2 = document.createElement('strong')
         newStrong2.textContent = autor.value;
         newP2.appendChild(newStrong2);
         newArticle.appendChild(newP2);

         let newP3 = document.createElement('p')
         newP3.textContent = content.value; //text inside
         newArticle.appendChild(newP3);

         let newDivBtns = document.createElement('div');
         newDivBtns.className += 'buttons';
         let newBtn1 = document.createElement('button');
         let newBtn2 = document.createElement('button');
         newBtn1.setAttribute('class', 'btn delete');
         newBtn1.textContent = 'Delete';
         newBtn2.setAttribute('class', 'btn archive');
         newBtn2.textContent = 'Archive'
         newDivBtns.appendChild(newBtn1);
         newDivBtns.appendChild(newBtn2);
         newArticle.appendChild(newDivBtns);

         section.appendChild(newArticle);

         newBtn1.addEventListener('click', () => {
            newArticle.remove();
            children
         });

         newBtn2.addEventListener('click', () => {
            
            let elementToAdd = newH1.textContent;
            let archiveOl = document.querySelector('.archive-section>ol');
            let newLi = document.createElement('li');
            newLi.textContent = elementToAdd;
            archiveOl.appendChild(newLi);
            let arr = Array.from(archiveOl.querySelectorAll('li'))
            //console.log(Array.from(archiveOl.querySelectorAll('li')))
            newArticle.remove();
            if (arr.length > 1) {
               let sorted = arr.sort((a, b) => a.textContent.localeCompare(b.textContent));
               arr.forEach(x => archiveOl.removeChild(x));
               sorted.forEach(x => archiveOl.appendChild(x))
            }
         })
 
         autor.value = '';
         title.value = '';
         category.value = '';
         content.value = '';
      }
   }

