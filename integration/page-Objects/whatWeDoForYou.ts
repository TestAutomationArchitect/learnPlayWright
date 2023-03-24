import {BasePage} from './base';

export class whatWeDo extends BasePage{

    //locators
    readonly managingYourFinancialLife = this.page.getByRole('link', { name: 'Managing your financial life' });
    readonly wealthPlanning = this.page.getByRole('link', { name: 'Wealth planning' });
    readonly investmentManagement = this.page.getByRole('link', { name: 'Investment Management' });
    readonly familyOfficeServices = this.page.getByRole('link', { name: 'Family office services' });
    
   async goto(): Promise<void> {
      await this.page.goto('https://bessemertrust.com');
   }
   

   }