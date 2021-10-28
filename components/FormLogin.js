import React, { useState, useEffect, useMemo } from "react";
import { Form, Input, Button, AutoComplete } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import ChangeAppointementModal from "./ChangeAppointementModal";
import { useRouter } from "next/router";
import { login } from "../api/database";
import { useIntl } from "react-intl";
import styles from "../styles/Home.module.css";

const FormLogin = ({ providers }) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  const dataSource = providers.flatMap((x) => x.name);
  const router = useRouter();
  const { formatMessage: t } = useIntl();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("errorCredentials");
  const [existingSlot, setExistingSlot] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    forceUpdate({});
  }, []);
  const [data, setData] = useState([]);
  const onFinish = async ({ provider, product_order }) => {
    login(provider, product_order).then((data) => {
      if (data.statusCode === 200 && !data.isExist) {
        router.push({
          pathname: "/schedule",
          query: data,
        });
      } else if (data.statusCode === 200 && data.isExist) {
        setData({ ...data, startRDV: data.isExist?.start });
        setExistingSlot(true);
        setVisible(true);
      } else {
        setErrorMessage(data.message);
        setError(true);
      }
    });
  };
  const [state, setState] = useState(false);

  return (
    <div className={styles.formContainer}>
      {/*error && <h2 className={styles.error}>{t({ id: "errorCredentials" })}</h2>*/}
      {error && <h2 className={styles.error}>{t({ id: errorMessage })}</h2>}
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
          label={t({ id: "label1" })}
          name="provider"
          rules={[
            {
              required: true,
              message: t({ id: "messageLabel1" }),
            },
          ]}
          validateStatus={error ? "error" : ""}
        >
          <AutoComplete
            dataSource={dataSource}
            placeholder={t({ id: "label1" })}
            onSearch={(value) =>
              value.length >= 3
                ? setState(true) && setError(false)
                : setState(false)
            }
            onSelect={() => {
              setState(false) && setError(false);
            }}
            filterOption={(inputValue, option) =>
              option.props.children
                .toUpperCase()
                .indexOf(inputValue.toUpperCase()) !== -1
            }
            onBlur={() => {
              setState(false) && setError(false);
            }}
            open={state}
            defaultActiveFirstOption={false}
          />
        </Form.Item>
        <Form.Item
          label={t({ id: "label2" })}
          name="product_order"
          rules={[
            {
              required: true,
              message: t({ id: "messageLabel2" }),
            },
          ]}
          validateStatus={error ? "error" : ""}
        >
          <Input placeholder={t({ id: "label2" })} autoComplete="off" />
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
              {t({ id: "buttonConnect" })}
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
