import js from "@eslint/js";
import pkg from "globals";
const { node, browser } = pkg;
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: { ...browser, ...node },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
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
  {
    files: ["dist/**/*"], // <-- This applies to all files in the dist folder
    rules: {
      "no-unused-vars": "off", // <-- Turn off specific rules for the dist folder
    },
  },
]);
