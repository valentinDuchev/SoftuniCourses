function solve() {
   function solve() {
      let products = [...document.querySelectorAll('.product')];
      let textArea = document.querySelector('textarea');

      let finalPrice = 0;
      let finalCart = [];

      for (let i of products) {
         let addBtn = i.children[2];
         addBtn.addEventListener('click', clickHandler);
         function clickHandler(event) {
            textArea.textContent += `Added ${i.children[1].children[0].textContent} for ${i.children[3].textContent} to the cart.\n`
            finalPrice += Number(i.children[3].textContent);
            if (finalCart.includes(i.children[1].children[0].textContent) === false) {
               finalCart.push(i.children[1].children[0].textContent)
            }
         }
      }
      let chekoutBtn = document.querySelector('.checkout')
      chekoutBtn.addEventListener('click', checkoutBtnClickHandler);

      function checkoutBtnClickHandler(event) {
         textArea.textContent += `You bought ${finalCart.join(', ')} for ${finalPrice.toFixed(2)}.\n`
      }
   }
}