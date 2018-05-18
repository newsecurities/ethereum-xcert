const Xcert = artifacts.require('Xcert');
const BurnableXcert = artifacts.require('BurnableXcert');
const ChainableXcert = artifacts.require('ChainableXcert');
const PausableXcert = artifacts.require('PausableXcert');
const RevokableXcert = artifacts.require('RevokableXcert');
const Selector = artifacts.require('Selector');

contract('Selector', (accounts) => {

  let selector;

  beforeEach(async function () {
    selector = await Selector.new();
  });

  it('Checks Xcert selector', async () => {
    var xcert = await Xcert.new('Foo', 'F');
    var bytes = await selector.calculateXcertSelector();
    var supports = await xcert.supportsInterface(bytes);
    assert.equal(supports, true);
  });

  it('Checks BurnableXcert selector', async () => {
    var xcert = await BurnableXcert.new('Foo', 'F');
    var bytes = await selector.calculateBurnableXcertSelector();
    var supports = await xcert.supportsInterface(bytes);
    assert.equal(supports, true);
  });

  it('Checks PausableXcert selector', async () => {
    var xcert = await PausableXcert.new('Foo', 'F');
    var bytes = await selector.calculatePausableXcertSelector();
    var supports = await xcert.supportsInterface(bytes);
    assert.equal(supports, true);
  });

  it('Checks ChainableXcert selector', async () => {
    var xcert = await ChainableXcert.new('Foo', 'F');
    var bytes = await selector.calculateChainableXcertSelector();
    var supports = await xcert.supportsInterface(bytes);
    assert.equal(supports, true);
  });

  it('Checks RevokableXcert selector', async () => {
    var xcert = await RevokableXcert.new('Foo', 'F');
    var bytes = await selector.calculateRevokableXcertSelector();
    var supports = await xcert.supportsInterface(bytes);
    assert.equal(supports, true);
  });

});