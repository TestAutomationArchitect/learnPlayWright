import {devices, PlaywrightTestConfig} from '@playwright/test';
import baseConfig from './playwright.config';

const config: PlaywrightTestConfig ={
    ...baseConfig,
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      'Accept': 'application/vnd.github.v3+json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      'Authorization': `token ${process.env.API_TOKEN}`,
    },
  }
};

export default config;