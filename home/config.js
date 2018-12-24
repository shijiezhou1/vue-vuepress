module.exports = {
    title: 'Shijie Zhou',
    description: 'Introducing how to setup vuepress project',
    dest: './docs', // Specify the output directory
    base: '/vue-vuepress/', // SET BASE FOR THE CORRECT DEPLOY
    themeConfig: {
        nav: [
            { text: 'About', link: '/home/' },
            { text: 'Projects', link: '/index/' },
            { text: 'Portfolio', link: 'https://www.shijiezhou.com' },
        ],
        sidebar: [
            {
                title: 'hahahahahahaha',
                collapsable: true,
                children: [
                    '/home/counter-app'
                ]
            }
        ]
    }
}