import React from "react";
import styles from "../styles/mainlayout.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import fr from "../locales/fr";
import bg from "../locales/bg";
import hu from "../locales/hu";
import moment from "moment-business-days";
import { Select } from "antd";
const { Option } = Select;

export default function MainLayout({ children }) {
  const router = useRouter();
  const locale = router.locale;
  const locales = router.locales;
  let t = "";

  switch (locale) {
    case "bg":
      t = bg;
      break;
    case "hu":
      t = hu;
      break;
    default:
      t = fr;
      break;
  }
  const { adresse, promise_date, name } = router.query;
  const handleChange = (value) => {
    router.push("/", "/", { locale: value });
  };
  return (
    <>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
      <header className={styles.Header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src="/logo-JW.png"
                alt="logo jeld wen"
                width={220}
                height={40}
              />
            </a>
          </Link>
        </div>

        <h1 className={styles.HeaderTitle}>{t.tile}</h1>

        <Select
          defaultValue={
            <Image
              src={`/flags-icons/${locale}.png`}
              alt="logo jeld wen"
              width={40}
              height={40}
            />
          }
          style={{ width: 120 }}
          dropdownStyle={{ textAlign: "center" }}
          bordered={false}
          onChange={handleChange}
        >
          {locales.map((element) =>
            element !== locale ? (
              <Option value={element}>
                <Image
                  src={`/flags-icons/${element}.png`}
                  alt="logo jeld wen"
                  width={40}
                  height={40}
                />
              </Option>
            ) : (
              ""
            )
          )}
        </Select>

        {adresse && promise_date && (
          <div className={styles.deliveryInformations}>
            <p style={{ textAlign: "center", width: "90%", margin: "auto" }}>
              {t.delivery_adress} : {adresse}
            </p>

            <p>{name}</p>
            <p style={{ textAlign: "center" }}>
              {t.date_delivery} :{moment(promise_date).format("DD MMMM YYYY")}
            </p>
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer
        style={{
          position: "relative",
          bottom: 0,
          width: "100%",
          backgroundColor: "red",
          height: "50px",
        }}
      >
        Jeld wen inc
      </footer>
    </>
  );
}
