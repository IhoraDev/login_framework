const { test, expect } = require('@playwright/test');
const { loginButton, usernameField, passwordField } = require('./Selectors');

const URL =
  'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php';

test('Try with invalid data', async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector(loginButton);
  await page.fill(usernameField, 'username');
  await page.fill(passwordField, 'password');
  await page.click(loginButton);
  await expect(page.locator('span.help-block >> nth=0')).toHaveText(
    'No account found with that username.'
  );
});

test('Try with empty password', async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector(loginButton);
  await page.fill(usernameField, 'username');
  await page.fill(passwordField, '');
  await page.click(loginButton);
  await expect(page.locator('span.help-block >> nth=1')).toHaveText(
    'Please enter your password.'
  );
});

test('Try with empty username', async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector(loginButton);
  await page.fill(usernameField, '');
  await page.fill(passwordField, 'password');
  await page.click(loginButton);
  await expect(page.locator('span.help-block >> nth=0')).toHaveText(
    'Please enter username.'
  );
});

test('Try with empty fields', async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector(loginButton);
  await page.fill(usernameField, '');
  await page.fill(passwordField, '');
  await page.click(loginButton);
  await expect(page.locator('span.help-block >> nth=0')).toHaveText(
    'Please enter username.'
  );
  await expect(page.locator('span.help-block >> nth=1')).toHaveText(
    'Please enter your password.'
  );
});
