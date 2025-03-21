# Cypress Test Execution Guide

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Recommended version: latest LTS)
- [Cypress](https://www.cypress.io/) (Installed via npm or yarn)

## Installation

1. Clone this repository:
   ```sh
   git clone <repo-url>
   cd Challenge/cypress
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

API Tests (api.cy.js)

1. Simple QA test path 1:
- Sends a GET request to /v1/qa/test1.
- Ensures the response status is 200.
- Validates response time, headers, and body structure.

2. Simple QA test path 3:
- Sends a GET request to /v1/qa/test3 without an API key.
- Ensures the response status is 401.
- Validates expected error message (BASE-401, API KEY is required).

UI Tests (UI.cy.js)

1. Sign up:
- Creates a user using the createUser function.
- Stores the generated email for further use.

2. Log in:
- Attempts to log in with the generated user.
- Ensures successful login.

3. User Deletion:
- After each test, deletes the created user account to keep the system clean.

Utility Functions (common.js)
- createUser(): Automates user registration on Automation Exercise and returns the generated email.



## File Structure

```
/project-folder
│── cypress/e2e/
├── ├── api.cy.js 
│   ├── UI.cy.js 
│── cypress/utils/
│   ├── common.cy.js 
│── package.json
│── cypress.json (or cypress.config.js)
│── README.md
```

## Troubleshooting

- If Cypress fails to launch, ensure dependencies are installed by running npm install.
- Check your cypress.json or cypress.config.js file for incorrect configurations.
- Run Cypress in debug mode for detailed logs:
  ```sh
  DEBUG=cypress:* npx cypress open
  ```
