function solve(input) {


    let objDistributors = {};
    let objClients = {};
    let actions = {
        'Deliver': deliver,
        'Sell': sell,
        'Return': returnToDistributor
    }

    while (input[0] != 'End') {
        let token = input.shift().split(' ')
        let command = token[0];
        let action = actions[command];
        action(token);
    }

    function deliver(token) {
        let distributorName = token[1];
        let moneySpend = Number(token[2]);
        if (objDistributors.hasOwnProperty(distributorName) === false) {
            objDistributors[distributorName] = moneySpend;
        } else {
            objDistributors[distributorName] += moneySpend;
        }
        //console.log(objDistributors[distributorName])
    }

    function sell(token) {
        let clientName = token[1];
        let moneySpend = Number(token[2]);
        if (objClients.hasOwnProperty(clientName) === false){
            objClients[clientName] = moneySpend;
        } else {
            objClients[clientName] += moneySpend;
        }
     }

    function returnToDistributor(token) {
        let distributorName = token[1];
        let moneyReturned = Number(token[2]);
        if (objDistributors.hasOwnProperty(distributorName)) {
            if (objDistributors[distributorName] > moneyReturned) {
                objDistributors[distributorName] -= moneyReturned;
                if (objDistributors[distributorName] <= 0) {
                    delete objDistributors[distributorName];
                }
            }
        }
    }

    let sortedClients = Object.entries(objClients).sort(compareClients);
    function compareClients (a, b) {

        let nameA = a[0];
        let nameB = b[0];

        return nameA.localeCompare(nameB);
    }
    for (let element of sortedClients) {
        console.log(`${element[0]}: ${element[1].toFixed(2)}`)
    }

    console.log('-----------')

    let sortedDistributors = Object.entries(objDistributors).sort(compareDistributors);
    function compareDistributors (a, b) {
        let nameA = a[0];
        let nameB = b[0];

        return nameA.localeCompare(nameB);
    }
    for (let element of sortedDistributors) {
        console.log(`${element[0]}: ${element[1].toFixed(2)}`)
    }

    console.log('-----------')

    let totalIncome = Object.values(objClients);
    totalIncomeCounter = 0;
    for (let element of totalIncome) {
        totalIncomeCounter += Number(element);
    }
    console.log(`Total Income: ${totalIncomeCounter.toFixed(2)}`)


}
solve (['Deliver Micro 10000.00',
'Sell Nick 500.00',
'Sell Antony 260.50',
'Deliver Micro 2000.50',
'End'])

console.log('---')
solve(['Deliver North 200.30',
'Sell Peter 30.20',
'Return Macro 5000.00',
'Return North 100.30',
'Sell Peter 50.50',
'End'])
