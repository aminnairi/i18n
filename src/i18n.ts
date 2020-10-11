const join = (first: Readonly<string[]>, second: Readonly<string[]>): string => {
    const firstLength: Readonly<number> = first.length;

    let firstIndex: number = 0;
    let secondIndex: number = 0;
    let output: string = "";

    while (firstIndex < firstLength) {
        output += first[firstIndex++];

        if (second[secondIndex]) {
            output += second[secondIndex++];
        }
    }

    return output;
};

interface CreateI18nOptions {
    locale: Readonly<string>;
    translations: Readonly<Record<string, Record<string, string>>>;
}

export const createI18n = ({locale, translations}: Readonly<CreateI18nOptions>) => (strings: Readonly<string[]>, ...values: Readonly<string[]>): string => {
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
