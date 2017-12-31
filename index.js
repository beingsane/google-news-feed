const request = require('request');
const parseString = require('xml2js').parseString;

const getGoogleNewsFeed = async function(searchterm, options) {
    const url = getGoogleNewsFeedUrl(searchterm, options);
    const response = await doRequest(url);
    const rss = await xmlToJson(response);
    const news = rss.rss.channel[0].item.map(n => {
        return {
            title: n.title[0],
            description: n.description[0],
            pubDate: n.pubDate[0],
            link: n.link[0],
        };
    });
    return news;
};

async function xmlToJson(xml) {
    return new Promise((res, rej) => {
        parseString(xml, function(err, result) {
            if (err) rej(err);
            else res(result);
        });
    });
}


function getGoogleNewsFeedUrl(searchterm, options) {
    const lang = options && options.hl && options.hl !== '' ? options.hl : 'en';
    const country = options && options.country && options.country !== '' ? options.country : 'US';
    return 'https://news.google.com/news/rss/search/section/q/' + searchterm +
    '/' + searchterm + '?hl=' + lang + '&gl=' + country.toUpperCase() + '&ned=' + country.toLowerCase();
}

async function doRequest(url) {
    return new Promise((res, rej) => {
        request(url, (error, response, body) => {
            if (error) rej(error);
            else res(body);
        });
    });
}


module.exports = getGoogleNewsFeed;
