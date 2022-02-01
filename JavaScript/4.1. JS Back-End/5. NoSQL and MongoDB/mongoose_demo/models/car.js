const mongoose = require('mongoose');

//defining the schema -> setting the properties (name, price...), adding validator
const carSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Car Listing m,ust have a name"],  // svoistvoto name e zadyljitelno => shte hvarli greshka ako nqkoi sazdade zapis bez ime --> greshkata shte e tazi v masiva, ako imame masiv 
        enum: { values: ["VW Golf, Opel Astra, Toyota Corolla, Dodge Challenger"],   //chrez enum postavqme spisuk s validni stoinosti (v sluchaq za name)
        message: '{VALUE} is not supported' } // i ako vuvedenata st-t ne se namira v tozi spisuk, tq e nevalidna-pokazva se suotvetniq msg
    },   
    price: {
        type: Number,
        default: 0,  //tuk nqmame required na price ==> slagame defaultna st-t ako nqkoi ne e vavel price
        validate: {
            validator: function (value) {  //tozi validator proverqva dadeno uslovie, koeto ako ne e izpulneno, vrushta greshka-message-a po-dolu
                if (value < 0) {
                    return false;
                }
                return true;
            },
            message: 'Price must be positive integer' //tozi message biva vurnat ot validatora, ako uslovieto ne e izpulneno
        }, 
        max: [999000, "Price cannot be over 999 000 USD"]  //po tozi nachin zadavame minimalna/maximalna st-t na property-to (v sluchaq price), 
                                                            //granichnata st-t se podava v masiv zaedno sus suobshtenieto, koeto pokazvame pri error

    }
});

//method
carSchema.methods.startEngine = function () { // taka zakachame metodi kum shemata (klasa), koito moje da izpolzvame 
    console.log(`${this.name} goes VROOOOM!!!`)
};

//virtual method a.k.a.getter or setter
carSchema.virtual('VAT').get(function () {  //virtualen method, koito igrae rolqta na getter-vzima stoinost/st-ti i vrushta neshto svurzano s tqh.
    return this.price + (this.price * 0.2);                // tozi  method ne e registriran v spisaka s methodi-toi e virtualen
});

//adding validator
carSchema.path('price').validate(function (value) { // Tova e drug nachin da podavame validatori, msg e kato vtori parametar sled functiqta
    if (value > 1000000) {
        return false;
    }
    return true;
}, 'Price cannot be over 1 million USD.')

//Creating a database out of the model/schema
const Car = mongoose.model('Car', carSchema);

module.exports = Car