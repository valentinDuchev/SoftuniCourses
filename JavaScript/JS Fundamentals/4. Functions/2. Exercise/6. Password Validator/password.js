function solve (input) {
    let digitNum = 0;
    let isValid = true;

    

    if (input.length < 6 || input.length > 10) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }
     for (let i = 0; i<input.length; i++) {
        if (input.charCodeAt(i) < 48 || input.charCodeAt(i) > 122 ) {
            isValid = false;
            console.log("Password must consist only of letters and digits")
            break;
        }
        if (input.charCodeAt(i) > 57 && input.charCodeAt(i) <65 ) {
            isValid = false;
            console.log("Password must consist only of letters and digits")
            break;
        }
        if (input.charCodeAt(i) > 90 && input.charCodeAt(i) <97 ) {
            isValid = false;
            console.log("Password must consist only of letters and digits")
            break;
        }
        if (Number(input.charCodeAt(i)) > 47 && Number(input.charCodeAt(i) < 58)) {
            digitNum ++;
        }
    } 
    if (digitNum <= 1) {
        isValid = false;
        console.log("Password must have at least 2 digits")
    }

    if (isValid == true) {
        console.log('Password is valid')
    }



}
solve ('Pa$s$s')