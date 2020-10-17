import {createI18n} from "@aminnairi/i18n";

const translations: Record<string, Record<string, string>> = {
    "Hello, world!": {
        "es-ES": "¡Hola el mundo!",
        "fr-FR": "Bonjour le monde!"
    },
    "Hi {}, You have {} unread messages.": {
        "es-ES": "Buenos dias {}, tiene {} mensajes sin leer.",
        "fr-FR": "Bonjour {}, vous avez {} messages non-lus."
    }
};

const locale: string = "fr-FR";
const i18n: (strings: Readonly<string[]>, ...values: Readonly<string[]>) => string = createI18n({locale, translations});
const name: string = "Amin NAIRI";
const unreadMessages: number = 42;

console.log(i18n`Hello, world!`);
console.log(i18n`Hi ${name}, You have ${String(unreadMessages)} unread messages.`);
console.log(i18n`Good morning ${name}, what's on your mind today?`);
