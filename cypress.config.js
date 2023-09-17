const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { log (message) {console.log(message); return null } });
        const cucumber = require('cypress-cucumber-preprocessor').default
        const browserify = require('@cypress/browserify-preprocessor');
        const options = {
          ...browserify.defaultOptions
          }
        on('file:preprocessor', cucumber(options));
    },
    specPattern: 'cypress/integration/normal-script/*.{js,jsx,ts,tsx,feature}',
    baseUrl: 'https://tiendamia.com.do'
  },
});
