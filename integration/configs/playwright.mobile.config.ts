import {devices, PlaywrightTestConfig} from '@playwright/test';
import baseConfig from './playwright.config';

const config: PlaywrightTestConfig ={
    ...baseConfig,
    projects: [
       // {
            //name: 'iPhone 12',
            //use:{
            //    ...devices['iPhone 12'],   
            //},
            //testMatch: /(all|mobile).*(spec)\.(ts)/,
       // }, 
        
        {
            name: 'Galaxy S9+',
            use:{
                ...devices['Galaxy S9+'],   
            },
            testMatch: /(all|mobile).*(spec)\.(ts)/,
        },  
    ],

};

export default config;