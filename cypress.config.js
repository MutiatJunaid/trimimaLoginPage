const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://staging.trymima.com/',
    defaultCommandTimeout:10000,
    viewportHeight:960,
    viewportWidth:1538,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
