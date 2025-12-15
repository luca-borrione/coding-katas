import js from '@eslint/js';
import globals from 'globals';
import jest from 'eslint-plugin-jest';

export default [
  {
    ignores: ['node_modules', 'coverage', 'dist', '.husky'],
  },

  // Base recommended rules (equivalent to "eslint:recommended")
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      // Allow console.log in coding exercises
      'no-console': 'off',
    },
  },
  // Jest-specific rules and globals for test files
  {
    ...jest.configs['flat/recommended'],
    files: ['**/*.spec.js', '**/*.test.js'],
  },
];
