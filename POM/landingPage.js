const { expect } = require('@playwright/test');
const exp = require('constants');

exports.landingPage = class landingPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async winterReleaseModal() {
    await this.page.waitForSelector('button[aria-label="Close"]')
    await expect(this.page.locator('button[aria-label="Close"]')).toBeVisible();
    await this.page.locator('button[aria-label="Close"]').click();
    
  }

  async profilebtn() {
    await expect(this.page.locator('[data-testid="cypress-headernav-profile"]')).toBeVisible();
    await this.page.locator('[data-testid="cypress-headernav-profile"]').click()
  }
  
  async LoginBtn() {
    await this.page.locator('[data-testid="cypress-headernav-login"]').click();
  }

  async searchBar() {
    await expect(this.page.locator('[data-testid="little-search"]')).toBeVisible();     
    await this.page.locator('[data-testid="little-search"]').click();
  }

  async destination() {
    await expect(this.page.locator('[data-testid="structured-search-input-field-query"]')).toBeVisible();
    await this.page.locator('[data-testid="structured-search-input-field-query"]').click();
    await this.page.locator('[data-testid="structured-search-input-field-query"]').type('Barcelona')
    await this.page.keyboard.press('Enter');
  }

  async month() {
    await expect(this.page.locator('[data-testid="structured-search-input-field-dates-panel"]')).toBeVisible();
    await this.page.locator('[aria-controls="panel--tabs--1"]').click();
    await expect(this.page.locator('[aria-controls="panel--tabs--1"]')).toHaveText("I'm flexible")
    await this.page.locator('#flexible_trip_lengths-one_week').click();
  }

  async selectMonth() {
    await this.page.locator('[data-testid="flexible_trip_dates-july"]').click()
  }

  async addGuests() {
    await this.page.locator('[data-testid="structured-search-input-field-guests-button"]').click()
    
    await this.page.locator('[data-testid="stepper-adults-increase-button"]').dblclick();
    const adultCount =await this.page.locator('[data-testid="stepper-adults-a11y-value-label"]').textContent();
    await expect(adultCount).toEqual('2 Adults')

    await this.page.locator('[data-testid="stepper-children-increase-button"]').dblclick();
    const childrenCount= await this.page.locator('[data-testid="stepper-children-value"]').textContent()
    await expect(childrenCount).toEqual('2')

    await this.page.locator('[data-testid="stepper-pets-increase-button"]').click();
    const petCount= await this.page.locator('[data-testid="stepper-pets-a11y-value-label"]').textContent()
    await expect(petCount).toEqual('1 Pets')
    await this.page.locator('[data-testid="structured-search-input-search-button"]').click();
  }

  async filters() {
    await this.page.locator('button>>text=Filters').click();
    await expect(this.page.locator('[data-testid="modal-container"]')).toBeVisible();
    await this.page.locator('#price_filter_max').clear()
    await this.page.locator('#price_filter_max').type('400')

    await this.page.locator('[data-checkbox="true"]>>nth=0').click();
    await this.page.locator('#chip-group-null>>nth=3>>button>>text=House>>nth=0').click()
    await this.page.locator('footer>a').click();
  }

  async selectPlace() {
    await this.page.locator('.rfexzly>>nth=0').click()
  }

}