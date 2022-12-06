const { test, expect, firefox, chromium } = require('@playwright/test');
const { login } = require('../POM/login');
const { landingPage } = require('../POM/landingPage');
const { booking } = require('../POM/booking');
const credientals = JSON.parse(JSON.stringify(require("../Fixtures/cred.json")));


test.describe('Test Suits', async () => {
   

    test('Login in account and select place ', async ({page }) => {
    
        const Login = new login(page);
        const LandingPage = new landingPage(page);
        const Booking = new booking(page);

        await page.goto('/');
        await LandingPage.winterReleaseModal();
        await LandingPage.profilebtn();
        await LandingPage.LoginBtn();
        await Login.loginPane();
        await Login.emailBtn();
        await Login.loginEmail(credientals.Email);
        await Login.continueBtn();
        await page.waitForLoadState();
        await Login.password(credientals.Password);
        await Login.loginBtn();
        await LandingPage.searchBar();
        await LandingPage.destination();
        await LandingPage.month();
        await LandingPage.selectMonth();
        await LandingPage.addGuests();
        await LandingPage.filters();
        await LandingPage.selectPlace();
        await Booking.viewCancellationPolicy()
        await Booking.addToWishList(credientals.wishlistName)
    })

})