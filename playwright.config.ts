import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000,
  testDir: './tests',
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['allure-playwright'],
    ['dot'],
    ['list']
  ], 
  
  use: {
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'retain-on-failure',
    //headless: false, 
    viewport: { width: 1280, height: 720 }, // Set default viewport size for consistency 
    ignoreHTTPSErrors: true, // Ignore SSL errors if necessary 
    permissions: ['geolocation'], // Set necessary permissions for geolocation-based tests 
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /*    {
         name: 'firefox',
         use: { ...devices['Desktop Firefox'] },
       },
   
       {
         name: 'webkit',
         use: { ...devices['Desktop Safari'] },
       },*/

  ],
});
