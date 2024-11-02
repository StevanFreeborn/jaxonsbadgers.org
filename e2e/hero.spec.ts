import { test, expect } from '@playwright/test';

test.describe('Hero', () => {
  test('it should have correct title', async ({ page }) => {
    await page.goto('/');

    const title = await page.title();
  
    expect(title).toMatch(/home - jaxon's badgers/i);
  });

  test('it should have a main heading', async ({ page }) => {
    await page.goto('/');
  
    const mainHeading = page.locator('h1');
  
    await expect(mainHeading).toHaveText(/jaxon's badgers/i);
  })

  test('it should have the mission statement', async ({ page }) => {
    await page.goto('/');

    const missionStatement = 'Our mission is to provide an inclusive environment for children and adults with disabilities to be active, build relationships, and improve their quality of life through adaptive fitness programming.';

    await expect(page.getByText(new RegExp(missionStatement, 'i'))).toBeVisible();
  })

  test('it should have a donate link', async ({ page }) => {
    await page.goto('/');

    const donateLink = page.getByRole('link', { name: /donate/i });

    await expect(donateLink).toBeVisible();
  })

  test('it should have become a sponsor link', async ({ page }) => {
    await page.goto('/');

    const sponsorLink = page.getByRole('link', { name: /become a sponsor/i });

    await expect(sponsorLink).toBeVisible();
  })
});

