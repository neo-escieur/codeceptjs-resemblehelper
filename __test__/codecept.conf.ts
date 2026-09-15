export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  require: ['tsx/esm'],
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://codecept.io/',
      show: false,
      browser: 'chromium'
    },
    "ResembleHelper" : {
      "require": "../src/index.ts",
      "baseFolder": "./screenshots/base/",
      "diffFolder": "./screenshots/diff/",
      "prepareBaseImage": false
    }
  },
  include: {
    I: './custom_steps.js'
  },
  name: '__test__'
}
