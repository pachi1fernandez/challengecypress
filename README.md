# Cypress Test Execution Guide

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Recommended version: latest LTS)
- [Cypress](https://www.cypress.io/) (Installed via npm or yarn)

## Installation

1. Clone this repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Test

To execute the Cypress test, run:

```sh
npx cypress open
```

This will launch the Cypress Test Runner, allowing you to select and run the test manually.

Alternatively, you can run the test in headless mode:

```sh
npx cypress run
```

## Test Overview

This test script automates the signup and login process on the [Automation Exercise](https://automationexercise.com/) website. The test:

1. Navigates to the website.
2. Clicks on the **Sign Up** button.
3. Fills in the signup form with a randomly generated user.
4. Submits the form and verifies account creation.
5. Clicks the **Continue** button after account creation.

## File Structure

```
/project-folder
│── cypress/e2e/
├── ├── api.cy.js 
│   ├── UI.cy.js 
│── package.json
│── cypress.json (or cypress.config.js)
│── README.md
```

## Troubleshooting

- If Cypress fails to launch, ensure dependencies are installed by running `npm install`.
- Check your `cypress.json` or `cypress.config.js` file for incorrect configurations.
- Run Cypress in debug mode for detailed logs:
  ```sh
  DEBUG=cypress:* npx cypress open
  ```
