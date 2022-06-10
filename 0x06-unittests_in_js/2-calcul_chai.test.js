const calculateNumber = require('./2-calcul_chai');
const chai = require("chai");
const expect = chai.expect;

describe('calculateNumber: ', function () {
	describe('Sum the variables', function () {
		it('SUM', function () {
			expect(calculateNumber("SUM", 1, 1)).to.equal(2);
			expect(calculateNumber("SUM", 1, 1.2)).to.equal(2);
			expect(calculateNumber("SUM", 1, 1.6)).to.equal(3);
			expect(calculateNumber("SUM", 1.3, 1)).to.equal(2);
			expect(calculateNumber("SUM", 1.7, 1)).to.equal(3);
			expect(calculateNumber("SUM", 1.7, 1.8)).to.equal(4);
			expect(calculateNumber("SUM", 1.7, 1.2)).to.equal(3);
			expect(calculateNumber("SUM", 1.3, 1.8)).to.equal(3);
			expect(calculateNumber("SUM", 1.3, 1.3)).to.equal(2);
			expect(calculateNumber("SUM", -1.3, 1.3)).to.equal(0);
			expect(calculateNumber("SUM", 1.3, -1.3)).to.equal(0);
			expect(calculateNumber("SUM", -1.3, -1.3)).to.equal(-2);
			expect(calculateNumber("SUM", 0.3, 0.2)).to.equal(0);
			expect(calculateNumber("SUM", -1.7, -1.8)).to.equal(-4);
		});
	});
	describe("Subtract the second value from the first", function () {
		it('SUBTRACT', function() {
			expect(calculateNumber("SUBTRACT", 1, 1)).to.equal(0);
			expect(calculateNumber("SUBTRACT", 1, 1.2)).to.equal(0);
			expect(calculateNumber("SUBTRACT", 1, 1.6)).to.equal(-1);
			expect(calculateNumber("SUBTRACT", 1.3, 1)).to.equal(0);
			expect(calculateNumber("SUBTRACT", 1.7, 1)).to.equal(1);
			expect(calculateNumber("SUBTRACT", 1.7, 1.8)).to.equal(0);
			expect(calculateNumber("SUBTRACT", 1.7, 1.2)).to.equal(1);
			expect(calculateNumber("SUBTRACT", 1.3, 1.8)).to.equal(-1);
			expect(calculateNumber("SUBTRACT", 1.3, 1.3)).to.equal(0);
			expect(calculateNumber("SUBTRACT", 1.3, -1.3)).to.equal(2);
			expect(calculateNumber("SUBTRACT", -1.3, 1.3)).to.equal(-2);
			expect(calculateNumber("SUBTRACT", -1.3, -1.3)).to.equal(0);
			expect(calculateNumber("SUBTRACT", -1.3, 0)).to.equal(-1);
			expect(calculateNumber("SUBTRACT", 1.3, 0)).to.equal(1);
			expect(calculateNumber("SUBTRACT", 1, 4)).to.equal(-3);
			expect(calculateNumber("SUBTRACT", 1.7, 3.8)).to.equal(-2);
			expect(calculateNumber("SUBTRACT", 0.2, 0.4)).to.equal(0);
		});
	});
	describe("Divide the first value whit the second", function () {
		it('DIVIDE', function() {
			expect(calculateNumber("DIVIDE", 1, 1)).to.equal(1);
			expect(calculateNumber("DIVIDE", 1, 4)).to.equal(0.25);
			expect(calculateNumber("DIVIDE", 1, 1.2)).to.equal(1);
			expect(calculateNumber("DIVIDE", 1, 1.6)).to.equal(0.5);
			expect(calculateNumber("DIVIDE", 1.3, 1)).to.equal(1);
			expect(calculateNumber("DIVIDE", 1.7, 1)).to.equal(2);
			expect(calculateNumber("DIVIDE", 1.7, 1.8)).to.equal(1);
			expect(calculateNumber("DIVIDE", 1.7, 1.2)).to.equal(2);
			expect(calculateNumber("DIVIDE", 1.3, 1.8)).to.equal(0.5);
			expect(calculateNumber("DIVIDE", 4.3, 1.8)).to.equal(2);
			expect(calculateNumber("DIVIDE", 1.3, 1.3)).to.equal(1);
			expect(calculateNumber("DIVIDE", 1.3, -1.2)).to.equal(-1);
			expect(calculateNumber("DIVIDE", -1.3, 1.2)).to.equal(-1);
			expect(calculateNumber("DIVIDE", -1.6, 1.2)).to.equal(-2);
			expect(calculateNumber("DIVIDE", -1.3, -1.2)).to.equal(1);
			expect(calculateNumber("DIVIDE", -1.6, -1.8)).to.equal(1);
			expect(calculateNumber("DIVIDE", 1.3, 0)).to.equal("Error");
			expect(calculateNumber("DIVIDE", 1.3, 0.2)).to.equal("Error");
		});
	});
});
