import { test, expect} from '@playwright/test';
import { HomePage } from '../../page-Objects/homePage';
import { whatMakesUsDiff } from '../../page-Objects/whatMakesUsDifferent';

let homePage: HomePage;
let whatMakesUsDiffPage: whatMakesUsDiff;

test.describe('What Makes Us Different', () => {
   
  test.beforeEach(async({page}) => {
   //Create homePage Object
   homePage = new HomePage(page);

   //Create whatMakesUsDiff Object
   whatMakesUsDiffPage = new whatMakesUsDiff(page);
  
   //Launch bessemer website
   await homePage.goto();

  })

  test('Validate Peace of mind link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/what-makes-us-different/peace-of-mind';

    await homePage.getWhatMakesUsDifferent();
    await expect(whatMakesUsDiffPage.peaceOfMind).toBeVisible();

    await whatMakesUsDiffPage.peaceOfMind.click();
    await expect(page).toHaveURL(url)
  });

  test('Validate Key facts link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/what-makes-us-different/key-facts';

    await homePage.getWhatMakesUsDifferent();
    await expect(whatMakesUsDiffPage.keyFacts).toBeVisible();

    await whatMakesUsDiffPage.keyFacts.click();
    await expect(page).toHaveURL(url)
  });
  
  test('Validate Our leaders link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/what-makes-us-different/our-leaders';

    await homePage.getWhatMakesUsDifferent();
    await expect(whatMakesUsDiffPage.ourLeaders).toBeVisible();

    await whatMakesUsDiffPage.ourLeaders.click();
    await expect(page).toHaveURL(url)
  });


})