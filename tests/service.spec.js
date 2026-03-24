import { test, expect } from '@playwright/test';

const baseURL = 'https://learn-hub--neelamalavika7.replit.app/';

async function goToSubjects(page) {
  await page.goto(baseURL);
  await page.getByRole('link', { name: 'Subjects' }).first().click();
}

// TC01
test('TC01 - Subjects page loads', async ({ page }) => {
  await goToSubjects(page);
  await expect(page.locator('text=Explore Subjects')).toBeVisible();
});

// TC02
test('TC02 - Subject cards visible', async ({ page }) => {
  await goToSubjects(page);

  await expect(page.getByRole('heading', { name: 'Mathematics' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Physics' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Chemistry' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Biology' })).toBeVisible();
});

// TC03
test('TC03 - Click Mathematics', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Mathematics' }).click();
});

// TC04
test('TC04 - Click Physics', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Physics' }).click();
});

// TC05
test('TC05 - Click Chemistry', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Chemistry' }).click();
});

// TC06
test('TC06 - Click Biology', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Biology' }).click();
});

// TC07
test('TC07 - Click Computer Science', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Computer Science' }).click();
});

// TC08
test('TC08 - Click English', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'English' }).click();
});

// TC09
test('TC09 - Click History', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'History' }).first().click();
});

// TC10
test('TC10 - Click Economics', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Economics' }).click();
});

// TC11
test('TC11 - Scroll page', async ({ page }) => {
  await goToSubjects(page);
  await page.mouse.wheel(0, 1000);
});

// TC12
test('TC12 - Hover card', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Mathematics' }).hover();
});

// TC13
test('TC13 - Multiple clicks (fixed)', async ({ page }) => {
  await goToSubjects(page);

  const math = page.getByRole('heading', { name: 'Mathematics' });
  await math.click();

  await page.goBack(); // IMPORTANT FIX
  await math.click();
});

// TC14
test('TC14 - Navigate home', async ({ page }) => {
  await goToSubjects(page);
  await page.locator('a[href="/"]').first().click();
  await expect(page).toHaveURL(baseURL);
});

// TC15
test('TC15 - Reload page', async ({ page }) => {
  await goToSubjects(page);
  await page.reload();
});