// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    app: {
        baseURL: '/web-frontend/',
        // baseURL: '',
        buildAssetsDir: 'assets',
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        // hid: 'nuxt-color-mode-script',
        // globalName: '__NUXT_COLOR_MODE__',
        // componentName: 'ColorScheme',
        // classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    }
})
