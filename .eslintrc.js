module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'typescript-enum', 'import', 'prettier'],
  extends: [
    '@react-native-community',
    'plugin:typescript-enum/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  settings: {
    // https://github.com/facebook/react-native/issues/28549
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
  rules: {
    'no-empty': ['error', { allowEmptyCatch: true }],
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        warnOnUnassignedImports: true,
      },
    ],
    'import/first': ['error'],
    'import/exports-last': ['error'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports' },
        ],
      },
    },
  ],
};
