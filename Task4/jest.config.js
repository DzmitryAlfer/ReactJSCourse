module.exports = {
    verbose: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/coverage/**",
        "!**/debug/**",
        "!**/release/**",
        "!**/jest.config.js",
        "!**/webpack.config.js",
    ]
};