import { defineConfig } from 'eslint-define-config';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginCypress from 'eslint-plugin-cypress';

export default defineConfig([
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
      globals: {
        node: true,
        'cypress/globals': true,
        describe: 'readonly',
        it: 'readonly',
        cy: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    plugins: {
      '@eslint/js': pluginJs.configs.recommended,
      '@typescript-eslint': tseslint.configs.recommended,
      cypress: pluginCypress.configs.recommended,
    },
  },
]);
