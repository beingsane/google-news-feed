const getGoogleNewsFeed = require('./index');
const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', async function(done) {
      assert.equal([1,2,3].indexOf(4), -1);
      const news = await getGoogleNewsFeed('aaa');
      console.dir(news);
      done();
    });
  });
});
