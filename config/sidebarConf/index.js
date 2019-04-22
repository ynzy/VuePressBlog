const css = require('./css/index');
const javascript = require('./javascript/index');
module.exports = {
    '/css/': css,
    '/javascript/': javascript,
      // fallback
    '/': [
        '',        /* / */
        '/about/', /* /contact.html */
        '/about/about1'    /* /about.html */
    ]
};