module.exports = [
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
];