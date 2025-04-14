/* eslint-disable import/no-extraneous-dependencies */

import 'angular';
import 'angular-mocks';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

// require all test files using special Webpack feature
// https://webpack.github.io/docs/context.html#require-context
const testsContext = require.context('.', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
