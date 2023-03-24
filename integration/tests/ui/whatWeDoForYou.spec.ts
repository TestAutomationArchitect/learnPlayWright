import { test, expect} from '@playwright/test';
import { HomePage } from '../../page-Objects/homePage';
import { whatWeDo } from '../../page-Objects/whatWeDoForYou';

let homePage: HomePage;
let whatWeDoPage: whatWeDo;

test.describe('What We Do For You', () => {
   
  test.beforeEach(async({page}) => {
   //Create homePage Object
   homePage = new HomePage(page);

   //Create whatWeDo Object
   whatWeDoPage = new whatWeDo(page);
  
   //Launch bessemer website
   await homePage.goto();

  })

  test('Validate managing your financial life link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/what-we-do-for-you/managing-your-financial-life';

    await homePage.getWhatWeDoForYou();
    await expect(whatWeDoPage.managingYourFinancialLife).toBeVisible();

    await whatWeDoPage.managingYourFinancialLife.click();
    await expect(page).toHaveURL(url)
  });

  test('Validate Wealth planning link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/what-we-do-you/wealth-planning';

    await homePage.getWhatWeDoForYou();
    await expect(whatWeDoPage.wealthPlanning).toBeVisible();

    await whatWeDoPage.wealthPlanning.click();
    await expect(page).toHaveURL(url);

  });

  
  test('Validate investment management link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/what-we-do-you/investment-management';

    await homePage.getWhatWeDoForYou();
    await expect(whatWeDoPage.investmentManagement).toBeVisible();

    await whatWeDoPage.investmentManagement.click();
    await expect(page).toHaveURL(url)
  });


  test('Validate Family office services link and contents', async ({page}) => {
   
    const url = 'https://www.bessemertrust.com/what-we-do-you/family-office-services';

    await homePage.getWhatWeDoForYou();
    await expect(whatWeDoPage.familyOfficeServices).toBeVisible();

    await whatWeDoPage.familyOfficeServices.click();
    await expect(page).toHaveURL(url)
  });


})