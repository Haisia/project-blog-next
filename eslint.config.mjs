import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // JS 변수에 대한 경고 끄기
      "no-unused-vars": "off",
      // TypeScript 변수에 대한 경고 끄기
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
