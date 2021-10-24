const {expect} = require('chai')
const {sum} = module.require('./sum.js');

describe ('Sum of array elements checker', () => {
    it ('Return 93 for 1, 4, 88 Array Numbers', () => {
        expect (sum([1, 4, 88])).to.equal(93)
    }) 
    it ('Return 0 for 0, 0, -2, 2 Array Numbers', () => {
        expect(sum([0, 0, -2, 2])).to.equal(0)
    })
    it ('Return NaN for [0, "cska", 0] input', () => {
        expect(sum([0, "cska", 10])).to.NaN
    })
})