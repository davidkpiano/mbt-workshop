# Model-Based Testing with `@xstate/test` and React Workshop

Welcome to the workshop! To get started, follow these instructions:

1. Make sure you have Node and NPM installed.
1. Run `npm install` or `yarn install` to install all dependencies.
   - This is a React project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
1. Run `npm start` to start the app.

## Goal

The goal of this workshop is to demonstrate how to use `@xstate/test` with React to automate the generation of integration and end-to-end (E2E) tests of an example application.

![End-to-end tests for Feedback app being run in a browser with Puppeteer](https://i.imgur.com/W5CaIIP.gif)

## Running the Tests

To run the **integration tests**, run `npm test`. This will run the tests found in [`./src/App.test.js`](https://github.com/davidkpiano/xstate-test-demo/blob/master/src/App.test.js).

To run the **E2E tests**, run `npm run e2e`. This will run the tests found in [`./src/App.e2e.js`](https://github.com/davidkpiano/xstate-test-demo/blob/master/src/App.test.js).

## Resources

- [Github: `@xstate/test`](https://github.com/davidkpiano/xstate/tree/master/packages/xstate-test)
- [Slides: Write Less Tests! From Automation to Autogeneration](https://slides.com/davidkhourshid/mbt/) (React Rally 2019)
- [Article: Model-Based Testing in React with State Machines](https://css-tricks.com/?p=286484) (CSS-Tricks)
