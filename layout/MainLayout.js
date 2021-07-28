import React from "react";
import styles from "../styles/mainlayout.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment-business-days";
import { Menu } from "antd";
const { SubMenu } = Menu;

export default function MainLayout({ children }) {
  const router = useRouter();
  const { adresse, promise_date } = router.query;
  const handleClick = (e) => {
    alert("changement de langue");
  };
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.logo}>
          <Image
            src="/logo-JW.png"
            alt="logo jeld wen"
            width={220}
            height={40}
          />
        </div>

        <h2 className={styles.HeaderTitle}>Planning réception</h2>

        <div>TODO CHOOSE LANGAGE</div>

        {adresse && promise_date && (
          <div className={styles.deliveryInformations}>
            <span style={{ textAlign: "center" }}>
              Lieu de livraison : {adresse}
            </span>
            <br />
            <span> TODO AJOUTER LE NOM DE LA ZONE</span>
            <span style={{ textAlign: "center" }}>
              Date de livraison prévue :
              {moment(promise_date).format("DD MMMM YYYY")}
            </span>
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
