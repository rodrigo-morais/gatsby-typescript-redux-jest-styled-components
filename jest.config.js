module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js"
  },
  testRegex: "(/tests/.*\\.([tj]sx?)|(\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testPathIgnorePatterns: [
    "node_modules",
    ".cache"
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(gatsby)/)"
  ],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    },
    "__PATH_PREFIX__": ""
  },
  setupFiles: [
    "<rootDir>/loadershim.js",
    "<rootDir>/jest-setup.js"
  ]
}
