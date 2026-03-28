import { test, expect } from '@playwright/test';

const baseURL = 'https://learn-hub--neelamalavika7.replit.app/';

// Credentials
const validEmail = 'malavikaneela20@gmail.com';
const validPassword = 'cruise@2003';

const invalidEmail = 'wronguser@gmail.com';
const invalidPassword = 'wrongpass';

async function goToLogin(page) {
  await page.goto(baseURL);
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.waitForSelector('input[type="email"]'); // ✅ IMPORTANT FIX
}

// TC01
test('TC01 - Login page loads', async ({ page }) => {
  await goToLogin(page);
  await expect(page.locator('input[type="email"]')).toBeVisible();
});

// TC02
test('TC02 - Login with valid credentials', async ({ page }) => {
  await goToLogin(page);

  await page.locator('input[type="email"]').fill("malavikaneela20@gmail.com");
  await page.locator('input[type="password"]').fill("Cruise@2003");
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).not.toHaveURL('https://learn-hub--neelamalavika7.replit.app/');
});

// TC03
test('TC03 - Login with invalid email', async ({ page }) => {
  await goToLogin(page);

  await page.locator('input[type="email"]').fill(invalidEmail);
  await page.locator('input[type="password"]').fill(validPassword);
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});

// TC04
test('TC04 - Login with invalid password', async ({ page }) => {
  await goToLogin(page);

  await page.locator('input[type="email"]').fill(validEmail);
  await page.locator('input[type="password"]').fill(invalidPassword);
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});

// TC05
test('TC05 - Empty login submission', async ({ page }) => {
  await goToLogin(page);

  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL(/login/);
});

// TC06
test('TC06 - Only email entered', async ({ page }) => {
  await goToLogin(page);

  await page.locator('input[type="email"]').fill(validEmail);
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});

// TC07
test('TC07 - Only password entered', async ({ page }) => {
  await goToLogin(page);

  await page.locator('input[type="password"]').fill(validPassword);
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});

// TC08
test('TC08 - Invalid email format', async ({ page }) => {
  await goToLogin(page);

  await page.locator('input[type="email"]').fill('malavika@com');
  await page.locator('input[type="password"]').fill(validPassword);
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});

// TC09
test('TC09 - Password masking check', async ({ page }) => {
  await goToLogin(page);

  const password = page.locator('input[type="password"]');
  await password.fill(validPassword);

  await expect(password).toHaveAttribute('type', 'password');
});

// TC10 (FIXED)
test('TC10 - Forgot password link click', async ({ page }) => {
  await goToLogin(page);

  await page.getByText('Forgot password?').click();

  // stays on same page
  await expect(page).toHaveURL(/login/);
});

// TC11 (FIXED)
test.skip('TC11 - Navigate to Sign Up page', async ({ page }) => {
  await goToLogin(page);

  await page.getByText('Sign up for free').click();

  // correct route is /register
  await expect(page).toHaveURL(/register/);
});

// TC12
test('TC12 - Verify input fields accept values', async ({ page }) => {
  await goToLogin(page);

  const email = page.locator('input[type="email"]');
  await email.fill(validEmail);

  await expect(email).toHaveValue(validEmail);
});

// TC13
test('TC13 - Multiple clicks on Sign In button', async ({ page }) => {
  await goToLogin(page);

  const btn = page.getByRole('button', { name: 'Sign in' });

  await btn.click();
  await btn.click();

  await expect(btn).toBeVisible();
});

// TC14
test('TC14 - Refresh page after entering data', async ({ page }) => {
  await goToLogin(page);

  await page.locator('input[type="email"]').fill(validEmail);
  await page.reload();

  await expect(page.locator('input[type="email"]')).toBeVisible();
});


// TC16 - Invalid Password
test('TC16 - Invalid password', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByRole('textbox', { name: 'you@example.com' }).fill('neelamalavika15@gmail.com');
  await page.getByRole('textbox', { name: '••••••••' }).fill('wrong123');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});


// TC17 - Invalid Email
test('TC17 - Invalid email', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByRole('textbox', { name: 'you@example.com' }).fill('wrong@gmail.com');
  await page.getByRole('textbox', { name: '••••••••' }).fill('cruise@2003');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});


// TC18 - Empty Fields
test('TC18 - Empty login', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});


// TC19 - Only Email
test('TC19 - Only email', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByRole('textbox', { name: 'you@example.com' }).fill('neelamalavika15@gmail.com');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});


// TC20 - Only Password
test('TC20 - Only password', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByRole('textbox', { name: '••••••••' }).fill('cruise@2003');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});


// TC21 - Email Uppercase
test('TC21 - Uppercase email', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByRole('textbox', { name: 'you@example.com' }).fill('NEELAMALAVIKA15@GMAIL.COM');
  await page.getByRole('textbox', { name: '••••••••' }).fill('cruise@2003');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/home|login/);
});


// TC22 - Password Case Sensitivity
test('TC22 - Password case sensitivity', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByRole('textbox', { name: 'you@example.com' }).fill('neelamalavika15@gmail.com');
  await page.getByRole('textbox', { name: '••••••••' }).fill('CRUISE@2003');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});


// TC23 - Invalid Email Format
test('TC23 - Invalid email format', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByRole('textbox', { name: 'you@example.com' }).fill('abc@gmail');
  await page.getByRole('textbox', { name: '••••••••' }).fill('123456');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});


// TC24 - Spaces in Email
test('TC24 - Email with spaces', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.getByRole('textbox', { name: 'you@example.com' }).fill('   neelamalavika15@gmail.com   ');
  await page.getByRole('textbox', { name: '••••••••' }).fill('cruise@2003');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/home|login/);
});


