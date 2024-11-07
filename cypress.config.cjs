const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      BASE_URL: 'https://www.saucedemo.com/',
      USER_NAME: 'standard_user',
      USER_PASSWORD: 'secret_sauce',
    },

    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome,cypress-html-reporter',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mochawesome',
        quiet: true,
      },
    },
  },

});
