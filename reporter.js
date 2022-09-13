const reporter = require("cucumber-html-reporter")

const options = { 
    theme: 'bootstrap',
     jsonFile: 'cucumber_report.json',
    output:'reports/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata:{
        'App Version': '1.0.0',
        'Test Environment': 'STAGING',
        Browser: 'Chrome 105.0',
        Platform: 'Window 10',
    },       
}
reporter.generate(options)