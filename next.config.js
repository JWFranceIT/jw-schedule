const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  reactStrictMode: true,
  env: {
    // SERVER_LOCAL: "https://jw-schedule.herokuapp.com",
    SERVER_LOCAL: "http://localhost:1337",
  },
  i18n: {
    locales: ["en", "fr", "bg", "es", "lt", "ro", "hu", "ru", "de", "et"],
    defaultLocale: "fr",
    queryParameter: "lang",
    api: {
      __: "translate",
      __n: "translateN",
    },
  },
});
