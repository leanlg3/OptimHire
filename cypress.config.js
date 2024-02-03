const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "/Users/darwoft/Documents/AutomationProjects/CypressCoderByte/cypress/e2e/test1.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
