const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
module.exports = withSass(withTypescript());
