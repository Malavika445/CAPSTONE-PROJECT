import { test, expect } from '@playwright/test';

const baseURL = 'https://learn-hub--neelamalavika7.replit.app/';

async function goToSubjects(page) {
  await page.goto(baseURL);
  await page.getByRole('link', { name: 'Subjects' }).first().click();
}

// TC01
test('TC01 - Subjects page loads', async ({ page }) => {
  await goToSubjects(page);
  await expect(page.getByText('Explore Subjects')).toBeVisible();
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
  await expect(page).toHaveURL(/subject|teacher|course/);
});

// TC04
test('TC04 - Click Physics', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Physics' }).click();
  await expect(page).toHaveURL(/subject|teacher|course/);
});

// TC05
test('TC05 - Click Chemistry', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Chemistry' }).click();
  await expect(page).toHaveURL(/subject|teacher|course/);
});

// TC06
test('TC06 - Click Biology', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Biology' }).click();
  await expect(page).toHaveURL(/subject|teacher|course/);
});

// TC07
test('TC07 - Click Computer Science', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Computer Science' }).click();
  await expect(page).toHaveURL(/subject|teacher|course/);
});

// TC08
test('TC08 - Click English', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'English' }).click();
  await expect(page).toHaveURL(/subject|teacher|course/);
});

// TC09
test('TC09 - Click History', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'History' }).first().click();
  await expect(page).toHaveURL(/subject|teacher|course/);
});

// TC10
test('TC10 - Click Economics', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Economics' }).click();
  await expect(page).toHaveURL(/subject|teacher|course/);
});

test('TC11 - Scroll page', async ({ page }) => {
  await goToSubjects(page);

  await page.mouse.wheel(0, 1500);

  // ✅ Check only one element (Economics)
  await expect(page.getByRole('heading', { name: 'Economics' })).toBeVisible();
});

// TC12
test('TC12 - Hover card', async ({ page }) => {
  await goToSubjects(page);
  const math = page.getByRole('heading', { name: 'Mathematics' });

  await math.hover();
  await expect(math).toBeVisible();
});

// TC13
test('TC13 - Multiple clicks (fixed)', async ({ page }) => {
  await goToSubjects(page);

  const math = page.getByRole('heading', { name: 'Mathematics' });

  await math.click();
  await page.goBack();
  await math.click();

  await expect(page).toHaveURL(/subject|teacher|course/);
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
  await expect(page.getByText('Explore Subjects')).toBeVisible();
});
// TC16 - Verify Music subject visible
test('TC16 - Music subject visible', async ({ page }) => {
  await goToSubjects(page);
  await expect(page.getByRole('heading', { name: 'Music' })).toBeVisible();
});


// TC17 - Verify Art subject visible
test('TC17 - Art subject visible', async ({ page }) => {
  await goToSubjects(page);
  await expect(page.getByRole('heading', { name: 'Art' })).toBeVisible();
});


// TC18 - Click Music
test('TC18 - Click Music', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Music' }).click();
  await expect(page).toHaveURL(/teacher|subject/);
});


// TC19 - Click Art
test('TC19 - Click Art', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('heading', { name: 'Art' }).click();
  await expect(page).toHaveURL(/teacher|subject/);
});





// TC21 - Navigate to Contact
test('TC21 - Navigate to Contact', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page).toHaveURL(/contact/);
});


// TC22 - Navigate to Find Teacher
test('TC22 - Navigate to Find a Teacher', async ({ page }) => {
  await goToSubjects(page);
  await page.getByRole('link', { name: 'Find a Teacher' }).click();
  await expect(page).toHaveURL(/teachers/);
});





// TC24 - Footer visible
test('TC24 - Footer visible', async ({ page }) => {
  await goToSubjects(page);
  await expect(page.getByText(/All rights reserved/)).toBeVisible();
});


// TC25 - Refresh and check subjects again
test('TC25 - Refresh subjects page', async ({ page }) => {
  await goToSubjects(page);
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Mathematics' })).toBeVisible();
});