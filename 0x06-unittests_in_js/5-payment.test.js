const sendPaymentRequestToApi = require('./5-payment')
const Utils = require('./utils')
const sinon = require('sinon')
const chai = require("chai");
const expect = chai.expect;

describe('Validate the usage of the Utils function', function () {
	let api
	let consol

	beforeEach(function(){
		api = sinon.stub(Utils, 'calculateNumber').returns(10);
		consol = sinon.spy(console, 'log')
	})

	afterEach(function(){
		api.restore()
		consol.restore()
	})

	it('call sendPaymentRequestToAPI with 100, and 20', function () {
		sendPaymentRequestToApi(100, 20)
		expect(api.calledWith('SUM', 100, 20)).to.be.true;
		expect(consol.calledOnceWithExactly('The total is: 120'));
	})

	it('call sendPaymentRequestToAPI with 10, and 10', function() {
		sendPaymentRequestToApi(10, 10)
		expect(api.calledWith('SUM', 10, 10)).to.be.true;
		expect(consol.calledOnceWithExactly('The total is: 20'));
	})
})