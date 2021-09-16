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
                <Image
                  src="/logo-JW.png"
                  alt="logo jeld wen"
                  width={220}
                  height={40}
                />
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
        {/* <div className={styles.home}>
            <Link href="/">
              <a>
              <Image
                  src="/icons/exit.png"
                  alt="return to home"
                  width={25}
                  height={25}
                />
              </a>
            </Link>
            </div> */}
        {adresse && promise_date && (
          <div className={styles.deliveryInformations}>
            <p>
              {t({ id: "deliveryAdress" })} : {adresse}
            </p>
            <p>
              {" "}
              {t({ id: "deliveryZone" })} : {name}
            </p>
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
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#1d446b",
          color: "white",
          height: "50px",
        }}
      >
        Jeld wen inc
      </footer>
    </>
  );
}
