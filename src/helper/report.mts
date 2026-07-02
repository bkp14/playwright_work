import * as report from "multiple-cucumber-html-reporter";

report.generate({
  jsonDir: "reports",
  reportPath: "./",
  reportName: "Playwright BDD Report",
  pageTitle: "BookCart App test report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
    device: "Arun - Machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Book Cart Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
    ],
  },
  // 🌟 Inject the theme overrides directly inside the configuration block here:
  customStyle: `
    :root, :host {
      --status-passed: #000000 !important;       /* Vibrant Green for Charts & Badges */
      --color-emerald-500: #000000 !important;   /* Overrides structural background accents */
      --color-green-400: #000000 !important;     /* Lighter green highlights */
    }
  `
});