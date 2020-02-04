const webpack = require('webpack');
const poststylus = require('poststylus');
const path = require('path');

const {BASE_DOMAIN_API, NODE_ENV} = process.env;
const isProd = NODE_ENV === 'production' ? true : false;

export default {
    rootDir: __dirname,
    head: {
        titleTemplate: 'BeautyFood - %s',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: '%s', name: '%s', content: '%s'}
        ]
    },
    generate: {
        dir: path.resolve(__dirname, '/static'),
    },
    modules: [
        '@nuxtjs/axios',
        ['@nuxtjs/moment', ['ru']]
    ],
    plugins: [
        // {src: './plugins/nuxt-client-init.js', ssr: false},
        {src: './plugins/vue-carousel.js', ssr: false},
        {src: './plugins/vue-axios.js', ssr: false},
        {src: './plugins/vue-notif.js', ssr: false},
        {src: './plugins/vue-slider.js', ssr: false},
        {src: './components/ui/index.js', ssr: false},
        {src: './plugins/vue-statistic.js', ssr: false}
    ],
    axios: {
        debug: !isProd,
        baseURL: `//${BASE_DOMAIN_API}/`
    },
    css: ['@/assets/stylus/main.styl'],
    scrollToTop: true,
    build: {
        plugins: [
            new webpack.LoaderOptionsPlugin({
                options: {
                    stylus: {
                        'sourceMap': !isProd,
                        use: [poststylus(['autoprefixer'])],
                        import: [
                            path.resolve(__dirname, 'assets/stylus/variables.styl'),
                            path.resolve(__dirname, 'assets/stylus/responsive.styl')
                        ]
                    }
                }
            })
        ]
    }
}

