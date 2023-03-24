import { test, expect} from '@playwright/test';
import { HomePage } from '../../page-Objects/homePage';
import { insightsEducation } from '../../page-Objects/insightsEducation';

let homePage: HomePage;
let insightsPage: insightsEducation;

test.describe('Insights & Education', () => {
   
  test.beforeEach(async({page}) => {
   //Create homePage Object
   homePage = new HomePage(page);

   //Create whatMakesUsDiff Object
   insightsPage = new insightsEducation(page);
  
   //Launch bessemer website
   await homePage.goto();

  })

  test('Validate insights link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/insights';
    
    await test.step('Check insights link', async() => {
                    await homePage.getInsights();
                    await expect(insightsPage.insights).toBeVisible();
    });

    await test.step('Check insights contents', async() => {
                     await insightsPage.insights.click();
                     await expect(page).toHaveURL(url)
    });

});


  test('Validate Financial education link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/financial-education';

   await test.step('Check Finalcial education link', async() => {
                   await homePage.getInsights();
                   await expect(insightsPage.finacialEducation).toBeVisible();
  });

  await test.step('Check fiancial education content', async() =>{
                  await insightsPage.finacialEducation.click();
                  await expect(page).toHaveURL(url);
  });

  });

})