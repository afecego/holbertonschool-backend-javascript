const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require("chai");
const expect = chai.expect;

describe('Testing a boolean', function() {
	it('Validate return of promise', function(done) {
		getPaymentTokenFromAPI(true)
		.then(result => {
			expect(result).to.deep.include({data: 'Successful response from the API' });
			done();
		})
		.catch(err => {
			done(err);
		})
	})
})
