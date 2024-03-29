const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // screenshotOnRunFailure=true
      require('cypress-mochawesome-reporter/plugin')(on);  //  for html reports
      // implement node event listeners here
    },
  },
});
