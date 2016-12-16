var assert = require('assert');

describe('emoji-shorts', function () {
  var emoji = require('./emoji');

  describe('toPlain', function () {
    it('should pass through falsey strings correctly', function () {
      var res = emoji.toPlain(null);
      assert.strictEqual(res, '');
    });

    it('should pass through strings correctly', function () {
      var res = emoji.toPlain('We come on the Sloop John B');
      assert.equal(res, 'We come on the Sloop John B');
    });

    it('should simplify strings correctly', function () {
      var res = emoji.toPlain('We come on the Sloop John B 🚢');
      assert.equal(res, 'We come on the Sloop John B :ship:');
    });

    it('should ignore pre-simplified strings correctly', function () {
      var res = emoji.toPlain('We come on the Sloop John B :ship:');
      assert.equal(res, 'We come on the Sloop John B :ship:');
    });
  });

  describe('toRich', function () {
    it('should pass through falsey strings correctly', function () {
      var res = emoji.toRich(null);
      assert.strictEqual(res, '');
    });

    it('should pass through strings correctly', function () {
      var res = emoji.toRich('We come on the Sloop John B');
      assert.equal(res, 'We come on the Sloop John B');
    });

    it('should simplify strings correctly', function () {
      var res = emoji.toRich('We come on the Sloop John B :ship:');
      assert.equal(res, 'We come on the Sloop John B 🚢');
    });

    it('should ignore pre-rendered strings correctly', function () {
      var res = emoji.toRich('We come on the Sloop John B 🚢');
      assert.equal(res, 'We come on the Sloop John B 🚢');
    });

    it('should ignore invalid short-codes correctly', function () {
      var res = emoji.toRich('We come on the Sloop John B :beach-boys:');
      assert.equal(res, 'We come on the Sloop John B :beach-boys:');
    });
  });
});
