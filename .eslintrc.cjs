module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: '@typescript-eslint/parser',
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:nuxt/recommended',
      'plugin:vue/vue3-recommended',
    ],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true
      }],
      indent: ['error', 2],
      'keyword-spacing': 'warn',
      'no-console': 'off',
      'no-unused-vars': 'off',
      'func-call-spacing': 'off',
      'vue/one-component-per-file': 'off',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/script-setup-no-uses-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
};