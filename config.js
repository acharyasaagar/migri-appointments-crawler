const puppeteerLaunchOptions = {
  headless: false,
  slowMo: 100,
  defaultViewport: {
    width: 760,
    height: 720,
    deviceScaleFactor: 1,
    isLandscape: true,
  },
};

module.exports = {
  puppeteerLaunchOptions,
};
