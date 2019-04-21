module.exports = {
    title: '张雨凡的个人博客',
    description: 'Just playing around',
    themeConfig: {
        nav: [  //路由导航
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
            text: 'Languages',
            items: [
              { text: 'Chinese', link: '/language/chinese' },
              { text: 'Japanese', link: '/language/japanese' },
              { text: 'Group1', items: [
                { text: 'Chinese', link: '/language/chinese' },
                { text: 'Japanese', link: '/language/japanese' }
              ] },
            ]
          },
          { text: 'External', link: 'https://google.com' },
        ],
        // sidebar: 'auto' //自动生成侧栏
        // sidebar: [
        //     '/',
        //     '/css/',
        //     '/about/about1',
        //     ['/javascript/', 'Explicit link text']
        // ],
        // sidebar: [
        //     {
        //       title: 'Group 1',
        //       children: [
        //         '/',
        //                     '/css/',
        //     '/about/about1',
        //     ['/javascript/', 'Explicit link text']
        //       ]
        //     },
        //     {
        //       title: 'Group 2',
        //       collapsable: false,
        //       children: [ /* ... */ ]
        //     }
        //   ],
        sidebar: {
            '/css/': [
              '',     /* /foo/ */
              'css1',  /* /foo/one.html */
              'css2'   /* /foo/two.html */
            ],
      
            '/javascript/': [
              '',      /* /bar/ */
              'js1', /* /bar/three.html */
              'js2'   /* /bar/four.html */
            ],
      
            // fallback
            '/': [
              '',        /* / */
              '/about/', /* /contact.html */
              '/about/about1'    /* /about.html */
            ]
          },
        sidebarDepth: 2,  
        displayAllHeaders: true
    }
  }