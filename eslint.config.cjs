const eslintPluginAstro = require("eslint-plugin-astro");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const importPlugin = require("eslint-plugin-import");

module.exports = [
  // Global ignores
  {
    ignores: [
      "eslint.config.cjs",
      ".astro/**",
      "dist/**",
      "node_modules/**",
      "src/env.d.ts",
    ],
  },

  // Astro recommended config
  ...eslintPluginAstro.configs["flat/recommended"],

  // TypeScript/JavaScript files
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      import: importPlugin,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
];
