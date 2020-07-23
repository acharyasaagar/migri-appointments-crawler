const selectors = require("./selectors");
const sendMessage = require("./notify");

const navigateToReservationPage = async (page) => {
  await Promise.all([
    page.goto("https://migri.vihta.com/public/migri/#/home"),
    page.waitForNavigation(),
  ]);
  console.log(`\nOpened url: ${page.url()}`);
  await Promise.all([
    page.tap(selectors.otherSelectors.BOOK_NOW_BUTTON),
    page.waitForNavigation(),
  ]);
  console.log(`Navigated to: ${page.url()}`);
};

const wrapOpenDropDown = (page) => {
  return async function (selector) {
    try {
      await page.waitForSelector(selector);
      await page.tap(selector);
    } catch (err) {
      console.log(err.message);
    }
  };
};

const wrapSelectOption = (page) => {
  return async function (selector) {
    try {
      await page.tap(selector);
    } catch (err) {
      console.log(err.message);
      console.log("Error while selecting option");
    }
  };
};

const freeTimesCount = async (page) => {
  return await page.$eval(
    selectors.otherSelectors.FREE_TIME_PANEL,
    (el) => el.childElementCount
  );
};

const findDateOfFirstFreeTime = async (page) => {
  return await page.$eval(
    `body > div.container.main > div.ng-scope > div > div.hidden-sm.hidden-md.hidden-lg.ng-scope > div > div.row.result-title-mobile > div > div.col-xs-8.text-center.odd.mobile-date > span`,
    (el) => {
      const monthDay = el.innerText
        .split(" ")[1]
        .split(".")
        .reverse()
        .join("-");
      const year = new Date().getFullYear();
      const dateString = `${monthDay}-${year}`;
      return dateString;
    }
  );
};

const checkDateAndNotify = async (page) => {
  const dateOfFirstFreeTime = await findDateOfFirstFreeTime(page);
  const dateObj = new Date(dateOfFirstFreeTime);
  const findBeforeDateObj = new Date(process.argv[2]);
  if (dateObj < findBeforeDateObj) {
    const message = `
      There is free time available on ${dateObj.toDateString()}
    `;
    await sendMessage(message);
    return;
  }
  return console.log(`No dates found before ${process.argv[2]}`);
};

const checkFreeTimes = async (page) => {
  const freeTimes = await freeTimesCount(page);
  if (freeTimes > 0) {
    await checkDateAndNotify(page);
  }
  await page.waitFor(1000);
  await page.click(selectors.otherSelectors.SEARCH_NEXT_FREE_TIME_BUTTON);
  await page.waitFor(5000);
  const nextAvailableTimesCount = await freeTimesCount(page);
  console.log(nextAvailableTimesCount);
  if (nextAvailableTimesCount > 0) {
    await checkDateAndNotify(page);
  }
};

module.exports = {
  checkFreeTimes,
  navigateToReservationPage,
  wrapOpenDropDown,
  wrapSelectOption,
};
