import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import astro from "eslint-plugin-astro";
export default tseslint.config(
  {
    ignores: [
      "docs/**",
      "dist/**",
      "out/**",
      ".next/**",
      ".astro/**",
      "_site/**",
      "node_modules/**",
      "reports/**",
      "test-results/**",
      "playwright-report/**",
      "public/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
);
