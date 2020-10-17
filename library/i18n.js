'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const join = (first, second) => {
    const firstLength = first.length;
    let firstIndex = 0;
    let secondIndex = 0;
    let output = "";
    while (firstIndex < firstLength) {
        output += first[firstIndex++];
        if (second[secondIndex]) {
            output += second[secondIndex++];
        }
    }
    return output;
};
const createI18n = ({ locale, translations }) => (strings, ...values) => {
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

exports.createI18n = createI18n;
//# sourceMappingURL=i18n.js.map
