const reporter = require("multiple-cucumber-html-reporter");

reporter.generate({
  jsonDir: "./reports",
  reportPath: "./reports/html-report",
  reportName: "Automation Test Report",
  pageTitle: "Playwright Cucumber Report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "Chrome",
      version: "Latest",
    },
    device: "Local",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});