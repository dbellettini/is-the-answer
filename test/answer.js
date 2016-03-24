var expect = require('chai').expect;

describe('is-the-answer', function () {
    var isTheAnswer = require('..');

    it('should say that 42 IS the answer', function() {
        expect(isTheAnswer(42)).to.be.true;
    });

    it('should say that 41 IS NOT the answer', function() {
        expect(isTheAnswer(41)).to.be.false;
    });
});
