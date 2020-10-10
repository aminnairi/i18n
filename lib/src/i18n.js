import { join } from "./utils";
export function createI18n({ locale, translations }) {
    return function i18n(strings, ...values) {
        const maybeLocaleTranslations = translations[strings.join("{}")];
        if ("undefined" !== typeof maybeLocaleTranslations) {
            const maybeLocaleTranslation = maybeLocaleTranslations[locale];
            if ("undefined" !== typeof maybeLocaleTranslation) {
                const localeTranslation = maybeLocaleTranslation.split("{}");
                return join(localeTranslation, values);
            }
        }
        return join(strings, values);
    };
}
//# sourceMappingURL=i18n.js.map