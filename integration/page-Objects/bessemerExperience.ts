import {BasePage} from './base';

export class BessExperience extends BasePage{

    //locators
    readonly relationshipsThatLast = this.page.getByRole('link', { name: 'Relationships that last' });
    readonly alwaysOnYourSide = this.page.getByRole('link', { name: 'Always on your side' });
    readonly deepFamilyOfficeExpertise = this.page.getByRole('link', { name: 'Deep family office expertise' });
    readonly aoysContent = this.page.locator('[class="eyebrow"]');

   async goto(): Promise<void> {
      await this.page.goto('https://bessemertrust.com');
   }
   

   }