import * as report from "multiple-cucumber-html-reporter";

report.generate({
  jsonDir: "./reports",
  reportPath: "./reports",
  pageTitle: "Automation Exercise Report",
  reportName: "Automation Exercise Execution Report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "Chrome",
      version: "Latest"
    },
    device: "Local Test Machine",
    platform: {
      name: "Windows",
      version: "11"
    }
  }
});