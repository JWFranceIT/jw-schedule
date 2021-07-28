import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import styles from "../styles/Home.module.css";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const AutoCompleteCustom = ({ providers }) => {
  // const dataSource = ["Burns Bay Road", "Downing Street", "Wall Street"];
  return (
    <div className={styles.formContainer}>
      <AutoComplete
        style={{ width: 200 }}
        dataSource={dataSource}
        placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.props.children
            .toUpperCase()
            .indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </div>
  );
};

export default AutoCompleteCustom;
