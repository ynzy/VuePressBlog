module.exports = [
    { text: 'Home', link: '/' },
    { text: 'css',
    items: [
      { text: 'css', link: '/css/' },
    ]
  },
    { text: 'javascript', link: '/javascript/' },
    { text: 'about', link: '/about/' },
    { text: 'more',
      items: [
          { text: 'favourite', link: '/more/favourite/' },
      ]
    },
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
];