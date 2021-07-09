module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: [
    '@emotion'
  ],
  rules: {
    '@emotion/jsx-import' : 'error',
    '@emotion/pkg-renaming': 'error',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    "@emotion/jsx-import": "error",
    "@emotion/no-vanilla": "error",
    "@emotion/import-from-emotion": "error",
    "@emotion/styled-import": "error"
  },
}
