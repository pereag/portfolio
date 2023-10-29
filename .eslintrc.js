module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:nuxt/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  ignorePatterns: ["/tailwind.config.js"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "vue/multi-word-component-names": "off",
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": "error",
  },
};
