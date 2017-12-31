# google-news-feed

TODO description

## Prerequisites

NodeJS version 8.5 or higher is required.

## How to use

Run `npm i google-news-feed --save`.

```
const getGoogleNewsFeed = require('./index');
const news = await getGoogleNewsFeed('SEARCHTERM');
```


## Options

hl - Language
country - Country Code

```
const getGoogleNewsFeed = require('./index');
const news = await getGoogleNewsFeed('aaa', {hl: 'de', country: 'DE'});
```

---

> [sarasteiert.com](https://www.sarasteiert.com) &nbsp;&middot;&nbsp;
> GitHub [@salomonelli](https://github.com/salomonelli) &nbsp;&middot;&nbsp;
> Twitter [@salomonelli](https://twitter.com/salomonelli)
