angularjs-project-example
===
This is the structure for an `angularjs@1.x.x` project.

#### Common Scripts
* Download npm dependencies: `npm install`
* Run unit tests: `npm test`
* Run unit tests with code coverage: `npm run test:cover`
  * The coverage format can be configured adding `-- --coverage lcov`, more formats [here](https://github.com/karma-runner/karma-coverage/blob/HEAD/docs/configuration.md).
* Lint JS and CSS files: `npm run lint`
* Run app for development: `npm start`
* Build app for production: `npm run build`
  * Result is placed in "dist" folder
  * Build app with custom env: `npm run build -- --env.BASE_URL=http://localhost:8080`

#### e2e tests
* Make sure webdriver is updated: `npm run webdriver:update`
* Run app for development without browser: `npm run serve`
* Run e2e tests: `npm run e2e -- --baseUrl http://localhost:8080 --specs e2e/load.spec.js`
