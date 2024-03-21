import {resolve} from "node:path"

// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
    app: {
        // baseURL: '/web-frontend/',
        baseURL: '',
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
        buildAssetsDir: 'assets',
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-snackbar',
        '@nuxt/content'
    ],
    content: {
        // ... options
    },
    snackbar: {
        bottom: true,
        right: true,
        duration: 5000
    },
    // css: ['~/assets/css/main.css'],
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
