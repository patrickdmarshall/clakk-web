module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "react/jsx-no-undef": "off", // Disable the undefined component rule
    "no-unused-vars": "off", // Optional: If you want to turn off unused var checks
    "@typescript-eslint/no-unused-vars": "off", // Optional: Same for TypeScript
  },
  ignorePatterns: ["**/*.js", "**/*.jsx"], // Ignore JS and JSX files
};
