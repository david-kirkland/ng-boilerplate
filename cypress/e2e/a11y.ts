import { routes } from '../../src/app/app.routes';

const a11y = () => {
  if (routes.length) {
    describe('A11y', () =>
      routes.map((route: { path?: string | undefined }) => {
        if (!route.path || route.path === '**') return;

        it(route.path, () => {
          // @ts-expect-error - if (!route.path) return;
          cy.visit(route.path);
          cy.wait(1000);
          cy.injectAxe();
          cy.checkA11y();
        });
      }));
  }
};

export default a11y;
