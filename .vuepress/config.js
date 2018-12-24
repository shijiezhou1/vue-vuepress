module.exports = {
    title: 'Shijie Zhou',
    description: 'Introducing how to setup vuepress project',
    dest: './docs', // Specify the output directory
    base: '/vue-vuepress/', // SET BASE FOR THE CORRECT DEPLOY
    sitemap: {
        filename: 'sitemap.txt',
        domain: 'http://test.com'
    },
    themeConfig: {
        nav: [
            { text: 'About', link: '/home/' },
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
                title: 'PHP',
                collapsable: true,
                children: [
                    '/php/'
                ]
            },
            {
                title: 'Vue',
                collapsable: true,
                children: [
                    '/vue/guide',
                    '/vue/api',
                    '/vue/mongoose',
                ]
            },
            {
                title: 'React',
                collapsable: true,
                children: [
                    '/react/guide',
                    '/react/api'
                ]
            },
            {
                title: 'API',
                collapsable: true,
                children: [
                    '/projects/guide',
                    '/projects/api'
                ]
            }
        ]
    }
}