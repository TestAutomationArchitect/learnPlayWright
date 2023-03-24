import {BasePage} from './base';

export class Footer extends BasePage{

    //locators
    readonly footer = this.page.locator('[class="footer"]');
    readonly footerContainer = this.page.locator('[class*="bessemer-footer"]');
    readonly privacyPolicy = this.page.getByRole('link', { name: 'Privacy Policy' });
    readonly terms = this.page.getByRole('link', { name: 'Terms' });
    readonly accessibilty = this.page.getByRole('link', { name: 'Accessibility' });
    readonly memberFDIC = this.page.getByRole('link', { name: 'Member FDIC' });

   async goto(): Promise<void> {
      await this.page.goto('https://bessemertrust.com');
   }
   
   async privacyPolicyFromFooter(){
        this.privacyPolicy.click();
    }

    async termsFromFooter(){
        this.terms.click();
    }

    async accessibilityFromFooter(){
        this.accessibilty.click();
    }

    async memberFDICFromFooter(){
        this.memberFDIC.click();
    }


   }