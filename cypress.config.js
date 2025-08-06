const { defineConfig } = require("Cypress");

// module.exports = defineConfig({
//   projectId: '6fiqb6',
//   e2e: {
//     baseUrl: 'https://next.privat24.ua',
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome" || browser.family === "chromium") {
          launchOptions.args.push("--disable-features=PasswordManagerEnabled,AutofillServerCommunication");
          launchOptions.args.push("--disable-save-password-bubble");
        }
        return launchOptions;
      });

    },

  },
});