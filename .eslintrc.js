module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "react/jsx-no-undef": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
  ignorePatterns: ["**/*.js", "**/*.jsx"],
};
