// @ts-check

// Imports the Playwright config helper and device presets (Chrome, Firefox, mobile, etc.)
import { defineConfig, devices } from '@playwright/test';

// dotenv loads your .env file into process.env
// This lets you use process.env.BASE_URL, process.env.ADMIN_EMAIL, etc. in your tests
// without hardcoding sensitive values in your code
import dotenv from 'dotenv';
dotenv.config();

// Uncomment below if you want to load .env from a specific path instead of project root
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  // Where Playwright will look for your test files
  testDir: './tests',

  // Where Playwright saves test artifacts (screenshots, videos, traces)
  // This folder is gitignored — it's auto-generated on each run
  outputDir: 'test-results/',

  // Runs all test files in parallel (each file in its own worker)
  // Speeds up execution significantly on large suitess
  // Set to false if your tests share state (e.g. same DB records, same logged-in session)
  fullyParallel: true,

  // Prevents you from accidentally committing test.only() to your repo
  // On CI this will fail the entire run if any test.only() is found
  // Locally it's off so you can still use .only() for debugging
  forbidOnly: !!process.env.CI,

  // How many times to retry a failed test
  // On CI: retries 2 times before marking as failed (helps with flaky tests)
  // Locally: no retries so you see failures immediately
  retries: process.env.CI ? 2 : 0,

  // How many parallel workers to use
  // On CI: 1 worker (sequential) to avoid resource conflicts on the CI machine
  // Locally: Playwright decides based on your CPU cores
  workers: process.env.CI ? 1 : undefined,

  // Maximum time a single test can run before it's marked as failed
  // 30s is the Playwright default — increase for slow apps or heavy flows
  // 10s is too tight for real-world apps (page loads, animations, API calls)
  timeout: 30000,

  expect: {
    // Maximum time Playwright will wait for an assertion to pass
    // e.g. expect(page.locator('...')).toBeVisible() will retry for up to 5s
    // Increase if your app has slow rendering or animations
    timeout: 5000,
  },

  // Configure how test results are reported
  reporter: [
    // HTML reporter — generates a rich visual report in playwright-report/
    // Open with: npx playwright show-report
    // Shows: pass/fail status, error messages, screenshots, videos, traces
    ['html'],

    // List reporter — detailed console output grouped by test file
    // Good for reading results directly in terminal during local development
    // ['list'],

    // Line reporter — minimal console output, one line per test
    // Good for CI where you want clean, readable logs
    // ['line'],

    // Dot reporter — very compact, shows a dot per test (. = pass, F = fail)
    // Good for large suites where you just want a quick summary
    // ['dot'],

    // JSON reporter — saves full results to a JSON file
    // Useful for building custom dashboards or post-processing results
    // ['json', { outputFile: 'results.json' }],

    // JUnit reporter — saves results in XML format
    // Required for CI integrations like Jenkins, GitHub Actions test summary
    // ['junit', { outputFile: 'results.xml' }],
  ],

  // Shared settings applied to all tests across all projects
  use: {
    // The base URL for your app — used when you call page.goto('/login')
    // instead of page.goto('https://your-app.com/login')
    // Loaded from your .env file — never hardcode this
    baseURL: process.env.BASE_URL,

    // Records a trace (step-by-step execution log with DOM snapshots and network)
    // 'on-first-retry' = only records when a test is retried (failed once)
    // Open with: npx playwright show-trace trace.zip
    // Other options: 'on' (always), 'off' (never), 'retain-on-failure'
    trace: 'on-first-retry',

    // Takes a screenshot automatically when a test fails
    // Saved in test-results/ and linked in the HTML report
    // Other options: 'on' (always), 'off' (never)
    screenshot: 'only-on-failure',

    // Records a video of the test run
    // 'retain-on-failure' = keeps video only when test fails (saves disk space)
    // Other options: 'on' (always), 'off' (never), 'on-first-retry'
    video: 'retain-on-failure',

    launchOptions: {
      // Slows down every Playwright action by N milliseconds
      // Useful when visually debugging a test — you can watch it run step by step
      // Always keep this commented out in CI
      // slowMo: 1000,
    },
  },

  // Configure which browsers to run tests against
  projects: [
    // Runs tests in Chromium (open-source base of Chrome)
    // This is the default and most commonly used for E2E testing
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Runs tests in Firefox
    // Uncomment to add cross-browser coverage
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // Runs tests in WebKit (Safari's rendering engine)
    // Important if your users are on macOS or iOS Safari
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // Mobile viewports — simulates mobile screen size and touch events
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    // Branded browsers — runs on actual installed Chrome or Edge on your machine
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  // Starts a local dev server before running tests
  // Useful if you're testing your own app locally and need to spin it up first
  // command: the npm script that starts your app
  // url: Playwright waits until this URL is reachable before running any test
  // reuseExistingServer: locally reuses an already running server (faster dev loop)
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});