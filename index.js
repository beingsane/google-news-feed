const request = require('request');const cheerio = require('cheerio');

async function getGoogleNewsFeed(searchterm) {
  const url = getGoogleNewsFeedUrl(searchterm);
  const html = await getHtmlFromRequest(url);
  return retrieveFeedsFromHtml(html);
}

function retrieveFeedsFromHtml(html) {
  const $ = cheerio.load(html);
  const aTags = $('main c-wiz c-wiz div div div div a[role="heading"]');
  const timeEls = $('main c-wiz c-wiz div div div div div span span');
  return [
    getNewsFromCheerioEl(aTags, timeEls, '0'),
    getNewsFromCheerioEl(aTags, timeEls, '1'),
    getNewsFromCheerioEl(aTags, timeEls, '2')
  ];
}

function getNewsFromCheerioEl(els, timeEl, pos) {
  return  {
    title: els[pos].children[0].data,
    href: els[pos].attribs.href,
    time: timeEl[pos].children[0].data
  }
}

function getGoogleNewsFeedUrl(searchterm) {
  return 'https://news.google.com/news/search/section/q/' + searchterm;
}

async function getHtmlFromRequest(url) {
  return new Promise((res, rej) => {
    request(url, (error, response, body) => {
      if(error) rej(error);
      else res(body);
    });
  });
}


module.exports = getGoogleNewsFeed;
