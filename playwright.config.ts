import { defineConfig, devices } from '@playwright/test';
import { env } from './e2e/env';

export default defineConfig({
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  forbidOnly: !!env.CI,
  retries: env.CI ? 2 : 0,
  workers: env.CI ? 1 : undefined,
  reporter: env.CI ? [['blob'], ['list'], ['github']] : [['html'], ['list']],
  use: {
    actionTimeout: 0,
    baseURL: env.CI ? env.PW_BASE_URL : 'http://localhost:5173',
    trace: 'on-first-retry',
    headless: !!env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
  outputDir: 'test-results/',
  webServer: env.CI
    ? undefined
    : {
        command: 'vite dev',
        port: 5173,
        reuseExistingServer: true,
      },
});
