const sendPaymentRequestToApi = require('./5-payment')
const Utils = require('./utils')
const sinon = require('sinon')
const chai = require("chai");
const expect = chai.expect;

describe('Validate the usage of the Utils function', function () {
	it('call sendPaymentRequestToAPI with 100, and 20', function () {
		const api = sinon.stub(Utils, 'calculateNumber').returns(10);
		const consol = sinon.spy(console, 'log')
		sendPaymentRequestToApi(100, 20)
		expect(api.calledWith('SUM', 100, 20)).to.be.true;
		expect(consol.calledOnceWithExactly('The total is: 120'));
		api.restore()
		consol.restore()
	})
	it('call sendPaymentRequestToAPI with 10, and 10', function() {
		const api = sinon.stub(Utils, 'calculateNumber').returns(10);
		const consol = sinon.spy(console, 'log')
		sendPaymentRequestToApi(10, 10)
		expect(api.calledWith('SUM', 10, 10)).to.be.true;
		expect(consol.calledOnceWithExactly('The total is: 20'));
		api.restore()
		consol.restore()
	})
})