import { test, expect} from '@playwright/test';
import { HomePage } from '../../page-Objects/homePage';
import { BessExperience } from '../../page-Objects/bessemerExperience';

let homePage: HomePage;
let bessExp: BessExperience;

test.describe('Bessemer Experience', () => {
   
  test.beforeEach(async({page}) => {
   //Create homePage Object
   homePage = new HomePage(page);

   //Create Bessemer Experience Object
   bessExp = new BessExperience(page);
  
   //Launch bessemer website
   await homePage.goto();

  })

  test('Validate relationship that lasts link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/the-bessemer-experience/relationships-that-last';

    await homePage.getBessExperience();
    await expect(bessExp.relationshipsThatLast).toBeVisible();

    await bessExp.relationshipsThatLast.click();
    await expect(page).toHaveURL(url)
  });

  test('Validate always on your side link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/bessemer-experience/always-on-your-side';

    await homePage.getBessExperience();
    await expect(bessExp.alwaysOnYourSide).toBeVisible();

    await bessExp.alwaysOnYourSide.click();
    await expect(page).toHaveURL(url);

    //await expect(bessExp.aoysContent).toHaveText('Always on your side');
  });

  

  test('Validate Deep Family office expertise link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/bessemer-experience/deep-family-office-expertise';

    await homePage.getBessExperience();
    await expect(bessExp.deepFamilyOfficeExpertise).toBeVisible();

    await bessExp.deepFamilyOfficeExpertise.click();
    await expect(page).toHaveURL(url)
  });





})