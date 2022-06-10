const request = require('request');
const chai = require("chai");
const expect = chai.expect;

describe('Index page', function () {
  it('...', function (done) {
	request('http://localhost:7865', (err, response, body) => {
		expect(response.statusCode).to.equal(200);
		expect(body).to.equal('Welcome to the payment system');
		done()
	})
  })
});
