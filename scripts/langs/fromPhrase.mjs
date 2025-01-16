import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import { allEnLocales, strToHash, pathToLangs } from './config.mjs';
import localeConfig from '../../app/config/localeConfig.js';

const { supportedLocales, defaultLocale } = localeConfig;
const locales = supportedLocales.filter((l) => l !== defaultLocale);

const langs = {};
locales.forEach((locale) => {
    const pathToLocale = `${pathToLangs}/${locale}.json`;

    langs[locale] = JSON.parse(readFileSync(pathToLocale, 'utf8'));
});

globSync(allEnLocales).forEach((filePath) => {
    const rawEnData = readFileSync(filePath, 'utf8');
    const enData = JSON.parse(rawEnData);

    const pattern = new RegExp(`${defaultLocale}.json$`, 'i');
    const pathToLocales = filePath.replace(pattern, '');

    const componentLocales = {};

    for (const enKey in enData) {
        const hash = strToHash(enData[enKey]);

        locales.forEach((locale) => {
            if (!componentLocales[locale]) {
                componentLocales[locale] = {};
            }
            componentLocales[locale][enKey] = langs[locale][hash];
        });
    }

    for (const [locale, data] of Object.entries(componentLocales)) {
        const newData = JSON.stringify(data, null, 4);
        writeFileSync(`${pathToLocales}/${locale}.json`, newData);
    }
});
