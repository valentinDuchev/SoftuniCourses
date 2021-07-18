function solve(input) {
    let tour = input.shift();
    let actions = {
        'Add Stop': add,
        'Remove Stop': remove,
        'Switch': switchTravel 
    }
    while (input[0] != 'Travel') {
        let token = input.shift().split(':');
        let command = token[0];
        let action = actions[command];
        action(token);

    }
    function add (token){ 
        let index = Number(token[1]);
        let stringToAdd = token[2];
        let left = tour.substring(0, index);
        let right = tour.substring(index)
        tour = left + stringToAdd + right;
        console.log(tour)
    }

    function remove (token){
        let index1 = Number(token[1]);
        let index2 = Number(token[2]);
        let left = tour.substring(0, index1);
        let right = tour.substring(index2+1);
        tour = left + right;
        console.log(tour)

    }
    function switchTravel (token) {
        let oldString = token[1];
        let newString = token[2];
        let tourArr = tour.split(oldString);
        tour = tourArr.join(newString)
        console.log(tour)
    }

    console.log(`Ready for world tour! Planned stops: ${tour}`)

}