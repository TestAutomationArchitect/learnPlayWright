import {BasePage} from './base';
import dotenv from 'dotenv';

dotenv.config();
const {BASE_UI_URL, USERNAME, PASSWORD} = process.env;

export class HomePage extends BasePage{

    //locators
    readonly bessLogo = this.page.getByRole('link',  {name: 'Bessemer Trust'});
    readonly searchTextBox = this.page.getByPlaceholder('How can we help you?'); //getByTestId('#edit-search');
    readonly clientLogin = this.page.getByRole('link', { name: 'Client login' });
    readonly searchResult = this.page.locator('h1[class="search-results-title"]');
    readonly searchResultCount = this.page.locator('p[class="search-results-count"]');
    readonly searchButton = this.page.getByRole('button', {name: 'submit'});
    readonly bessemerExperience = this.page.getByRole('button', { name: 'The Bessemer experience' }); 
    readonly whatWeDoForYou = this.page.getByRole('button', { name: 'What we do for you' });
    readonly whatMakesUsDifferent = this.page.getByRole('button', { name: 'What makes us different' });
    readonly insights = this.page.getByRole('button', { name: 'Insights & Education' })
    readonly ourOffices = this.page.getByRole('button', { name: 'Our offices' });

    //Mobile locators
    readonly searchButtonMobile = this.page.locator('[class="bess-topbar-btn search"]');
    readonly menuButtonMobile = this.page.locator('[class="bess-topbar-btn menu"]');

   async goto(): Promise<void> {
      await this.page.goto('https://bessemertrust.com');
      //await this.page.goto(`${BASE_UI_URL}`);
   }
   
   async getSearch(){
        this.searchTextBox.click();
        this.searchTextBox.fill('Trust');  
        this.searchButton.click(); 
        
        const searchResults = this.searchResultCount.allTextContents();
    }

    async getSearchMobile(){
        this.searchButtonMobile.click();
        this.searchTextBox.click();
        this.searchTextBox.fill('Trust');  
        this.searchButton.click(); 
        
        const searchResults = this.searchResultCount.allTextContents();
    }

    async getBessExperience(){
        await this.bessemerExperience.click();
    }

    async getWhatWeDoForYou(){
        await this.whatWeDoForYou.click();
    }

    async getWhatMakesUsDifferent(){
        await this.whatMakesUsDifferent.click();
    }

    async getInsights(){
        await this.insights.click();
    }

    async getOurOffices(){
        await this.ourOffices.click();
    }

    async getLoginPage(){
        const [newTab] = await Promise.all([
            //click clientLogin button
            await this.clientLogin.click()
        ])

        return newTab;
        
    }

   }