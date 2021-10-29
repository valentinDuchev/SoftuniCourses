const cinema = require('./cinema');
const { expect } = require('chai');

describe('cinema', () => {
    describe('showMovies', () => {
        it('array with no elements', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        });
        it('returns joined array for normal arr input', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        })


    })
    describe('ticketPrice', () => {

        it('premiere-12.00', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });

        it('Normal-7.50', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50)

        })
        it('Discount-5.50', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50)
        })
        it('wrong projection type', () => {
            expect(() => { cinema.ticketPrice('wrongType') }).to.throw(('Invalid projection type.'));
        })


    })
    describe('swapSeatsInHall', () => {
        it('isNotInteger', () => {
            expect(cinema.swapSeatsInHall(5.1, 10)).to.equal("Unsuccessful change of seats in the hall.")
        })
        it('isNegative', () => {
            expect(cinema.swapSeatsInHall(-5, 10)).to.equal("Unsuccessful change of seats in the hall.")
        });
        it('isMoreThan21', () => {
            expect(cinema.swapSeatsInHall(22, 10)).to.equal("Unsuccessful change of seats in the hall.")
        })
        it('isNegative', () => {
            expect(cinema.swapSeatsInHall(5, 10)).to.equal("Successful change of seats in the hall.")
        })
        it('zero', () => {
            expect(cinema.swapSeatsInHall(0, 10)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('invalid', () => {
            expect(cinema.swapSeatsInHall(10, 10)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('invalid', () => {
            expect(cinema.swapSeatsInHall('0', '19')).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('invalid', () => {
            expect(cinema.swapSeatsInHall(21, 21)).to.equal('Unsuccessful change of seats in the hall.')
        })
        it('invalid', () => {
            expect(cinema.swapSeatsInHall(20, 1)).to.equal('Successful change of seats in the hall.')
        })


    })
})