'use strict';

const modernBrowsers = [
  'last 1 Chrome versions',
  'last 1 Firefox versions',
  'last 1 Safari versions'
];

const legacyBrowsers = [
  'ie 11',
  'last 5 Chrome versions',
  'last 5 Firefox versions',
  'last 5 Safari versions'
];

let browsers = [];

const isCI = !!process.env.CI;

const isLegacyProduction = process.env.EMBER_ENV === 'production-legacy';

if (isCI || isLegacyProduction) {
  browsers = legacyBrowsers;
} else {
  browsers = modernBrowsers;
}

module.exports = {
  browsers: browsers
};
