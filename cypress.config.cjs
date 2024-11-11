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

      API_BASE_URL: 'https://qauto.forstudy.space/api',
      API_USER_EMAIL: 'anna.panchuk123@test.test',
      API_USER_PASSWORD: '123456Guest'
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
