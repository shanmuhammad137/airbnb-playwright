const { expect } = require('@playwright/test');

exports.login = class login {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async loginPane() {
    await expect(this.page.locator('[data-testid="login-pane"]')).toBeVisible();
  }

  async loginEmail(text) {
    await this.page.fill('[data-testid="email-login-email"]', text);
  }

  async password(text) {
    await this.page.fill('[data-testid="email-signup-password"]',text);
  }

  async emailBtn() {
    await expect(this.page.locator('[data-testid="social-auth-button-email"]')).toHaveText('Continue with email');
    await this.page.locator('[data-testid="social-auth-button-email"]').click();
  }

  async continueBtn() {
    await expect(this.page.locator('[data-testid="signup-login-submit-btn"]')).toHaveText('Continue');
    await this.page.locator('[data-testid="signup-login-submit-btn"]').click();
  }

  async loginBtn() {
    await expect(this.page.locator('[data-testid="signup-login-submit-btn"]')).toHaveText('Log in')
    await this.page.locator('[data-testid="signup-login-submit-btn"]').click();
  }

}