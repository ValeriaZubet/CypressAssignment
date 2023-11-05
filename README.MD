```markdown
# Cypress Test Suite - CypressAssignment

This repository contains test automation scripts using Cypress for the Lennar assignment.

## Clone the Repository

To clone this repository, run the following command in your terminal:

```bash
git clone https://github.com/ValeriaZubet/CypressAssignment.git

```

## Install Cypress

Before running the tests, make sure you have Node.js and npm (Node Package Manager) installed on your machine. Then, follow these steps to install Cypress:

1. **Navigate into the cloned repository:**

```bash
cd CypressAssignment
```

2. **Install Cypress as a dev dependency:**

```bash
npm install 
```

## Run Tests

### Open Mode:

To run tests in the default open mode, use the following command:

1. **Navigate to Your Cypress Project Directory:**

   Open your terminal or command prompt and navigate to the directory where your Cypress project is located.

2. **Run Cypress Open:**

   Use the npx command to run Cypress in open mode. In your terminal, enter the following command:

   ```bash
   npx cypress open
   ```

   Cypress will start, and the Cypress Test Runner will open in a separate window.

3. **Select and Run Tests:**

   In the Cypress Test Runner, select E2E Testing, select the Chrome Browser, click on Start E2E Testing in Chrome, you'll see a list of available test files. You can click on a test file to see the individual test cases within that file.

   To run a test, click on it in the Test Runner's interface, and Cypress will execute that specific test. You can also run all tests in a file by clicking the file name or run all tests across your entire project by clicking the "Run all specs" button at the top.

4. **View Test Execution:**

   As you run tests, you'll see the test execution progress and results in the Cypress Test Runner window. This includes detailed information about each test, including any assertions, logs, and commands executed.

5. **Interact with Your Application:**

   While running tests in open mode, you can interact with your application in real-time. You can pause, stop, or rerun tests as needed.

6. **Stop Cypress:**

   Once you've finished running your tests, you can close the Cypress Test Runner window, and it will automatically shut down.

## Important Notes

- Ensure that you have appropriate configurations set for Cypress as per your testing requirements.
- Cypress requires a modern version of Node.js. If you encounter issues, make sure you are using a supported version.

This README includes instructions on cloning the repository, installing Cypress, and running tests both in the default open mode and in headless mode.
```