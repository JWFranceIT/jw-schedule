import React from "react";
import styles from "../styles/mainlayout.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment-business-days";
import { Select } from "antd";
const { Option } = Select;
import { useIntl } from "react-intl";
import "moment/min/locales";

export default function MainLayout({ children }) {
  const router = useRouter();
  const locale = router.locale;
  const locales = router.locales;
  const { formatMessage: t } = useIntl();
  const { adresse, promise_date, name } = router.query;
  moment.locale(locale);
  const handleChange = (value) => {
    router.replace(router.asPath, router.asPath, { locale: value });
  };

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.banner}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                {/*
                //TODO add image for online
                <Image
                  src="/logo-JW.png"
                  alt="logo jeld wen"
                  width={220}
                  height={40}
                />
              */}
                LOGO INCOMING
              </a>
            </Link>
          </div>

          <h1 className={styles.HeaderTitle}>{t({ id: "title" })}</h1>

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
        </div>
        {adresse && promise_date && (
          <div className={styles.deliveryInformations}>
            <p>
              {t({ id: "deliveryAdress" })} : {adresse}
            </p>
            <p>{name}</p>
            <p>
              {t({ id: "deliveryDate" })} :
              {moment(promise_date).format("DD MMMM YYYY")}
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
