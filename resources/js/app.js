/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */


const {default: GoldenRoutes} = require('./Routes/GoldenRoutes');

require('./bootstrap');

/**
 * Load React Components via router
 */
require('./Routes/GolderRouter');
