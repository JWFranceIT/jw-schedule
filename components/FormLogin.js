import React, { useState, useEffect, useMemo } from "react";
import { Form, Input, Button, AutoComplete } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import ChangeAppointementModal from "./ChangeAppointementModal";
import { useRouter } from "next/router";
import { login } from "../api/database";
import moment from "moment-business-days";
import en from "../locales/en";
import fr from "../locales/fr";
import bg from "../locales/bg";
import hu from "../locales/hu";
import styles from "../styles/Home.module.css";

const FormLogin = ({ providers }) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  const dataSource = providers.flatMap((x) => x.name);
  const router = useRouter();
  const { locale } = router;
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
  console.log("TOTO", t);
  const { startEvent, endEvent, provider_name, product_order } = router.query;
  const [error, setError] = useState(false);
  const [existingSlot, setExistingSlot] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    forceUpdate({});
  }, []);
  const [data, setData] = useState([]);
  const onFinish = async ({ provider, product_order }) => {
    login(provider, product_order).then((data) => {
      if (data.statusCode === 200 && !data.isExist) {
        router.replace({
          pathname: "/schedule",
          query: data,
        });
      } else if (data.statusCode === 200 && data.isExist) {
        setData({ ...data, startRDV: data.isExist?.start });
        setExistingSlot(true);
        setVisible(true);
      } else {
        setError(true);
      }
    });
  };
  const [state, setState] = useState(false);

  return (
    <div className={styles.formContainer}>
      {error && <h2 className={styles.error}>{t.errorCredentials}</h2>}
      {existingSlot && (
        <ChangeAppointementModal
          data={data}
          show={visible}
          toggle={setVisible}
        />
      )}
      <Form
        form={form}
        name="horizontal_login"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label={t.label1}
          name="provider"
          rules={[
            {
              required: true,
              message: t.messageLabel1,
            },
          ]}
          validateStatus={error ? "error" : ""}
        >
          <AutoComplete
            dataSource={dataSource}
            placeholder={t.label1}
            onSearch={(value) =>
              value.length >= 3 ? setState(true) : setState(false)
            }
            onSelect={() => setState(false)}
            filterOption={(inputValue, option) =>
              option.props.children
                .toUpperCase()
                .indexOf(inputValue.toUpperCase()) !== -1
            }
            onBlur={() => setState(false)}
            open={state}
            defaultActiveFirstOption={false}
          />
        </Form.Item>
        <Form.Item
          label={t.label2}
          name="product_order"
          rules={[
            {
              required: true,
              message: t.messageLabel2,
            },
          ]}
          validateStatus={error ? "error" : ""}
        >
          <Input placeholder={t.label2} autoComplete="off" />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Connexion
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
