import localeConfig from '~/config/localeConfig.js';

export default function useLocale() {
    const { defaultLocale } = localeConfig;
    let locale: string;

    if (import.meta.client) {
        locale = useCookie('locale').value || defaultLocale;
    } else {
        locale = useNuxtApp().$locale;
    }

    return {
        locale,
    };
}
