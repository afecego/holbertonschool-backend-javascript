const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber: ', function () {
	it('...', function () {
		assert.equal(calculateNumber(1, 1), 2);
		assert.equal(calculateNumber(1, 1.2), 2);
		assert.equal(calculateNumber(1, 1.6), 3);
		assert.equal(calculateNumber(1.3, 1), 2);
		assert.equal(calculateNumber(1.7, 1), 3);
		assert.equal(calculateNumber(1.7, 1.8), 4);
		assert.equal(calculateNumber(1.7, 1.2), 3);
		assert.equal(calculateNumber(1.3, 1.8), 3);
		assert.equal(calculateNumber(1.3, 1.3), 2);
	});
})
