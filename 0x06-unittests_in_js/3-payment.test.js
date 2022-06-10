const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')
const sinon = require('sinon')
const chai = require("chai");
const expect = chai.expect;

describe('Sure the math used', function () {
	it('Validate the usage of the Utils function', function () {
		const callback = sinon.spy(Utils, 'calculateNumber')
		sendPaymentRequestToApi(100, 20);
		expect(callback.calledOnce).to.be.true;
		expect(callback.calledWith('SUM', 100, 20)).to.be.true;
		callback.restore()
	})
})