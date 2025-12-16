import js from '@eslint/js';
import globals from 'globals';
import jest from 'eslint-plugin-jest';
import airbnbBase from 'eslint-config-airbnb-base';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules', 'coverage', 'dist', '.husky'],
  },

  // Base recommended rules (equivalent to "eslint:recommended")
  js.configs.recommended,

  // Airbnb Base rules for JS files
  {
    files: ['exercises/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...airbnbBase.rules,
      // Allow console.log in coding exercises
      'no-console': 'off',
    },
  },

  // Jest-specific rules and globals for test files
  {
    ...jest.configs['flat/recommended'],
    files: ['**/*.spec.js', '**/*.test.js'],
  },

  // Prettier - disables rules that conflict with Prettier (must be last)
  prettier,
];
