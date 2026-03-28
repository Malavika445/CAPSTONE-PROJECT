export class SignupPage {
  constructor(page) {
    this.page = page;

    this.signupLink = page.getByRole('link', { name: 'Sign up' });
    this.name = page.getByRole('textbox', { name: 'John Doe' });
    this.email = page.getByRole('textbox', { name: 'you@example.com' });
    this.password = page.getByRole('textbox', { name: '••••••••' });
    this.signupBtn = page.getByRole('button', { name: 'Sign up' });
  }

  async open() {
    await this.page.goto('https://learn-hub--neelamalavika7.replit.app/');
    await this.signupLink.click();
  }

  async enterName(value) {
    if (value !== undefined) await this.name.fill(value);
  }

  async enterEmail(value) {
    if (value !== undefined) await this.email.fill(value);
  }

  async enterPassword(value) {
    if (value !== undefined) await this.password.fill(value);
  }

  async clickSignup() {
    await this.signupBtn.click();
  }

  async generateEmail() {
    return `test${Date.now()}@gmail.com`;
  }

  async signup(name, email, password) {
    await this.enterName(name);
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickSignup();
  }
}