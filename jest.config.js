module.exports = {
  "testEnvironment": "node",
  "roots": [
    "<rootDir>/src"
  ],
  "preset": "ts-jest",
  "setupFilesAfterEnv": ["<rootDir>/setupTests.ts"],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],
  "moduleNameMapper": {
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  "testPathIgnorePatterns": ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "globals": {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    "ts-jest": {
      "tsConfig": "<rootDir>/tsconfig.jest.json"
    }
  }
};
