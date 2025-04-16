import js from "@eslint/js";
import pkg from "globals";
const { node, browser } = pkg;
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: { ...browser, ...node }, // Combining both globals
      parserOptions: {
        ecmaVersion: "latest", // You can specify ECMAScript version here
        sourceType: "module", // This enables ES module syntax
      },
    },
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    extends: ["js/recommended"],
    rules: {
      "prettier/prettier": "error",
    },
  },
]);
