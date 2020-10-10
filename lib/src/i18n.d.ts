interface CreateI18nOptions {
    locale: Readonly<string>;
    translations: Readonly<Record<string, Record<string, string>>>;
}
export declare function createI18n({ locale, translations }: Readonly<CreateI18nOptions>): (strings: Readonly<string[]>, ...values: Readonly<string[]>) => string;
export {};
//# sourceMappingURL=i18n.d.ts.map