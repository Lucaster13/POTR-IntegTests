import { defineConfig } from "cypress";
import { CYPRESS_PORT } from "./src/constants";

export default defineConfig({
    component: {
        devServer: {
            framework: "create-react-app",
            bundler: "webpack",
        },
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        port: CYPRESS_PORT,
        supportFile: "./src/cypress/support/e2e.ts",
        specPattern: "./src/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    },
});
