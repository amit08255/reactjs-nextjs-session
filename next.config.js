const path = require('path');
const withCSS = require('@zeit/next-css');

//Used to set folders as alias to directly use in nextjs
const nextConfiguration = withCSS({
  publicRuntimeConfig: {
    // Will be available on both server and client
    NODE_ENV: process.env.NODE_ENV
  },
  webpack: config => {
    config.resolve.alias['storeon'] = path.join(__dirname, 'storeon'); //folder alias 1
    config.resolve.alias['stores'] = path.join(__dirname, 'stores'); //folder alias 2
    return config;
  }
})

module.exports = nextConfiguration;