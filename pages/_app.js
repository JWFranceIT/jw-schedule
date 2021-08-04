import "../styles/globals.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { DeviceContextProvider } from "../lib/deviceContext";
import { useRouter } from "next/router";
import Head from "next/head";
import MainLayout from "../layout/MainLayout";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from "antd";
import frFR from "../locales/fr";
import bgBG from "../locales/bg";
import huHU from "../locales/hu";
import deDE from "../locales/de";
import esES from "../locales/es";
import etEE from "../locales/et";
import ltLT from "../locales/lt";
import roRO from "../locales/ro";
import ruRU from "../locales/ru";
import enGB from "../locales/en";
import fr_FR from "antd/lib/locale/fr_FR";
import bg_BG from "antd/lib/locale/bg_BG";
import de_DE from "antd/lib/locale/de_DE";
import en_GB from "antd/lib/locale/en_GB";
import es_ES from "antd/lib/locale/es_ES";
import et_EE from "antd/lib/locale/et_EE";
import hu_HU from "antd/lib/locale/hu_HU";
import lt_LT from "antd/lib/locale/lt_LT";
import ro_RO from "antd/lib/locale/ro_RO";
import ru_RU from "antd/lib/locale/ru_RU";

function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const { locale, defaultLocale } = useRouter();
  const [currentLocale, setCurrentLocale] = useState(
    `${locale}_${locale.toUpperCase()}`
  );

  useEffect(() => {
    setCurrentLocale(`${locale}_${locale.toUpperCase()}`);
  }, [locale]);

  const messages = {
    fr: frFR,
    bg: bgBG,
    hu: huHU,
    de: deDE,
    es: esES,
    et: etEE,
    lt: ltLT,
    ro: roRO,
    ru: ruRU,
    en: enGB,
  };
  const antdLocale = {
    fr_FR: fr_FR,
    bg_BG: bg_BG,
    hu_HU: hu_HU,
    de_DE: de_DE,
    es_ES: es_ES,
    et_ET: et_EE,
    lt_LT: lt_LT,
    ro_RO: ro_RO,
    ru_RU: ru_RU,
    en_EN: en_GB,
  };
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Jeld Wen Reception</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon.ico" rel="icon" type="image/png" sizes="16x16" />

        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <ConfigProvider locale={antdLocale[currentLocale]}>
          <IntlProvider
            defaultLocale={defaultLocale}
            locale={locale}
            messages={messages[locale]}
          >
            <DeviceContextProvider>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </DeviceContextProvider>
          </IntlProvider>
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
