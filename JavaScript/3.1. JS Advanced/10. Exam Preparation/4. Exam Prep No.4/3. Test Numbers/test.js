const testNumbers = require('./testNumbers');
const {expect} = require('chai');
const { sumNumbers } = require('./testNumbers');

describe ('testNumbers', () => {

    describe ('sumnumbers', () => {
        it('parameters nums', () => {
            expect(testNumbers.sumNumbers(5, 4)).to.equal('9.00')
        })
        it ('one param string, other num', () => {
            expect(testNumbers.sumNumbers(5, '3')).to.equal(undefined)
        })
        it ('two strings', () => {
            expect(testNumbers.sumNumbers('5', '4')).to.equal(undefined)
        })
        it ('positive and negative num', () => {
            expect(testNumbers.sumNumbers(5, -3)).to.equal('2.00')
        })
        it ('two negative nums', () => {
            expect(testNumbers.sumNumbers(-3, -9)).to.equal('-12.00')
        })
    })
    describe ('numberChecker', () => {
        it ('odd num', () => {
            expect(testNumbers.numberChecker(5)).to.equal('The number is odd!')
        })
        it ('even num', () => {
            expect(testNumbers.numberChecker(6)).to.equal('The number is even!')
        })
        it('not a number', () => {
            expect(testNumbers.numberChecker('cska')).to.throw('The input is not a number!')
        })
        it ('odd num string', () => {
            expect(testNumbers.numberChecker('5')).to.equal('The number is odd!')
        })
        it ('even num string', () => {
            expect(testNumbers.numberChecker('6')).to.equal('The number is even!')
        })
    })
    describe ('averageSumArray', () => {
        it ('test array', () => {
            expect(testNumbers.averageSumArray([21, 5, 77])).to.equal(103/3)
        })

    })


})