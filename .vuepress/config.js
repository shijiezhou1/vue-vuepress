module.exports = {
    title: 'Shijie Zhou',
    description: 'Teaching, Learning, and Absorbing',
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/zh/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器'
        }
    },
    dest: './docs', // Specify the output directory
    base: '/vue-vuepress/', // SET BASE FOR THE CORRECT DEPLOY,
    plugins: ['@vuepress/medium-zoom'],
    sitemap: {
        filename: 'sitemap.txt',
        domain: 'http://test.com'
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/home/' },
            { text: 'Projects', link: '/index/' },
            { text: 'About', link: 'https://www.shijiezhou.com' },
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
                    '/php/pdo.md'
                ]
            },
            {
                title: 'Vue',
                collapsable: true,
                children: [
                    '/vue/guide.md',
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