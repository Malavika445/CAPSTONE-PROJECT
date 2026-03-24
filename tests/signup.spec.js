import { test, expect } from '@playwright/test';

const baseURL = 'https://learn-hub--neelamalavika7.replit.app/';

async function goToSignup(page) {
  await page.goto(baseURL);
  await page.getByRole('link', { name: 'Sign up' }).click();
}

// TC01 - Page Load
test('TC01 - Signup page loads', async ({ page }) => {
  await goToSignup(page);
  await expect(page.locator('text=Create an account')).toBeVisible();
});

// TC02 - Valid Signup
test('TC02 - Valid signup', async ({ page }) => {
  await goToSignup(page);

  await page.locator('input').nth(0).fill('Malavika');
  await page.locator('input').nth(1).fill('malavikaneela20@gmail.com');
  await page.locator('input').nth(2).fill('cruise@2003');

  await page.getByRole('button', { name: 'Sign up' }).click();
});

// TC03 - Invalid Email
test('TC03 - Invalid email', async ({ page }) => {
  await goToSignup(page);

  await page.locator('input').nth(0).fill('Malavika');
  await page.locator('input').nth(1).fill('malavika@com');
  await page.locator('input').nth(2).fill('cruise@2003');

  await page.getByRole('button', { name: 'Sign up' }).click();
});

// TC04 - Empty Form
test('TC04 - Empty form', async ({ page }) => {
  await goToSignup(page);
  await page.getByRole('button', { name: 'Sign up' }).click();
});

// TC05 - Only Name
test('TC05 - Only name', async ({ page }) => {
  await goToSignup(page);

  await page.locator('input').nth(0).fill('Malavika');

  await page.getByRole('button', { name: 'Sign up' }).click();
});

// TC06 - Only Email
test('TC06 - Only email', async ({ page }) => {
  await goToSignup(page);

  await page.locator('input').nth(1).fill('malavikaneela20@gmail.com');

  await page.getByRole('button', { name: 'Sign up' }).click();
});

// TC07 - Only Password
test('TC07 - Only password', async ({ page }) => {
  await goToSignup(page);

  await page.locator('input').nth(2).fill('cruise@2003');

  await page.getByRole('button', { name: 'Sign up' }).click();
});

// TC08 - Weak Password
test('TC08 - Weak password', async ({ page }) => {
  await goToSignup(page);

  await page.locator('input').nth(0).fill('Malavika');
  await page.locator('input').nth(1).fill('malavikaneela20@gmail.com');
  await page.locator('input').nth(2).fill('123');

  await page.getByRole('button', { name: 'Sign up' }).click();
});

// TC09 - Verify Input Values
test('TC09 - Verify inputs', async ({ page }) => {
  await goToSignup(page);

  await page.locator('input').nth(0).fill('Malavika');
  await page.locator('input').nth(1).fill('malavikaneela20@gmail.com');

  await expect(page.locator('input').nth(0)).toHaveValue('Malavika');
  await expect(page.locator('input').nth(1)).toHaveValue('malavikaneela20@gmail.com');
});

// TC10 - Password Masking
test('TC10 - Password hidden', async ({ page }) => {
  await goToSignup(page);

  const pass = page.locator('input').nth(2);
  await pass.fill('cruise@2003');

  await expect(pass).toHaveAttribute('type', 'password');
});

// TC11 - Multiple Click
test('TC11 - Multiple click signup', async ({ page }) => {
  await goToSignup(page);

  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('button', { name: 'Sign up' }).click();
});

// TC12 - Navigate Home
test('TC12 - Back to home', async ({ page }) => {
  await goToSignup(page);

  await page.locator('a[href="/"]').first().click();
  await expect(page).toHaveURL(baseURL);
});

// TC13 - Missing Email
test('TC13 - Missing email', async ({ page }) => {
  await goToSignup(page);

  await page.locator('input').nth(0).fill('Malavika');
  await page.locator('input').nth(2).fill('cruise@2003');

  await page.getByRole('button', { name: 'Sign up' }).click();
});

// TC14 - Missing Password
test('TC14 - Missing password', async ({ page }) => {
  await goToSignup(page);

  await page.locator('input').nth(0).fill('Malavika');
  await page.locator('input').nth(1).fill('malavikaneela20@gmail.com');

  await page.getByRole('button', { name: 'Sign up' }).click();
});

// TC15 - Missing Name
test('TC15 - Missing name', async ({ page }) => {
  await goToSignup(page);

  await page.locator('input').nth(1).fill('malavikaneela20@gmail.com');
  await page.locator('input').nth(2).fill('cruise@2003');

  await page.getByRole('button', { name: 'Sign up' }).click();
});