// @ts-check
import tseslint from 'typescript-eslint';
import rootConfig from '../../eslint.config.mjs';
import angularConfig from '../../eslint-angular.config.mjs';

export default tseslint.config(
  ...rootConfig,
  ...angularConfig,
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'ffa',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'ffa',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/pipe-prefix': [
        'error',
        {
          prefixes: ['ffa'],
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
);
