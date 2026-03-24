export class signUpPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.getByRole('textbox', { name: 'John Doe' });
    this.emailInput = page.getByRole('textbox', { name: 'you@example.com' });
    this.phoneInput = page.getByRole('textbox', { name: '9876543210' });
    // Using data-testid as it's a best practice mentioned in Playwright docs
    this.password = page.getByRole('textbox', { name: '••••••••' });
    this.submitButton = page.getByRole('button', { name: 'Create Account' });
  }
    
  async navigate() {
    // Replace with your actual local or hosted URL
    await this.page.goto('https://vehicle-booking-hub--sushmithaanaidu.replit.app/');
    await this.page.getByRole('link', { name: 'Sign In' }).click();
    await this.page.getByRole('link', { name: 'Register here' }).click();

  }

  async fillForm(name, email, phone, password) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.password.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }
}