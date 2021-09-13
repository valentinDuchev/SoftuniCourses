function solve(input) {
    let element = input.shift();
    let pattern = /%([A-Z]{1}[a-z]*)%[^\|\$\.%]*<([A-Z]{1}[a-z]*)>[^\|\$\.%]*\|(\d*)\|[^\|\$\.%0-9]*(\d*(?:\.?)\d*)\$/g;
    let match = pattern.exec(element)
    let totalIncome = 0;

    while (element !== 'end of shift' && element !== undefined) {
        if (match === null) {
            match = pattern.exec(element)
            element = input.shift()
        }
        while (match != null) {
            console.log(`${match[1]}: ${match[2]} - ${(match[3] * match[4]).toFixed(2)}`)
            totalIncome += Number(match[3]) * Number(match[4]);
            element = input.shift();
            match = pattern.exec(element)
            
        }
        match = pattern.exec(element)
      }
    console.log(`Total income: ${totalIncome.toFixed(2)}`)
}
solve(["%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"])

console.log('---------')

solve (["%InvalidName%<Croissant>|2|10.3$",
"%Peter%<Gum>1.3$",
"%Maria%<Cola>|1|2.4",
"%Valid%<Valid>valid|10|valid20$",
"end of shift"]
)

console.log('-----')
solve (["%InvalidName%<Croissant>|2|10.3$",
"%Peter%<Gum>|1|1.3$",
"%Invalid%<Cola>|1|2.4",
"%Maria%<Cola>|1|2.4$",
"%Valid%<Valid>valid|10|valid20$", "%Invalid%<Cola>|1|2.4", "end of shift"
])

