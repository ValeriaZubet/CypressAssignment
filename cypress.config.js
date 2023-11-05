const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 20000,
    baseUrl: "https://assignment--lennar.netlify.app/",
    modifyObstructiveCode: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    retries: {
      runMode: 1,
      openMode: 1,
    },
    setupNodeEvents(on, config) {},
  },
});
