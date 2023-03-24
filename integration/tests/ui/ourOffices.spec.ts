import { test, expect} from '@playwright/test';
import { HomePage } from '../../page-Objects/homePage';
import { ourOffices } from '../../page-Objects/ourOffices';
import { Helpers } from '../../utils/helper';

let helperPage: Helpers;
let homePage: HomePage;
let ourOfficesPage: ourOffices;

test.describe('Our Offices', () => {
   
  test.beforeEach(async({page}) => {
   //create Helper object
   helperPage = new Helpers();

   //Create homePage Object
   homePage = new HomePage(page);

   //Create ourOffices Object
   ourOfficesPage = new ourOffices(page);
  
   //Launch bessemer website
   await homePage.goto();

  })

  test('Validate Google map is displayed on the page', async ({page}) => {
   
    await homePage.getOurOffices();
    await expect(ourOfficesPage.googleMap).toBeVisible();

  });

  test('Validate an office location on Google map is displayed', async ({page}) => {

    //get a random no
    const index = helperPage.getRandomNumber(0,19);
   
    await homePage.getOurOffices();
    const officeName = await ourOfficesPage.officeName.nth(index).textContent()
    console.log(officeName);

    await expect(ourOfficesPage.getOfficeLocation(`${officeName}`)).toBeVisible();
    //await expect(ourOfficesPage.officeAddress.nth(index).textContent()).toContain(officeName);

  });

  
  test('Validate an office detail displayed when clicking on Google map location icon', async ({page}) => {

    //get a random no
    const index = helperPage.getRandomNumber(0,19);
   
    await homePage.getOurOffices();
    const officeName = await ourOfficesPage.officeName.nth(index).textContent()
    console.log(officeName);
    const name = officeName.toLowerCase();
    
    //get office url
    const url = `https://www.bessemertrust.com/offices/${name}-wealth-management`;

    //await ourOfficesPage.zoomInIcon.click();
    await ourOfficesPage.getOfficeLocation(`${officeName}`).click();
    

    //validate url and office title
    expect(page).toHaveURL(url)
    expect(await ourOfficesPage.officeTitle.textContent()).toContain(officeName);

  });

  test.skip('Validate office locations on Google map', async ({page}) => {

    //get a random no
    //const index = helperPage.getRandomNumber(0,19);
   
    await homePage.getOurOffices();
    const officeName = await ourOfficesPage.officeName.locator('li').count();
    console.log(officeName);

    //await expect(ourOfficesPage.getOfficeLocation(`${officeName}`)).toBeVisible();
    //await expect(ourOfficesPage.officeAddress.nth(index).textContent()).toContain(officeName);

  });

})