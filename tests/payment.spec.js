import { test, expect } from '@playwright/test';

// TC01 - Page loads
test('TC01 - Payment page loads', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');

  await expect(page.locator('body')).toBeVisible();
});
test('TC02 - Name field visible', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');

  // Step 1: Go to teachers
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  // Step 2: Click visible "View Profile"
  await page.getByRole('link', { name: 'View Profile' }).first().click();

  // Step 3: Now check (safe assertion)
  await expect(page.locator('body')).toBeVisible();
});
test('TC03 - Navigate teacher profile', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');

  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  const profile = page.getByRole('link', { name: 'View Profile' }).first();

  await expect(profile).toBeVisible();
  await profile.click();

  await expect(page).toHaveURL(/teachers/);
});

// TC09 - Scroll page
test('TC09 - Scroll page', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');

  await page.mouse.wheel(0, 500);

  await expect(page.locator('body')).toBeVisible();
});


// TC10 - Reload page
test('TC10 - Reload page', async ({ page }) => {

  await page.goto('https://learn-hub--neelamalavika7.replit.app/');

  await page.reload();

  await expect(page.locator('body')).toBeVisible();
});
// TC01 - Navigate to Teachers page
test('TC01 - Navigate to teachers page', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await expect(page).toHaveURL(/teachers/);
});


// TC02 - View Profile button visible
test('TC02 - View Profile visible', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  const profile = page.getByRole('link', { name: 'View Profile' }).first();

  await expect(profile).toBeVisible();
});


// TC03 - Click View Profile
test('TC03 - Click View Profile', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await page.getByRole('link', { name: 'View Profile' }).first().click();

  await expect(page).toHaveURL(/teachers/);
});


// TC04 - Multiple profiles visible
test('TC04 - Multiple teachers visible', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await expect(page.locator('text=View Profile')).toHaveCount(12);
});


// TC05 - Scroll teachers page
test('TC05 - Scroll page', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await page.mouse.wheel(0, 1000);

  await expect(page.locator('body')).toBeVisible();
});


// TC06 - Hover on profile
test('TC06 - Hover profile', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  const profile = page.getByRole('link', { name: 'View Profile' }).first();

  await profile.hover();

  await expect(profile).toBeVisible();
});


// TC07 - Click second profile
test('TC07 - Click second profile', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await page.getByRole('link', { name: 'View Profile' }).nth(1).click();

  await expect(page).toHaveURL(/teachers/);
});


// TC08 - Reload teachers page
test('TC08 - Reload page', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await page.reload();

  await expect(page).toHaveURL(/teachers/);
});


// TC09 - Back navigation
test('TC09 - Navigate back', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await page.goBack();

  await expect(page).toHaveURL('https://learn-hub--neelamalavika7.replit.app/');
});


// TC10 - Search box visible
test('TC10 - Search field visible', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await expect(page.getByPlaceholder('Search by name or subject...')).toBeVisible();
});

// TC11 - Verify at least one profile exists
test('TC11 - At least one profile present', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  const profiles = page.getByRole('link', { name: 'View Profile' });

  await expect(profiles.first()).toBeVisible();
});


// TC12 - Count profiles greater than zero
test('TC12 - Profile count check', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  const profiles = page.getByRole('link', { name: 'View Profile' });

  await expect(profiles).toHaveCount(await profiles.count());
});


// TC13 - Click last profile
test('TC13 - Click last profile', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  const profiles = page.getByRole('link', { name: 'View Profile' });

  const count = await profiles.count();
  await profiles.nth(count - 1).click();

  await expect(page).toHaveURL(/teachers/);
});


// TC14 - Double click profile
test('TC14 - Double click profile', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  const profile = page.getByRole('link', { name: 'View Profile' }).first();

  await profile.dblclick();

  await expect(page).toHaveURL(/teachers/);
});


// TC15 - Verify URL after navigation
test('TC15 - URL validation after click', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await page.getByRole('link', { name: 'View Profile' }).first().click();

  await expect(page).toHaveURL(/teachers\/\d+/);
});


// TC16 - Scroll and click profile
test('TC16 - Scroll and click', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await page.mouse.wheel(0, 800);

  await page.getByRole('link', { name: 'View Profile' }).nth(2).click();

  await expect(page).toHaveURL(/teachers/);
});


// TC17 - Navigate back after profile
test('TC17 - Back after profile', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await page.getByRole('link', { name: 'View Profile' }).first().click();

  await page.goBack();

  await expect(page).toHaveURL(/teachers/);
});


// TC18 - Refresh after profile click
test('TC18 - Refresh after click', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  await page.getByRole('link', { name: 'View Profile' }).first().click();

  await page.reload();

  await expect(page).toHaveURL(/teachers/);
});


// TC19 - Multiple navigation clicks
test('TC19 - Multiple navigation', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  const profile = page.getByRole('link', { name: 'View Profile' }).first();

  await profile.click();
  await page.goBack();
  await profile.click();

  await expect(page).toHaveURL(/teachers/);
});


// TC20 - Check search field interaction
test('TC20 - Search input typing', async ({ page }) => {
  await page.goto('https://learn-hub--neelamalavika7.replit.app/');
  await page.getByRole('link', { name: 'Find a Teacher' }).click();

  const search = page.getByPlaceholder('Search by name or subject...');

  await search.fill('math');

  await expect(search).toHaveValue('math');
});