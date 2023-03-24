import {test, expect} from '@playwright/test';
import {Login} from '../../page-Objects/clientLogin';
import dotenv from 'dotenv';
import { HomePage } from '../../page-Objects/homePage';

dotenv.config();

const {BASE_UI_URL, USERNAME} = process.env;
const url = `${BASE_UI_URL}`;

let loginPage: Login;
let homePage: HomePage;

test.describe('Login tests', () => {
    test.beforeEach(async ({page}) => {
        //create homePage
        homePage = new HomePage(page);

        //access bessemer home page
        await homePage.goto();

    })

    test.skip('Validate successfull login', async({context}) => {
        
        const newTab = await test.step("get to login page", async() =>{
        return await homePage.getLoginPage(); 
        });
        
        await test.step("Perform login", async() => {
        
         //create loginPage
         const loginPage = new Login(newTab);

         //override env variables
         const password = 'BlankBlank';

         //##perform login
         await loginPage.login(USERNAME, password);

         //validate login result    
         await expect(loginPage.errorMessage).toBeVisible();
                      
    })
})

})
