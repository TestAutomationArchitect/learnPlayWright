import {BasePage} from './base';

export class whatMakesUsDiff extends BasePage{

    //locators
    readonly peaceOfMind = this.page.getByRole('link', { name: 'Peace of mind' });
    readonly keyFacts = this.page.getByRole('link', { name: 'Key Facts' });
    readonly ourLeaders = this.page.getByRole('link', { name: 'Our leaders' });
    
   async goto(): Promise<void> {
      await this.page.goto('https://bessemertrust.com');
   }
   

   }