import { test, expect} from '@playwright/test';
import { HomePage } from '../../page-Objects/homePage';

let homePage: HomePage;

test.describe('Bessemer Home Page', () => {
   
  test.beforeEach(async({page}) => {
   //Create homePage Object
   homePage = new HomePage(page);
  
   //Launch bessemer website
   await homePage.goto();

  })

  test('validate Bessemer homepage layout', async ({page}) => {
    await expect(homePage.bessLogo).toBeVisible();
  });

  test('validate search feature', async ({page}) => {
    await expect(homePage.searchButtonMobile).toBeVisible();
    
    //Perfrom serach and validate result
     await homePage.getSearchMobile();
     await expect(homePage.searchResult).toBeVisible();
     await expect(homePage.searchResultCount).toBeVisible();
     const searchResults =  (await homePage.searchResultCount.allTextContents()).toString();
 
     expect(searchResults).toContain('Showing');
  });

})