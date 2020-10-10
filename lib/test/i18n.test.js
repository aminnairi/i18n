/*!
 * Copyright 2020 Amin NAIRI
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
import { createI18n } from "../src/i18n";
const MAXIMUM_ASSERTIONS = 1;
describe("i18n", () => {
    it("should return the correct translation", () => {
        expect.assertions(MAXIMUM_ASSERTIONS);
        const i18n = createI18n({
            locale: "fr-FR",
            translations: {
                "Hello, {}! You have {} unread messages.": {
                    "fr-FR": "Bonjour, {} ! Vous avez {} messages non-lus.",
                    "es-ES": "Holà, {}! Tiene {} mensajes sin leer."
                }
            }
        });
        const name = "Amin NAIRI";
        const unreadMessagesCount = 12;
        const translation = i18n `Hello, ${name}! You have ${String(unreadMessagesCount)} unread messages.`;
        const expectation = "Bonjour, Amin NAIRI ! Vous avez 12 messages non-lus.";
        expect(translation).toStrictEqual(expectation);
    });
    it("should return the fallback translation", () => {
        expect.assertions(MAXIMUM_ASSERTIONS);
        const i18n = createI18n({
            locale: "fr-CA",
            translations: {
                "Hello, {}! You have {} unread messages.": {
                    "fr-FR": "Bonjour, {} ! Vous avez {} messages non-lus.",
                    "es-ES": "Holà, {}! Tiene {} mensajes sin leer."
                }
            }
        });
        const name = "Amin NAIRI";
        const unreadMessagesCount = 12;
        const translation = i18n `Hello, ${name}! You have ${String(unreadMessagesCount)} unread messages.`;
        const expectation = "Hello, Amin NAIRI! You have 12 unread messages.";
        expect(translation).toStrictEqual(expectation);
    });
});
//# sourceMappingURL=i18n.test.js.map