module.exports = {
    verbose: true,
    collectCoverageFrom: [
        "**/src/**/*.{js,jsx}",
        "!**/src/js/services/api/**",
        "!**/src/js/index.js",
        "!**/src/js/store/**",

    ],
    "setupTestFrameworkScriptFile": "<rootDir>/test-framework.config.js",
};