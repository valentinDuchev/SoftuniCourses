function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let input = document.querySelector('#inputs>textarea');

   let restaurants = {};
   let average = 0;

   function onClick() {

      let informationArray = JSON.parse(input.value);
      for (let token of informationArray) {  //creating the object with the restaurants
         let tokens = token.split(' - ');
         let name = tokens[0];
         let workersWithSalary = tokens[1].split(', ');

         if (!restaurants.hasOwnProperty(name)) {
            restaurants[name] = {};
            for (let element of workersWithSalary) {
               let currentToken = element.split(' ');
               let worker = currentToken[0];
               let salary = currentToken[1];
               //console.log(name + '->' + worker + '->' + salary)  
               restaurants[name][worker] = salary;
            }
         } else {
            for (let element of workersWithSalary) {
               let currentToken = element.split(' ');
               let worker = currentToken[0];
               let salary = currentToken[1];
               //console.log(name + '->' + worker + '->' + salary)  
               restaurants[name][worker] = salary;
            }
         }
      }

      for (let name in restaurants) {
         let length = Object.keys(restaurants[name]).length;
         for (let worker in restaurants[name]) {
            average += Number(restaurants[name][worker]);
         }
         restaurants[name].result = (Number(average) / Number(length)).toFixed(2);
         average = 0;
      }

      let arrayAverage = [];
      for (let name in restaurants) {  //pushing all salaries to the array with salaries
         arrayAverage.push(restaurants[name].result);
      }

      let sortedArr = arrayAverage.sort((a, b) => b - a); // sorting the objects by their average salary
   
      let resultValue = sortedArr[0];
      let bestRestaurant = document.querySelector('#bestRestaurant>p') 

      let salariesArr = [];

      for (let name in restaurants) {  //pushing all the salaries from the best restaurant into new array to sort them
         for (let worker in restaurants[name]) {
            if (worker !== 'result') {
               if (restaurants[name].result == resultValue) {
                  salariesArr.push(restaurants[name][worker]);
                  //console.log(salariesArr)
               }
            }
         }
      }
      salariesArr.sort((a, b) => b - a); // sorting all the salaries in the best restaurant
      
      let bestSalary = Number(salariesArr[0])

      for (let name in restaurants) {  //making the final result of the best restaurant, that can be seen in the main page 
         if (restaurants[name].result == resultValue) {
            bestRestaurant.textContent = `Name: ${name} Average Salary: ${restaurants[name].result} Best Salary: ${bestSalary.toFixed(2)}`
         }
      }

      let bestWorkers = document.querySelector('#workers>p');
      for (let name in restaurants) {  //making the final result of the workers in the best restaurant, that can be seen in the main page
         for (let worker in restaurants[name]) {
            if (worker !== 'result') {
               if (restaurants[name].result == resultValue) {
                  bestWorkers.textContent += `Name: ${worker} With Salary: ${restaurants[name][worker]} `
               }
            }
         }
      }
   }
}