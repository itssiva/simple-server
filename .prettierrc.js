/**
 * https://survivejs.com/maintenance/code-quality/code-formatting/
 * https://stackoverflow.com/questions/48363647/editorconfig-vs-eslint-vs-prettier-is-it-worthwhile-to-use-them-all
 * Prettier is an opinionated code formatter that supports JavaScript, TypeScript, CSS, GraphQL, JSON and Markdown.
 * It has few settings and most of the code style rules are built in.
 * Prettier removes any existing formatting from your code and prints its own version which makes code absolutely consistent.
 * This approach has many benefits:
    Minimal configuration.
    Almost no decisions to make.
    No arguing about particular rules if you’re working in a team.
    No need to learn you project’s code style for contributors.
    No need to fix style issues reported by ESLint.
*/

/*
  My opinion
  use ESLint to catch possible errors thus to achieve consistent language usage and Prettier to format the code.
*/

module.exports = {
  trailingComma: "es5",
  tabWidth: 8,
  semi: false,
  singleQuote: true
};
