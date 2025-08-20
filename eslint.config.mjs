import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript']
  })
];

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
    eslintConfig,
    {
      plugins: {
        '@stylistic': stylistic
      },
      rules: {
        '@stylistic/indent': ['error', 2]
      }
    },
    {
      rules: {
        '@typescript-eslint/require-await': 'warn'
      }
    }
);
