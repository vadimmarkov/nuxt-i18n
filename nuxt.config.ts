// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4,
    },
    modules: ['~/modules/i18n'],
    css: ['@@/app/assets/styles/style.css'],
});
