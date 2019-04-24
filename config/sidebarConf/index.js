const css = require('./css/index');
const javascript = require('./javascript/index');
const about = require('./about/index');
const favourite = require('./more/favourite/index');
module.exports = {
    '/css/': css,
    '/javascript/': javascript,
    '/about/': about,
    '/more/favourite/': favourite,
      // fallback
    '/': [
        '',        /* / */
        // '/about/', /* /contact.html */
        // '/about/about1'    /* /about.html */
    ]
};