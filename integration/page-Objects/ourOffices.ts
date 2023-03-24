import {BasePage} from './base';

export class ourOffices extends BasePage{

    //locators
    readonly googleMap = this.page.locator('[class*="view--our-offices-google-maps"]');
    readonly officeLocationMap = this.page.locator ('ul[class="offices-with-gmap"]');
    readonly officeAddress = this.page.locator('li[class="row--office"]');
    readonly officeName = this.page.locator('span[class="field-content"]>a');
    readonly officeTitle = this.page.locator('div[class="office__node-title"]');
    readonly zoomInIcon = this.page.getByRole('button', { name: 'Zoom in' });
    
    //('li[class="row--office"]');

   async goto(): Promise<void> {
      await this.page.goto('https://bessemertrust.com');
   };

   public getOfficeLocation(location: string){
    return this.page.getByRole('button',{name: `${location}`});

   };
   

   }