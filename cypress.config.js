const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6fiqb6',
  e2e: {
    baseUrl: 'https://next.privat24.ua',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

