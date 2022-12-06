# Airbnb Test Project

Airbnb, Inc., based in San Francisco, California, operates an online marketplace focused on short-term homestays and experiences. The company acts as a broker and charges a commission from each booking.

## Pre-Requisite


Note: to download the latest version of npm, on the command line, run the following command:

```bash
npm install -g npm
```

## Checking your version of npm and Node.js

To see if you already have Node.js and npm installed and check the installed version, run the following commands:

```bash
node -v
npm -v
```

## Playwright Installation

Install Dependencies


```bash
# install 'dependencies'
npm install
```

After installing dependencies you need to install playwright if not already

Playwright has its own test runner for end-to-end tests, we call it Playwright Test.

```bash
npm i -D @playwright/test
# install supported browsers
npx playwright install
```
## Command Line

Following are the usual command line patterns.

- Run all the tests

```bash
npx playwright test
```

- Run a single test file

```bash
npx playwright test tests/TC1.spec.ts
```

- Run a set of test files
```bash
npx playwright test tests/todo-page/ tests/landing-page/
```
- Run files that have my-spec or my-spec-2 in the file name

```bash
npx playwright test my-spec my-spec-2
```

- Run the test with the title

```bash
npx playwright test -g "add a todo item"
```
- Run tests in headed browsers
```bash
npx playwright test --headed
```
Run tests in a particular browser (config-less mode)

```bash
npx playwright test --browser=webkit
```

Run tests in all browsers (config-less mode)
```bash
npx playwright test --browser=all
```

Disable parallelization

```bash
npx playwright test --workers=1
```

Choose a reporter

```bash
npx playwright test --reporter=dot
```

Run in debug mode with Playwright Inspector

```bash
npx playwright test --debug
```

Ask for help

```bash
npx playwright test --help
```

## Creating a configuration file

- Javascript

```bash
// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  projects: [
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium',
        // Test against Chrome Beta channel.
        channel: 'chrome-beta',
      },
    },
    {
      name: 'Desktop Safari',
      use: {
        browserName: 'webkit',
        viewport: { width: 1200, height: 750 },
      }
    },
    // Test against mobile viewports.
    {
      name: 'Mobile Chrome',
      use: devices['Pixel 5'],
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
    {
      name: 'Desktop Firefox',
      use: {
        browserName: 'firefox',
        viewport: { width: 800, height: 600 },
      }
    },
  ],
};

module.exports = config;
```
