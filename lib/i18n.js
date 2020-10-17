Object.defineProperty(exports, "__esModule", { value: true });
exports.createI18n = void 0;
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
exports.createI18n = ({ locale, translations }) => (strings, ...values) => {
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
//# sourceMappingURL=i18n.js.map
