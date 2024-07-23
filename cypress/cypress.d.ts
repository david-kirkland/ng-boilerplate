import { CyHttpMessages } from 'cypress/types/net-stubbing';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { mount } from 'cypress/angular';

declare global {
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface Chainable<Subject = any> {
      intercept__API_ENDPOINT_NAME__(
        callback: (req: CyHttpMessages.IncomingHttpRequest) => unknown
      ): Chainable<Subject>;

      mount: typeof mount;

      testFieldValidation(id: string, value?: string): void;
    }
  }
}
