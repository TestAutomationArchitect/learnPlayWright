import { BasePage } from './base';
import dotenv from 'dotenv';

dotenv.config();

const {BASE_UI_URI, USERNAME, PASSWORD} = process.env

export class Login extends BasePage{

    //locators
    readonly userName = this.page.locator('#username');
    readonly userPwd = this.page.locator('#password');
    readonly loginButton = this.page.getByRole('button', { name: 'LOGIN' });
    readonly errorMessage = this.page.getByText('Invalid login information, please try again.');

    
 async login(ua=USERNAME, pwd=PASSWORD){
       
         //perform login
        await this.userName.fill(ua);
        await this.userPwd.fill(pwd);
        await this.loginButton.click();
    
 }
 

}