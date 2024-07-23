import { test } from './test';

describe('Full E2E Regression', () => {
  test.happyPath();
  test.a11y();
  test.localization();
});
