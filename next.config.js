module.exports = {
  reactStrictMode: true,
  env: {
    SERVER: "https://jw-schedule.herokuapp.com",
  },
  i18n: {
    locales: [
      "en",
      "fr",
      "bg",
      "es_ES",
      "lt",
      "ro",
      "hu",
      "ru_RU",
      "de_DE",
      "et_EE",
    ],
    defaultLocale: "fr",
    queryParameter: "lang",
    api: {
      __: "translate",
      __n: "translateN",
    },
  },
};
