# i18n

![Code Style](https://github.com/aminnairi/i18n/workflows/Code%20Style/badge.svg?branch=next) ![Tests](https://github.com/aminnairi/i18n/workflows/Tests/badge.svg?branch=next) ![Build](https://github.com/aminnairi/i18n/workflows/Build/badge.svg?branch=next)

Translation library written in TypeScript using tag-functions.

```javascript
i18n`Hello, world!`;
i18n`Good morning ${name}, you have ${unreadMessagesCount} unread messages.`;
```

## Why

### Searches

Let's say you just spotted a mistake on a page (wrong font family for a text for instance) you just found and want to search through a huge code-base you don't really know for the one file to update.

You may be tempted to search for a text near the mistake, but with key-based translation libraries that may be harder because you would have been used a translation key instead of the plain text.

Using this library let's you keep the entire text you are willing to translate, making it more obvious to debug and work on.

### Interpollation

We all love ECMAScript 2015's template strings. They are such a relief from the old time when we had to concatenate multiple strings with the plus operator.

Unfortunately, if you use a key-based translation library, you will be forced to use multiple keys for a single text involving multiple interpollation (like a welcome message from an email client indicating the number of unread messages). This only makes it harder to implement translation on your application.

Using this library let's you keep one and only one translation for a single text, making it way more simpler to use and debug later on. 

### Adoption

This library makes it really easy to integrate translation on a front-end application using your favorite framework.

Integrating translation on an already ongoing project is really tedious. From my own POV, translation is the #1 thing I hate the most. That's why ease of adoption was one of the main goal when making this library.

## Requirements

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## Installation

```console
$ npm install --save aminnairi/i18n
```

## Uninstallation

```console
$ npm uninstall @aminnairi/i18n
```

## Examples

See [`examples`](./examples).
