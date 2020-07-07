const { expect } = require('chai');

const { hello } = require('../lib');

describe('hello', function() {
  it('salutes the world', function() {
    expect(hello()).to.equal('Hello, World!');
  });

  it('salutes the provided name', function() {
    expect(hello('Bob')).to.equal('Hello, Bob!');
  });
});
