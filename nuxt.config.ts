// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    app: {
        baseURL: '', // baseURL: '/<repository>/'
        buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    },
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
