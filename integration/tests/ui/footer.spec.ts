import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../../page-Objects/homePage';
import {Footer } from '../../page-Objects/footer';
import { Helpers } from '../../utils/helper';


let homePage: HomePage;
let footerPage: Footer;
let helper: Helpers;

test.describe('Footer Content', () => {
   
  test.beforeEach(async({page}) => {
   //Create helper object
   helper = new Helpers();
   
   //Create homePage Object
   homePage = new HomePage(page);

   //Create footer object
   footerPage = new Footer(page);
  
   //Launch bessemer website
   await homePage.goto();

  })

  test('validate Footer is visible on homepage', async ({page}) => {
    
    await expect(footerPage.footer).toBeVisible();
  });

  test('validate Footer content on homepage', async ({page}) => {
    const year = helper.getCurrentYear().toString();
    const footerContent = await footerPage.footerContainer.textContent();
    const footerContentArr = footerContent.match(/[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g);

    const firstItem = footerContentArr[1] + ' ' + footerContentArr[2] + '. ' + footerContentArr[3] + ' ' + footerContentArr[4] + ' ' +footerContentArr[1] + ' ' + footerContentArr[5];

    //console.log(firstItem);
    expect(footerContentArr[0]).toEqual(year);
    expect(firstItem).toEqual('Bessemer Trust. All rights Bessemer reserved');
    expect(footerContentArr[6] + ' ' + footerContentArr[7] ).toEqual('Privacy Policy')

  });

  test('validate Privacy Policy link click navigates to correct page', async ({page}) => {
     
     //Click privacy policy
     footerPage.privacyPolicyFromFooter();
     
     //wait for page load
     await page.waitForLoadState();
     await expect(page).toHaveURL('https://www.bessemertrust.com/notices');

  });

  test('validate Terms click navigates to correct page', async ({page}) => {
    
    //Click privacy policy
    footerPage.termsFromFooter();
    
    //wait for page load
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://www.bessemertrust.com/terms');

 });

 test('validate Accessibilty click navigates to correct page', async ({page}) => {
    
    //Click privacy policy
    footerPage.accessibilityFromFooter();

    //wait for page load
    await page.waitForLoadState();
    await expect(page).toHaveURL('https://www.bessemertrust.com/accessibility');

 });

 test('validate Member FDIC link click navigates to correct page', async ({context}) => {
       
    const page = await context.newPage();
    
    const [newPage] = await Promise.all([

       //click on the privacy link 
       context.waitForEvent('page'),
       footerPage.memberFDICFromFooter()
    ]);
    

    //wait for page load
    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL('https://www.fdic.gov/');
 

 });

})
