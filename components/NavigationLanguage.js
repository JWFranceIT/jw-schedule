import React from "react";
import { Menu } from "antd";
import Image from "next/image";
const { SubMenu } = Menu;

export default function NavigationLanguage() {
  const handleClick = (e) => {
    console.log("TOTO");
  };
  return (
    <Menu onClick={handleClick} style={{ width: 100 }} mode="horizontal">
      <SubMenu
        key="sub1"
        title={
          <Image
            src="/flags-icons/france.png"
            alt="french langage"
            width={20}
            height={20}
          />
        }
      >
        <Menu.Item key="1">
          <Image
            src="/flags-icons/hongrie.png"
            alt="french langage"
            width={20}
            height={20}
          />
        </Menu.Item>
        <Menu.Item key="2">
          <Image
            src="/flags-icons/bulgarie.png"
            alt="french langage"
            width={20}
            height={20}
          />
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}
