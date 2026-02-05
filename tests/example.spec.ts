// Learning Git and Playwright step by step
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

async function goToGetStartedPage(page) {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
}

test('navigating to writing tests page', async ({ page }) => {
  await goToGetStartedPage(page);

  // Click the 'Write tests' link at the bottom of the page.
  await page.getByRole('link', { name: 'Write tests using web-first assertions, fixtures and locators' }).click();
  
  //Expects page to have a heading with the name of Writing Tests.
  await expect(page.getByRole('heading', { name: 'Writing Tests' })).toBeVisible();
});