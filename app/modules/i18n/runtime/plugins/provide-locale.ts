export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.server) {
        nuxtApp.provide('locale', nuxtApp.ssrContext?.event.context.locale);
    }
});
