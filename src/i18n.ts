import {join} from "./utils";

interface CreateI18nOptions {
    locale: Readonly<string>;
    translations: Readonly<Record<string, Record<string, string>>>;
}

export function createI18n({locale, translations}: Readonly<CreateI18nOptions>) {
    return function i18n(strings: Readonly<string[]>, ...values: Readonly<string[]>): string {
        const maybeLocaleTranslations: Record<string, string> | undefined = translations[strings.join("{}")];

        if ("undefined" !== typeof maybeLocaleTranslations) {
            const maybeLocaleTranslation: string | undefined = maybeLocaleTranslations[locale];

            if ("undefined" !== typeof maybeLocaleTranslation) {
                const localeTranslation: Readonly<string[]> = maybeLocaleTranslation.split("{}");

                return join(localeTranslation, values);
            }
        }

        return join(strings, values);
    };
}
