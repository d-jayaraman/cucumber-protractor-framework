'use strict';

exports.config = {
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['features/**/*.feature'],
    cucumberOpts: {
        require: ['features/**/step_definitions/**/*Steps.js']
    },
    
    baseUrl : 'http://www.todomvc.com/'
    
};