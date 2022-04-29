exports.config ={

    
    runner:'local',
    path: '/wd/hub',
    port :4723,
    
    host :'localhost',
    
    logLevel:'info',
    framework:'cucumber',
    /*mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },*/
    maxInstances: 10,
    
    specs: [
        './test/features/**/*.feature'
    ],
    capabilities:[{
        "platformName":"Android",
        "automationName":"UiAutomator2",
        "udid":"07c55fe10406",
        "appPackage":"com.android.chrome",
        "appActivity":"com.google.android.apps.chrome.Main",
        "noReset": true,
        "newCommandTimeout":240,
       
    }],
     //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./test/features/step-definitions/*.ts'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '@demo',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
    
    
    }