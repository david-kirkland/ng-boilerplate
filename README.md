# ng-boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Getting Started

```
git clone https://github.com/david-kirkland/ng-boilerplate.git
cd ng-boilerplate
git remote set-url origin __YOUR_NEW_PROJECT_REPO__.git
```

Rename the local repo directory from `ng-boilerplate` to your project name.

Replace all instances of `ng-boilerplate` in code with your project name.

Delete or replace the `Getting Started` section within this README.md

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

`ng generate component component-name` generates a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

`ng build` builds the project.

`npm run build` builds the project with localization.

The build artifacts will be stored in the `dist/` directory.

## Running Tests

[Cypress](https://www.cypress.io) is the test runner.

#### Cypress without Code Coverage

Start the dev server first with `ng serve` (only needed for e2e tests).

`npm run cypress:open` opens the Cypress application.

Results will be shown in the Cypress application.

#### Terminal without Code Coverage

`npm run cypress:run:e2e` runs e2e tests in your terminal.

`npm run cypress:run:component` runs component tests in your terminal.

Results will be shown in the terminal.

#### Terminal with Code Coverage

`npm run test` runs both end-to-end and component tests in the terminal.

Individual results will be shown in the terminal and a cumulative coverage report will be generated at `coverage/index.html`.

#### Check Code Coverage

`npm run test:coverage` checks test coverage from the last test suite run.

For combined end-to-end and component test coverage first run `npm run test`.

#### Lint Code

`npm run lint` scans for code quality errors.

## Localization

`npm run i18n` generates a localization file at `src/locale/messages.json`. This file must be manually translated into the other `src/locale.messages.**.json` files.

## Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
