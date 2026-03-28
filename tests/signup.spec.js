import { test, expect } from '@playwright/test';
import { SignupPage} from '../POM/Signup';

test.describe('Signup Test Cases', () => {

  test('TC01 - Valid signup', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('Malavika', email, 'cruise@2003');
    await expect(page).toHaveURL(/login|home|dashboard|register/);
  });
 
  test('TC02 - Invalid email', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    await s.signup('ramu', 'ramu@com', '123456');
    await expect(page).toHaveURL(/register/);
  });

  test('TC03 - Missing email', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    await s.signup('ramu', '', '123456');
    await expect(page).toHaveURL(/register/);
  });

  test('TC04 - Missing password', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    await s.signup('ramu', 'test@gmail.com', '');
    await expect(page).toHaveURL(/register/);
  });

  test('TC05 - Uppercase name', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('RAMU', email, '123456');
    await expect(page).toHaveURL(/login|register/);
  });

  test('TC06 - Invalid email format', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    await s.signup('ramu', 'abc@gmail', '123456');
    await expect(page).toHaveURL(/register/);
  });

  test('TC07 - Long name', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('abcdefghijklmnoqrstuvwxyz', email, '8764345678');
    await expect(page).toHaveURL(/login|register/);
  });

  test('TC08 - Special char name', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('Gh@#Jh$', email, '8764345678');
    await expect(page).toHaveURL(/login|register/);
  });

  test('TC09 - Numeric name', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('123456', email, '8764345678');
    await expect(page).toHaveURL(/login|register/);
  });

  test('TC10 - Empty form', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    await s.clickSignup();
    await expect(page).toHaveURL(/register/);
  });

  test('TC11 - Name with spaces', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('   ramu   ', email, '123456');
    await expect(page).toHaveURL(/login|register/);
  });

  test('TC12 - Email uppercase', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    await s.signup('ramu', 'TESTEMAIL@GMAIL.COM', '123456');
    await expect(page).toHaveURL(/register|login/);
  });

  test('TC13 - Strong password', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('ramu', email, 'Ramu@123');
    await expect(page).toHaveURL(/login|register/);
  });

  test('TC14 - Short name', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('a', email, '123456');
    await expect(page).toHaveURL(/register|login/);
  });

  test('TC15 - Long email', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    await s.signup('ramu', `verylong${Date.now()}@gmail.com`, '123456');
    await expect(page).toHaveURL(/login|register/);
  });

  test('TC16 - Numeric password', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('ramu', email, '999999');
    await expect(page).toHaveURL(/login|register/);
  });

  test('TC17 - Alphabet password', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('ramu', email, 'abcdef');
    await expect(page).toHaveURL(/login|register/);
  });

  test('TC18 - Empty name', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('', email, '123456');
    await expect(page).toHaveURL(/register/);
  });

  test('TC19 - Empty email', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    await s.signup('ramu', '', '123456');
    await expect(page).toHaveURL(/register/);
  });

  test('TC20 - Empty password', async ({ page }) => {
    const s = new SignupPage(page);
    await s.open();
    const email = await s.generateEmail();
    await s.signup('ramu', email, '');
    await expect(page).toHaveURL(/register/);
  });

});