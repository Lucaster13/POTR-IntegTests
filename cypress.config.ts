import { defineConfig } from "cypress";
import { CYPRESS_PORT, FRONTEND_PORT } from "./src/constants";

export default defineConfig({
    component: {
        devServer: {
            framework: "create-react-app",
            bundler: "webpack",
        },
    },
    e2e: {
        port: CYPRESS_PORT,
        supportFile: "./src/cypress/index.ts",
        baseUrl: `http://localhost:${FRONTEND_PORT}/#`,
        specPattern: "./src/tests/**/*.cy.{js,jsx,ts,tsx}",
        watchForFileChanges: false,
        defaultCommandTimeout: 30000,
        video: false,
    },
});
