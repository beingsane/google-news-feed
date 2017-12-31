const getGoogleNewsFeed = require('./index');
const assert = require('assert');

describe('getGoogleNewsFeed()', () => {
  describe('should return a news feed', () => {
    it('should contain at least than one item', async () =>  {
      const news = await getGoogleNewsFeed('aaa');
      assert.equal(news.length > 0, true);
    });
    it('each item should have a title, description, pubDate and link', async () =>  {
      const news = await getGoogleNewsFeed('aaa');
      news.forEach(n => {
        assert.equal(n.title && n.title !== '', true);
        assert.equal(n.description && n.description !== '', true);
        assert.equal(n.pubDate && n.pubdate !== '', true);
        assert.equal(n.link && n.link !== '', true);
      });
    });
  });
  describe('de-DE: should return a news feed', () => {
    it('should contain at least than one item', async () =>  {
      const news = await getGoogleNewsFeed('aaa', {hl: 'de', country: 'DE'});
      assert.equal(news.length > 0, true);
    });
    it('each item should have a title, description, pubDate and link', async () =>  {
      const news = await getGoogleNewsFeed('aaa', {hl: 'de', country: 'DE'});
      news.forEach(n => {
        assert.equal(n.title && n.title !== '', true);
        assert.equal(n.description && n.description !== '', true);
        assert.equal(n.pubDate && n.pubdate !== '', true);
        assert.equal(n.link && n.link !== '', true);
      });
    });
  });
});
