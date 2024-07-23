import angular from 'angular.json';
import jp from 'jsonpath';

const localization = () => {
  const numberOfSupportedLanguages = 13; // nothing added or removed accidentally
  const locales = jp.query(angular, '$..i18n.locales')[0];
  const getKeys = (object: object) => Object.keys(object).sort();
  let sourceLocaleKeys: string[];

  before(() => {
    const pathToFiles = (Object.values(locales)[0] as string).split('.');
    const pathToSourceLocale = pathToFiles[0] + '.' + pathToFiles[2];

    cy.readFile(pathToSourceLocale).then((data) => {
      sourceLocaleKeys = getKeys(data.translations);
    });
  });

  describe('Localization', () => {
    it(`${numberOfSupportedLanguages} languages supported`, () => {
      expect(getKeys(locales).length).to.eq(numberOfSupportedLanguages);
    });

    context('Translation Keys Match', () => {
      for (const [id, path] of Object.entries(locales)) {
        it(`${id}`, () =>
          cy.readFile(path as string).then((data) => {
            const localeKeys = getKeys(data.translations);
            expect(sourceLocaleKeys).to.deep.eq(localeKeys);
          }));
      }
    });
  });
};

export default localization;
