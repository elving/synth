module.exports = {
  'packages/**/*.{js}': [
    'lerna exec --parallel -- eslint . -c ./.eslintrc --ext .js,mdx --fix',
    'lerna exec --parallel -- prettier --write',
    () => 'lerna exec --parallel -- tsc -p ./tsconfig.json',
    'git add',
  ],
}
