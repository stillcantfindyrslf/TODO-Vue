module.exports = {
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.scss$": "jest-css-modules-transform",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(css|scss)$": "identity-obj-proxy",
  },
  testMatch: ["**/tests/unit/**/*.spec.js"],
};
