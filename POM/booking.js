const { chromium,expect } = require('@playwright/test');
const exp = require('constants');

exports.booking = class booking {

  /**
   * @param {import('@playwright/test').Page} newPage
   */
  constructor(newPage) {
    this.page = newPage;
  }

  
  async viewCancellationPolicy() {
    await this.page.locator('h1').click();
    await this.page.locator('#site-content>>[data-section-id="POLICIES_DEFAULT"]>>div>>button>>nth=2').click()
    await expect(this.page.locator('[aria-label="Cancellation policy"]')).toHaveCount(1);
    await this.page.locator('[aria-label="Cancellation policy"]>>button]').click();
  }

  async addToWishList(text) {
    await this.page.pause();
    await this.page.locator('[data-testid="pdp-save-button-unsaved"]').click({force:true})
    await expect(this.page.locator('aria-label="Name this wishlist"')).toBeVisible();
    await this.page.fill('#name-list-input-save-to-list-modal',text)
    await this.page.locator('button>>text=Create').click()
    await expect(this.page.locator('[data-testid="pdp-save-button-saved"]')).toHaveCount(1)
  }


}