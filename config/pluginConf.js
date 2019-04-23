module.exports = {
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用.",
          buttonText: "刷新"
        }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics':{
        'ga': 'UA-138865245-1'
    }

};