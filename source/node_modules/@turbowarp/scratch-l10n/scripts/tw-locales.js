import vanillaLocales, {localeMap} from '../src/supported-locales';

const SKIP_LOCALES = [
    // For es-419, we just use normal Spanish
    'es-419'
];

/** @type {Record<string, {name: string}>} */
const supportedLocales = {};
for (const locale of Object.keys(vanillaLocales).sort()) {
    if (!SKIP_LOCALES.includes(locale)) {
        supportedLocales[locale] = JSON.parse(JSON.stringify(vanillaLocales[locale]));
    }
}

export {
    supportedLocales,
    localeMap as scratchToTransifex
};
