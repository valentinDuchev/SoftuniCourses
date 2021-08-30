function solve (input) {
    let inputCount = Number(input.shift());
    let counter = 0;

    let pattern = /^U\$(?<username>[A-Z]{1}[a-z]{2,})U\$P@\$(?<password>[A-Za-z]{5,}[0-9]+)P@\$$/g;
    let match = pattern.exec(input);
    

    for (let i = 0; i<inputCount; i++) {
        match = pattern.exec(input[i]);
        if (match != null) {
            console.log('Registration was successful')
            console.log(`Username: ${match[1]}, Password: ${match[2]}`);
            counter++;
        } else {
            console.log('Invalid username or password')
        }
    }

console.log(`Successful registrations: ${counter}`)
}
solve (["3",
"U$MichaelU$P@$asdqwe123P@$",
"U$NameU$P@$PasswordP@$",
"U$UserU$P@$ad2P@$"])
console.log('---')
solve (["2",
"U$TommyU$P@$asdqwe123P@$",
"Sara 1232412"]) 
console.log('---') 
solve (['3',
'U$myU$-->P@$asdqwe123P@$', 'Sara 1232412',
'U$NameU$P@$Pass234P@$'])
