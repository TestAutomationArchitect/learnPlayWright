import { test, expect} from '@playwright/test';
import { HomePage } from '../../page-Objects/homePage';
import { Footer } from '../../page-Objects/footer';

let homePage: HomePage;
let footer: Footer;

test.describe('Bessemer Home Page', () => {
   
  test.beforeEach(async({page}) => {
   //Create homePage Object
   homePage = new HomePage(page);

   //footer object
   footer = new Footer(page);

   //Launch bessemer website
   await homePage.goto();

  })

  test('validate Bessemer homepage layout', async ({page}) => {

    await test.step('Check for bessemer logo on home page', async() =>{
      await expect(homePage.bessLogo).toBeVisible();

    });

  await test.step('Check client login button is displayed', async() =>{
        await expect(homePage.clientLogin).toBeVisible();

  });

  await test.step('validate search feature', async () => {

    await expect(homePage.searchTextBox).toBeVisible();
    
    //Perfrom serach and validate result
    await homePage.getSearch();
    await expect(homePage.searchResult).toBeVisible();
    await expect(homePage.searchResultCount).toBeVisible();
    const searchResults =  (await homePage.searchResultCount.allTextContents()).toString();

    expect(searchResults).toContain('Showing');
  });

  await test.step('Check footer is displyed on home page', async() => {
    await expect(footer.footerContainer).toBeVisible();

  });

  await test.step('Check sidebar links are displayed on home page', async() => {
    await expect(homePage.bessemerExperience).toBeVisible();
    await expect(homePage.whatWeDoForYou).toBeVisible();
    await expect(homePage.whatMakesUsDifferent).toBeVisible();
    await expect(homePage.insights).toBeVisible();
    await expect(homePage.ourOffices).toBeVisible();

  })

});


})