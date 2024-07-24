import project from 'package.json';

const happy = () => {
  describe('Happy Path', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('load the app', () => {
      cy.contains(project.name);
    });

    it('test button', () => {
      cy.get('#test-button').click();
      cy.get('#test-data').contains('2');
      cy.get('#test-button').click();
      cy.get('#test-data').contains('3');
    });
  });
};

export default happy;
