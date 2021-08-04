function solve (input) {
    let heroesNum = Number(input.shift());
    let obj = {};
    let actions = {
        'Heal': heal, 
        'Recharge': recharge, 
        'TakeDamage': takeDamage,
        'CastSpell': castSpell 
    }
    for (let i = 0; i<heroesNum; i++) {
        let [hero, hp, mp] = input.shift().split(' ')
        hp = Number(hp);
        mp = Number(mp)
        obj[hero] = {hp, mp};
    }
    while (input[0]!='End') {
        let token = input.shift().split(' - ');
        let command = token[0];
        let action = actions[command];
        action(token);  
    }
    function heal (token) {
        let currentHero = token[1];
        let rechargeValue = Number(token[2]);
        obj[currentHero].hp += rechargeValue;
        if (obj[currentHero].hp>100) {
            let hpMore = obj[currentHero].hp-100;
            let rechargeValueRest = Number(rechargeValue)-Number(hpMore);
            console.log(`${currentHero} healed for ${rechargeValueRest} HP!`);
            obj[currentHero].hp = 100;
        } else {
            console.log(`${currentHero} healed for ${rechargeValue} HP!`)
        }
    }
    function recharge (token) {
        let currentHero = token[1];
        let rechargeValue = Number(token[2]);
        obj[currentHero].mp += rechargeValue;
        if (obj[currentHero].mp>200) {
            let mpMore = obj[currentHero].mp-200;
            let rechargeValueRest = Number(rechargeValue)-Number(mpMore);
            console.log(`${currentHero} recharged for ${rechargeValueRest} MP!`);
            obj[currentHero].mp = 200;
        } else {
            console.log(`${currentHero} recharged for ${rechargeValue} MP!`)
        }
    }
    function takeDamage (token) {
        let currentHero = token[1];
        let damage = Number(token[2]);
        let atacker = token[3];
        obj[currentHero].hp -= damage;
        if (obj[currentHero].hp<=0) {
            console.log(`${currentHero} has been killed by ${atacker}!`)
            delete obj[currentHero];
        } else {
            console.log(`${currentHero} was hit for ${damage} HP by ${atacker} and now has ${obj[currentHero].hp} HP left!`)
        }
    }
    function castSpell (token) {
        let currentHero = token[1];
        let mpNeeded = token[2];
        let spell = token[3];
        if (Number(obj[currentHero].mp)>=Number(mpNeeded)) {
            obj[currentHero].mp -= Number(mpNeeded);
            console.log(`${currentHero} has successfully cast ${spell} and now has ${obj[currentHero].mp} MP!`)
        } else {
            console.log(`${currentHero} does not have enough MP to cast ${spell}!`)
        }
    }
    
    let sorted = Object.entries(obj).sort(compare)

    function compare (a, b) {
        let hpA = a[1].hp;
        let hpB = b[1].hp;

        let nameA = a[0];
        let nameB = b[0];

        return hpB - hpA || nameA.localeCompare(nameB);
    }

    for (let [element, others] of sorted) {
        console.log(`${element}`)
        console.log(` HP: ${others.hp}`)
        console.log(` MP: ${others.mp}`)
    }
}