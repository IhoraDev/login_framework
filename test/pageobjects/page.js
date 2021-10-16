/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

const URL = `https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php/${path}`;

module.exports = class Page {
  open(path) {
    return browser.url(URL);
  }
};
