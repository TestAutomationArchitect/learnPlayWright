import {BasePage} from './base';

export class insightsEducation extends BasePage{

    //locators
    readonly insights = this.page.getByRole('link', { name: 'Insights' });
    readonly finacialEducation = this.page.getByRole('navigation', { name: 'primary' }).getByRole('link', { name: 'Financial Education' })
    //.getByRole('link', { name: 'Finacial Education' });
    
   async goto(): Promise<void> {
      await this.page.goto('https://bessemertrust.com');
   }
   

   }