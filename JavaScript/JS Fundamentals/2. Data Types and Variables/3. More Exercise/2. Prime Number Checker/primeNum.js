function nums(num) {

    if (num === 2) {
        console.log('true')
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                console.log('false');
                break;
            } else if (num % i != 0) {
                console.log('true');
                break;
            }
        }
    }

}