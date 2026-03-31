import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.turbo/**",
      "**/coverage/**",
      "packages/eslint-config/**",
      "packages/prettier-config/**",
      "eslint.config.*",
      "prettier.config.*",
      ".lintstagedrc.*",
      "**/*.config.js",
      "**/*.config.cjs",
      "**/*.config.mjs",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@repo/web", "@repo/web/*"],
              message: "Do not import frontend app code into other workspaces.",
            },
            {
              group: ["@repo/api", "@repo/api/*"],
              message: "Do not import backend app code into other workspaces.",
            },
          ],
        },
      ],
    },
  },
  eslintConfigPrettier,
];
