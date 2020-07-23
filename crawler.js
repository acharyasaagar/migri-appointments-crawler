const puppeteer = require("puppeteer");

const { puppeteerLaunchOptions } = require("./config");
const {
  checkFreeTimes,
  navigateToReservationPage,
  wrapOpenDropDown,
  wrapSelectOption,
} = require("./helpers");
const selectors = require("./selectors");

const crawl = async () => {
  console.log("Going to start crawling ...");
  const browser = await puppeteer.launch(puppeteerLaunchOptions);
  const page = await browser.newPage();
  const openDropDown = wrapOpenDropDown(page);
  const selectOption = wrapSelectOption(page);
  await navigateToReservationPage(page);

  await openDropDown(selectors.dropdownButtonSelectors.CHOOSE_CATEGORY_BUTTON);
  await selectOption(
    selectors.categoryOptionSelectors.CATEGORY_RESIDENCE_PERMIT
  );
  await openDropDown(selectors.dropdownButtonSelectors.CHOOSE_SERVICE_BUTTON);
  await selectOption(selectors.serviceOptionSelectors.WORK_SELECTOR);
  await openDropDown(
    selectors.dropdownButtonSelectors.CHOOSE_SERVICE_POINT_BUTTON
  );
  await selectOption(selectors.servicePointOptionSelectors.HELSINKI);

  await page.click(selectors.otherSelectors.SEARCH_BUTTON);

  await checkFreeTimes(page);
  await page.waitFor(3000);

  await browser.close();
};

module.exports = crawl;
