module.exports = {
    title: 'Shijie Zhou',
    description: 'Introducing how to setup vuepress project',
    dest: './docs', // Specify the output directory
    base: '/vue-vuepress/', // SET BASE FOR THE CORRECT DEPLOY
    themeConfig: {
        nav: [
            { text: 'Home', link: '/home/' },
            { text: 'Projects', link: '/index/' },
            { text: 'Portfolio', link: 'https://www.shijiezhou.com' },
        ],
        sidebar: [
            {
                title: 'Home',
                collapsable: true,
                children: [
                    '/home/counter-app'
                ]
            },
            {
                title: 'Vue Guide',
                collapsable: true,
                children: [
                    '/vue/guide',
                    '/vue/api'
                ]
            },
            {
                title: 'React Guide',
                collapsable: true,
                children: [
                    '/react/guide',
                    '/react/api'
                ]
            },
            {
                title: 'API Guide',
                collapsable: true,
                children: [
                    '/projects/guide',
                    '/projects/api'
                ]
            }
        ]
    }
}