module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es2017: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.js'],
      plugins: ['prettier'],
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': ['error'],
        'linebreak-style': 'off',
        'no-multiple-empty-lines': 'error',
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            next: '*',
            prev: ['const', 'let'],
          },
          {
            blankLine: 'always',
            next: 'return',
            prev: '*',
          },
          {
            blankLine: 'any',
            next: ['const', 'let'],
            prev: ['const', 'let'],
          },
        ],
        semi: ['error', 'always'],
        quotes: [
          'error',
          'single',
          {
            avoidEscape: true,
          },
        ],
        'comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
          },
        ],
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint', 'unused-imports'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          { ignoreRestSiblings: true },
        ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: ['PascalCase'],
            selector: 'interface',
          },
          {
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            modifiers: ['const', 'exported'],
            selector: 'variable',
          },
          {
            format: ['camelCase'],
            selector: 'variable',
            leadingUnderscore: 'allow',
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/prefer-regexp-exec': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      },
    },
    {
      files: ['*.js'],
      parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
      },
      rules: {
        'no-unused-vars': [
          'error',
          {
            args: 'after-used',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: [
        '*.component.ts',
        '*.directive.ts',
        '*.service.ts',
        '*.interceptor.ts',
        '*.guard.ts',
        '*.resolver.ts',
      ],
      plugins: ['rxjs'],
      rules: {
        'rxjs/no-implicit-any-catch': 'off',
        'rxjs/no-ignored-takewhile-value': 'off',
        'rxjs/no-subject-value': 'off',
        'rxjs/no-unsafe-takeuntil': 'error',
        'rxjs/no-unsafe-catch': 'error',
      },
    },
    {
      files: [
        '*.component.ts',
        '*.directive.ts',
        '*.interceptor.ts',
        '*.guard.ts',
        '*.resolver.ts',
      ],
      rules: {
        'rxjs/finnish': [
          'error',
          {
            functions: false,
            methods: false,
            parameters: true,
            properties: true,
            strict: false,
            variables: true,
          },
        ],
      },
    },
    {
      files: ['*.service.ts'],
      plugins: ['rxjs'],
      rules: {
        'rxjs/finnish': [
          'error',
          {
            functions: false,
            methods: true,
            parameters: true,
            properties: true,
            strict: false,
            variables: true,
          },
        ],
      },
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: {
        jest: true,
      },
      rules: {
        'prefer-destructuring': 'off',
      },
    },
  ],
};
