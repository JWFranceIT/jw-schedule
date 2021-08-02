import React, { useState } from "react";
import { Modal } from "antd";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import moment from "moment";
import { validate } from "../api/database";

export default function ChangeAppointementModal({ show, toggle, data }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const router = useRouter();

  const handleCancel = () => {
    toggle();
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      toggle(false);
      setConfirmLoading(false);
      router.replace({
        pathname: "/schedule",
        query: data,
      });
    }, 2000);
  };
  return (
    <Modal
      style={{ top: "33%" }}
      title="Modifier réservation"
      visible={show}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={confirmLoading}
    >
      <p>
        Êtes-vous sûr de modifier votre réservation du{" "}
        {moment(data.startRDV).format("DD-MM-YYYY HH:mm")} ?
      </p>
    </Modal>
  );
}
