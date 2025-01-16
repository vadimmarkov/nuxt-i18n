/**
 * Example - https://github.com/s00d/nuxt-i18n-micro/blob/main/src/runtime/plugins/04.auto-detect.ts
 */

import { defineEventHandler, getHeader, getCookie, setCookie } from 'h3';
import type { H3Event } from 'h3';

import localeConfig from '~/config/localeConfig.js';

export default defineEventHandler((event: H3Event) => {
    const { supportedLocales, defaultLocale, localeCookieName } = localeConfig;
    const userLocale = getCookie(event, localeCookieName);

    if (userLocale && supportedLocales.includes(userLocale)) {
        event.context.locale = userLocale;

        return;
    }

    const acceptLanguage = getHeader(event, 'accept-language') ?? '';
    const browserLanguages = acceptLanguage
        .split(',')
        .map((entry) => entry.split(';')[0].trim());

    let preferredLocale = defaultLocale;
    for (const language of browserLanguages) {
        const primaryLanguage = language.split('-')[0];

        if (supportedLocales.includes(primaryLanguage)) {
            preferredLocale = primaryLanguage;

            break;
        }
    }

    setCookie(event, localeCookieName, preferredLocale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    event.context.locale = preferredLocale;
});
