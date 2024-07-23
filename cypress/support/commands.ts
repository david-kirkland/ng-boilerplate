// https://on.cypress.io/custom-commands

import { CyHttpMessages } from '../../node_modules/cypress/types/net-stubbing';
import 'cypress-real-events';

Cypress.Commands.add(
  'intercept__API_ENDPOINT_NAME__',
  (callback: (req: CyHttpMessages.IncomingHttpRequest) => unknown) =>
    cy
      .intercept('POST', '/path/to/api/endpoint', (req) => callback(req))
      .as('name-this-alias-here')
);

Cypress.Commands.add('testFieldValidation', (id: string, value?: string) => {
  cy.injectAxe();

  if (value) {
    cy.get(`#${id}`).type(value).blur();
  } else {
    cy.get(`#${id}`).focus().blur();
  }

  // test UI here
  // cy.get(`#errors-${id}`).should('be.visible');
  // cy.get('button[type="submit"]').should('be.disabled');

  cy.checkA11y(); // when errors are displayed
});
