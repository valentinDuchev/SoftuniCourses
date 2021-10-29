class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let element of products) {
            let [product, qty, price] = element.split(' ')
            if (this.budgetMoney >= price) {
                if (this.stockProducts.hasOwnProperty(product) === false) {
                    this.stockProducts[product] = qty;
                    this.budgetMoney -= price;
                    this.history.push(`Successfully loaded ${qty} ${product}`)
                } else {
                    this.stockProducts[product] += qty;
                    this.budgetMoney -= price;
                    this.history.push(`Successfully loaded ${qty} ${product}`)
                }
            } else {
                this.history.push(`There was not enough money to load ${qty} ${product}`)
            }
        }
        return this.history.join('\n')
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal) === false) {
            this.menu[meal] = {
                price, 
                neededProducts
            };
            if (Object.keys(this.menu).length == 1) {
                return (`Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`)
            } else {
                return (`Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`)
            }
        } else {
            return (`The ${meal} is already in the our menu, try something different`) 
            
        } 


    }

    showTheMenu() {
        let arr = [];
        for (let element in this.menu) {
            arr.push(`${element} - $ ${this.menu[element].price}`)
        }
        return arr.join('\n')
    }

    makeTheOrder(meal) {
        let haveIt = true;
        if (this.menu.hasOwnProperty(meal) === false) {
            return (`There is not ${meal} yet in our menu, do you want to order something else?`)
        } else {
            for (let element of this.menu[meal].neededProducts) {
                if (Object.keys(this.stockProducts).hasOwnProperty(element.split(' ')[0])) {
                    if (this.stockProducts[element.split(' ')[0]] >= element.split(' ')[1]) {
                        haveIt;
                    }
                    else {
                        return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`)
                        haveIt = false;
                    }
                } /* else {
                    haveIt = false;
                    return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`)
                } */
                
            }
            if (haveIt = true) {
                this.budgetMoney -= Number(this.menu[meal].price)
                return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`)
            }
        }
        


    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

