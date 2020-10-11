module.exports = {
    env: {
        es2021: true,
        jest: true,
        node: true
    },
    extends: [
        "@aminnairi/eslint-config"
    ],
    overrides: [
        {
            extends: ["@aminnairi/eslint-config-typescript"],
            files: ["**/*.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {project: "tsconfig.eslint.json"},
            plugins: ["@typescript-eslint"]
        },
        {
            files: ["test/i18n.test.ts"],
            rules: {"@typescript-eslint/naming-convention": "off"}
        }
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
    },
    rules: {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
