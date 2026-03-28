import { test, expect } from '@playwright/test';

// TC01 - Fields visible
test('TC01 - Contact fields visible', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  await expect(page.getByRole('textbox', { name: 'Jane', exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Doe' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'jane@example.com' })).toBeVisible();
});


// TC02 - Fill valid form
test('TC02 - Fill valid details', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });
  const last = page.getByRole('textbox', { name: 'Doe' });
  const email = page.getByRole('textbox', { name: 'jane@example.com' });

  await first.fill('malavika');
  await last.fill('neela');
  await email.fill('ghwjjnaj@gmail.com');

  await expect(first).toHaveValue('malavika');
  await expect(last).toHaveValue('neela');
  await expect(email).toHaveValue('ghwjjnaj@gmail.com');
});


// TC03 - Empty form
test('TC03 - Empty form', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  await expect(page.getByRole('textbox', { name: 'Jane', exact: true })).toBeVisible();
});


// TC04 - Invalid email
test('TC04 - Invalid email format', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const email = page.getByRole('textbox', { name: 'jane@example.com' });

  await email.fill('malavika@com');

  await expect(email).toHaveValue('malavika@com');
});


// TC05 - Only first name
test('TC05 - Only first name', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });

  await first.fill('malavika');

  await expect(first).toHaveValue('malavika');
});


// TC06 - Only email
test('TC06 - Only email', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const email = page.getByRole('textbox', { name: 'jane@example.com' });

  await email.fill('test@gmail.com');

  await expect(email).toHaveValue('test@gmail.com');
});


// TC07 - Special characters
test('TC07 - Special characters in name', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });

  await first.fill('@malavika#');

  await expect(first).toHaveValue('@malavika#');
});


// TC08 - Clear and refill
test('TC08 - Clear and refill', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });

  await first.fill('abc');
  await first.fill('');
  await first.fill('malavika');

  await expect(first).toHaveValue('malavika');
});


// TC09 - Reload page
test('TC09 - Reload page', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  await page.reload();

  await expect(page.getByRole('textbox', { name: 'Jane', exact: true })).toBeVisible();
});


// TC10 - Scroll page
test('TC10 - Scroll page', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  await page.mouse.wheel(0, 500);

  await expect(page.locator('body')).toBeVisible();
});

// TC11 - Fill all fields and verify values
test('TC11 - Fill and verify all fields', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });
  const last = page.getByRole('textbox', { name: 'Doe' });
  const email = page.getByRole('textbox', { name: 'jane@example.com' });

  await first.fill('malavika');
  await last.fill('neela');
  await email.fill('test@gmail.com');

  await expect(first).toHaveValue('malavika');
  await expect(last).toHaveValue('neela');
  await expect(email).toHaveValue('test@gmail.com');
});


// TC12 - Change input values
test('TC12 - Modify input values', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });

  await first.fill('abc');
  await first.fill('malavika');

  await expect(first).toHaveValue('malavika');
});


// TC13 - Uppercase input
test('TC13 - Uppercase name input', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });

  await first.fill('MALAVIKA');

  await expect(first).toHaveValue('MALAVIKA');
});


// TC14 - Numeric input in name
test('TC14 - Numeric name input', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });

  await first.fill('12345');

  await expect(first).toHaveValue('12345');
});


test('TC15 - Email with spaces', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const email = page.getByRole('textbox', { name: 'jane@example.com' });

  await email.fill('   test@gmail.com   ');

  // ✅ FIX: expect trimmed value
  await expect(email).toHaveValue('test@gmail.com');
});


// TC16 - Clear email field
test('TC16 - Clear email input', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const email = page.getByRole('textbox', { name: 'jane@example.com' });

  await email.fill('abc@gmail.com');
  await email.fill('');

  await expect(email).toHaveValue('');
});


// TC17 - Tab navigation
test('TC17 - Tab navigation between fields', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });

  await first.click();
  await first.press('Tab');

  await expect(page.getByRole('textbox', { name: 'Doe' })).toBeFocused();
});


// TC18 - Double click input
test('TC18 - Double click input field', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });

  await first.dblclick();

  await expect(first).toBeVisible();
});


// TC19 - Rapid typing
test('TC19 - Rapid typing input', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });

  await first.type('malavika');

  await expect(first).toHaveValue('malavika');
});


// TC20 - Verify fields still visible after interaction
test('TC20 - Fields remain visible', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Contact' }).click();

  const first = page.getByRole('textbox', { name: 'Jane', exact: true });

  await first.fill('test');

  await expect(first).toBeVisible();
});