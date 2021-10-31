function search() {
   let townsArray = [...document.querySelectorAll('#towns li')];
   
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let sum = 0;

   for (let element of townsArray) {
      if (element.textContent.toLowerCase().includes(input.toLowerCase())){
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         sum++;
      } else {
         element.style.fontWeight = '';
         element.style.textDecoration = '';
      }
      
   }
   result.textContent = `${sum} matches found`;


}
