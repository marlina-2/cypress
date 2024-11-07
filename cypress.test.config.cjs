const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      BASE_URL: 'https://www.saucedemo.com/',
      USER_NAME: 'problem_user',
      USER_PASSWORD: 'incorrect_password',
    },
  },
});
