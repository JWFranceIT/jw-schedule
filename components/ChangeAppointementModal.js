import React, { useState } from "react";
import { Modal } from "antd";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import moment from "moment";
import { useDeleteBooking } from "../api/bookings";

export default function ChangeAppointementModal({ show, toggle, data }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const router = useRouter();
  const { formatMessage: t } = useIntl();
  const { mutate: deleteBooking } = useDeleteBooking();
  const handleCancel = () => {
    toggle();
  };

  const deleteEvent = (data) => {
    deleteBooking({ id: data.isExist.id });
  };

  const handleOk = () => {
    setConfirmLoading(true);
    deleteEvent(data);
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
      title={t({ id: "titleChangeModal" })}
      visible={show}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={confirmLoading}
    >
      <p>
        {`${t({ id: "textChangeModal" })} ${moment(data.startRDV).format(
          "DD-MM-YYYY HH:mm"
        )} ?`}
      </p>
      <p>{`${t({ id: "advertissment" })} `}</p>
    </Modal>
  );
}
