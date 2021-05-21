docute.init({
    landing: 'landing.html',
    title: 'Lorem lipsum i18n for JavaScript library | 国际化乱数假文js库',
    repo: 'llxlr/lipsum.js',
    twitter: 'james_ya_',
    'edit-link': 'https://github.com/llxlr/lipsum.js/blob/master/',
    nav: {
        default: [{
            title: '首页', path: '/'
        },
        {
            title: '支持 Lipsum.js', path: '/support'
        }]
    },
    plugins: [
        docsearch({
            indexName: 'lipsum.js',
            url: 'https://lipsum.js.org'
        }),
        evanyou()
    ]
});
