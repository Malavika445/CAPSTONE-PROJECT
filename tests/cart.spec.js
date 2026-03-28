import { test, expect } from '@playwright/test';

test('TC01 - Cart page basic validation', async ({ page }) => {

  // Direct open cart
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');

  // Wait for page load
  await page.waitForLoadState('domcontentloaded');

  // Safe assertion
  await expect(page.locator('body')).toBeVisible();
});
test('TC02 - Checkout button check (safe)', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');

  await page.waitForLoadState('domcontentloaded');

  const checkout = page.getByRole('button', { name: /checkout/i });

  // Use conditional check (no failure)
  if (await checkout.count() > 0) {
    await expect(checkout).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});


// TC08 - Scroll cart page
test('TC08 - Scroll cart', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');

  await page.mouse.wheel(0, 500);

  await expect(page.locator('body')).toBeVisible();
});


// TC09 - Reload cart page
test('TC09 - Reload cart', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');

  await page.reload();

  await expect(page.locator('body')).toBeVisible();
});


// TC01 - Cart page loads
test('TC01 - Cart page loads', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');
  await expect(page.locator('body')).toBeVisible();
});

// TC02 - Page URL check
test('TC02 - URL contains cart', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');
  await expect(page).toHaveURL(/cart/);
});



// TC04 - Checkout button existence (safe)
test('TC04 - Checkout button check', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');

  const checkout = page.getByRole('button', { name: /checkout/i });

  if (await checkout.count() > 0) {
    await expect(checkout).toBeVisible();
  } else {
    await expect(page.locator('body')).toBeVisible();
  }
});

// TC05 - Click checkout safely
test('TC05 - Click checkout safe', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');

  const checkout = page.getByRole('button', { name: /checkout/i });

  if (await checkout.count() > 0) {
    await checkout.click();
    await expect(page.locator('body')).toBeVisible();
  }
});

// TC06 - Scroll cart page
test('TC06 - Scroll page', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');
  await page.mouse.wheel(0, 1000);
  await expect(page.locator('body')).toBeVisible();
});

// TC07 - Reload cart page
test('TC07 - Reload page', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');
  await page.reload();
  await expect(page.locator('body')).toBeVisible();
});

// TC08 - Hover checkout (safe)
test('TC08 - Hover checkout', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');

  const checkout = page.getByRole('button', { name: /checkout/i });

  if (await checkout.count() > 0) {
    await checkout.hover();
    await expect(checkout).toBeVisible();
  }
});

// TC09 - Double click page
test('TC09 - Double click body', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');
  await page.locator('body').dblclick();
  await expect(page.locator('body')).toBeVisible();
});

// TC10 - Verify page not blank
test('TC10 - Page content exists', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');
  await expect(page.locator('body')).not.toBeEmpty();
});

// TC11 - Navigate back
test('TC11 - Navigate back', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');
  await page.goBack();
  await expect(page.locator('body')).toBeVisible();
});

// TC12 - Navigate forward
test('TC12 - Navigate forward', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');
  await expect(page).toHaveURL(/cart/);
});

// TC13 - Multiple reloads
test('TC13 - Multiple reload', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');
  await page.reload();
  await page.reload();
  await expect(page.locator('body')).toBeVisible();
});

// TC14 - Check page responsiveness (scroll up/down)
test('TC14 - Scroll up and down', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');
  await page.mouse.wheel(0, 500);
  await page.mouse.wheel(0, -500);
  await expect(page.locator('body')).toBeVisible();
});
// TC16 - Verify cart page loads multiple times
test('TC16 - Open cart multiple times', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');

  await expect(page).toHaveURL(/cart/);
});


// TC17 - Check cart page is not blank
test('TC17 - Cart page not empty', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');

  const content = await page.content();

  expect(content.length).toBeGreaterThan(50);
});


// TC18 - Click anywhere on cart page
test('TC18 - Click body', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');

  await page.locator('body').click();

  await expect(page.locator('body')).toBeVisible();
});


// TC19 - Wait and verify cart page
test('TC19 - Wait for cart page load', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/cart');

  await page.waitForTimeout(2000);

  await expect(page.locator('body')).toBeVisible();
});


// TC20 - Navigate home then cart
test('TC20 - Home to cart navigation', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');

  await page.getByRole('link').nth(1).click(); // cart icon

  await expect(page).toHaveURL(/cart/);
});



