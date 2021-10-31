const library = require('./library');
const {expect} = require('chai')

describe ('library' , () => {

    describe ('calcPriceOfBook', () => {
        it ('invalid input', () => {
            expect(() => {library.calcPriceOfBook(22, 1980)}).to.throw('Invalid input')
        })
        it ('invalid input', () => {
            expect(() => {library.calcPriceOfBook('cska', 'sofia')}).to.throw('Invalid input')
        })
        it ('invalid input', () => {
            expect(() => {library.calcPriceOfBook('cska', 1979.5)}).to.throw('Invalid input')
        })
        it ('invalid input', () => {
            expect(() => {library.calcPriceOfBook(22, 'cska')}).to.throw('Invalid input')
        })
        it ('valid', () => {
            expect (library.calcPriceOfBook('cska', 1999)).to.equal(`Price of cska is 20.00`)
        })
        it ('valid', () => {
            expect (library.calcPriceOfBook('cska', 1955)).to.equal(`Price of cska is 10.00`)
        })
        it ('valid', () => {
            expect (library.calcPriceOfBook('cska', 1980)).to.equal(`Price of cska is 10.00`)
        })
        it ('valid', () => {
            expect (library.calcPriceOfBook('cska', 1981)).to.equal(`Price of cska is 20.00`)
        })
        it ('valid', () => {
            expect (library.calcPriceOfBook('cska', 1979)).to.equal(`Price of cska is 10.00`)
        })

    })

    describe ('findBook', () => {
        it ('invalid input', () => {
            expect(() => {library.findBook([], 'cska')}).to.throw('No books currently available')
        })
        it ('valid input', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal("We found the book you want.")
        })
        it ('valid input', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'cska')).to.equal("The book you are looking for is not here!")
        })




    })
    describe ('arrangeTheBooks', () => {
        it ('invalid input', () => {
            expect(() => {library.arrangeTheBooks(20.5)}).to.throw("Invalid input")
        })
        it ('invalid input', () => {
            expect(() => {library.arrangeTheBooks(-10)}).to.throw("Invalid input")
        })
        it ('invalid input', () => {
            expect(() => {library.arrangeTheBooks('cska')}).to.throw("Invalid input")
        })
        it ('too much books', () => {
            expect(library.arrangeTheBooks(33)).to.equal('Great job, the books are arranged.')
        })
        it ('too much books', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.')
        })
        it ('too much books', () => {
            expect(library.arrangeTheBooks(55)).to.equal("Insufficient space, more shelves need to be purchased.")
        })
        it ('too much books', () => {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.")
        })
        


    })
})