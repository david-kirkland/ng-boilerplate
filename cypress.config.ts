import { defineConfig } from 'cypress';
import registerCodeCoverageTasks from '@cypress/code-coverage/task';
import coverageWebpack from './cypress/coverage.webpack';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/regression.cy.ts',
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      return config;
    },
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      webpackConfig: coverageWebpack,
    },
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      return config;
    },
    specPattern: './cypress/component/**/*.cy.ts',
  },
});
