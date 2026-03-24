import { test, expect } from '@playwright/test';

const baseURL = 'https://learn-hub--neelamalavika7.replit.app/';

async function goToContact(page) {
  await page.goto(baseURL);
  await page.getByRole('link', { name: 'Contact' }).click();
}

// TC01 - Contact page loads
test('TC01 - Contact page loads', async ({ page }) => {
  await goToContact(page);
  await expect(page.locator('text=Get in touch')).toBeVisible();
});

// TC02 - Valid form submission
test('TC02 - Valid contact form', async ({ page }) => {
  await goToContact(page);

  await page.locator('input').nth(0).fill('Malavika');  // First Name
  await page.locator('input').nth(1).fill('Neela');     // Last Name
  await page.locator('input').nth(2).fill('malavikaneela20@gmail.com'); // Email
  await page.locator('textarea').fill('I need help with course details'); // Message

  await page.getByRole('button').click();
});

// TC03 - Invalid email
test('TC03 - Invalid email format', async ({ page }) => {
  await goToContact(page);

  await page.locator('input').nth(0).fill('Malavika');
  await page.locator('input').nth(1).fill('Neela');
  await page.locator('input').nth(2).fill('malavika@com');
  await page.locator('textarea').fill('Test message');

  await page.getByRole('button').click();
});

// TC04 - Empty form
test('TC04 - Empty submission', async ({ page }) => {
  await goToContact(page);
  await page.getByRole('button').click();
});

// TC05 - Only first name
test('TC05 - Only first name', async ({ page }) => {
  await goToContact(page);

  await page.locator('input').nth(0).fill('Malavika');

  await page.getByRole('button').click();
});

// TC06 - Only email
test('TC06 - Only email', async ({ page }) => {
  await goToContact(page);

  await page.locator('input').nth(2).fill('malavikaneela20@gmail.com');

  await page.getByRole('button').click();
});

// TC07 - Only message
test('TC07 - Only message', async ({ page }) => {
  await goToContact(page);

  await page.locator('textarea').fill('Hello');

  await page.getByRole('button').click();
});

// TC08 - Long message
test('TC08 - Long message input', async ({ page }) => {
  await goToContact(page);

  await page.locator('input').nth(0).fill('Malavika');
  await page.locator('input').nth(1).fill('Neela');
  await page.locator('input').nth(2).fill('malavikaneela20@gmail.com');
  await page.locator('textarea').fill('This is a long message for testing purpose. '.repeat(10));

  await page.getByRole('button').click();
});

// TC09 - Verify inputs
test('TC09 - Verify input values', async ({ page }) => {
  await goToContact(page);

  await page.locator('input').nth(0).fill('Malavika');
  await page.locator('input').nth(2).fill('malavikaneela20@gmail.com');

  await expect(page.locator('input').nth(0)).toHaveValue('Malavika');
  await expect(page.locator('input').nth(2)).toHaveValue('malavikaneela20@gmail.com');
});

// TC10 - Special characters in name
test('TC10 - Special characters in name', async ({ page }) => {
  await goToContact(page);

  await page.locator('input').nth(0).fill('@Malavika#');
  await page.locator('input').nth(1).fill('Neela');
  await page.locator('input').nth(2).fill('malavikaneela20@gmail.com');
  await page.locator('textarea').fill('Testing special characters');

  await page.getByRole('button').click();
});

// TC11 - Multiple clicks submit
test('TC11 - Multiple clicks', async ({ page }) => {
  await goToContact(page);

  await page.getByRole('button').click();
  await page.getByRole('button').click();
});

// TC12 - Navigate back home
test('TC12 - Navigate home', async ({ page }) => {
  await goToContact(page);

  await page.locator('a[href="/"]').first().click();
  await expect(page).toHaveURL(baseURL);
});