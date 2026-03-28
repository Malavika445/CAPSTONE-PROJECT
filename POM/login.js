export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.signInBtn = page.getByRole('button', { name: 'Sign in' });
    this.forgotPassword = page.getByText('Forgot password?');
    this.signupLink = page.getByText('Sign up for free');
  }

  async open(baseURL) {
    await this.page.goto(baseURL);
    await this.loginLink.click();
    await this.page.waitForSelector('input[type="email"]');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInBtn.click();
  }

  async clickSignIn() {
    await this.signInBtn.click();
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickForgotPassword() {
    await this.forgotPassword.click();
  }

  async clickSignup() {
    await this.signupLink.click();
  }
}