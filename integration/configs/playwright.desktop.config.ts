import {devices, PlaywrightTestConfig} from '@playwright/test';
import baseConfig from './playwright.config';

const config: PlaywrightTestConfig ={
    ...baseConfig,
    projects: [
        {
            name: 'chromium',
            use: {
              ...devices['Desktop Chrome'],
              launchOptions: {
                args: ['--use-gl=egl', '--no-sandbox'],
                //slowMo: 500,
              },
            },
            testMatch: /(integration\tests\ui).*(spec)\.(ts)/,
        },
        //{
        //   name: 'firefox',
        //    use: {
        //      ...devices['Desktop Firefox'],
        //    },
        //  },
      
         //{
           // name: 'webkit',
            //use: {
              //...devices['Desktop Safari'],
            //},
          //},
      
    ]

};

export default config;