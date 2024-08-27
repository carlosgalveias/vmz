import globals from "globals";
import js from "@eslint/js";

export default [
        js.configs.recommended,
        {
            ignores: [
                "test.js",
                "node-*",
                "lib/events.js",
                "test/additional-modules/my-es-module/index.js",
            ],
        },
        {
            languageOptions: {
                globals: {
                    ...globals.node,
                    "it": "readonly",
                    "describe": "readonly",
                    "before": "readonly",
                    "after": "readonly"
                },

                ecmaVersion: 2017,
                sourceType: "commonjs",

                parserOptions: {
                    ecmaFeatures: {
                        globalReturn: true,
                    },
                },
            },
            rules: {},
        }];