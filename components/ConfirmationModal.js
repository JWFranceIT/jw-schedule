import React, { useState } from "react";
import { Modal } from "antd";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import moment from "moment";
import { validate } from "../api/database";
import { useIntl } from "react-intl";
export default function ConfirmationModal({
  show,
  toggle,
  event,
  events,
  setEvent,
  setEvents,
}) {
  const { formatMessage: t } = useIntl();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    t({ id: "textConfirmationModal" })
  );

  const [isConfirm, setIsConfirm] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  if (!event) return null;
  const handleCancel = () => {
    toggle();
    setEvent([]);
  };
  const handleOk = async () => {
    const {
      start,
      end,
      provider,
      product_order,
      reception_zone,
      promise_date,
      provider_name,
    } = event;

    events.push(event);
    setEvents(events);
    setConfirmLoading(true);

    await validate(
      provider,
      product_order,
      start,
      end,
      reception_zone,
      promise_date
    ).then((res) => {
      res.data?.errors
        ? (setIsError(true), setModalText(t({ id: "errorConfirmation" })))
        : (setIsConfirm(true),
          setModalText(
            `${modalText} ${moment(start).format("DD-MM-YYYY HH:mm")}`
          ));
    });
    setTimeout(() => {
      setConfirmLoading(false);
      toggle(false);
      router.replace({ pathname: "/" });
    }, 5000);
  };

  return (
    <Modal
      style={{ top: "33%" }}
      title={t({ id: "titleConfirmationModal" })}
      visible={show}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={confirmLoading}
    >
      {!isEmpty(event) &&
        !isError &&
        !isConfirm &&
        `${t({ id: "textConfirmationModal" })} ${moment(event.start).format(
          "DD-MM-YYYY HH:mm"
        )} ?`}

      {isConfirm && (
        <h2>
          <span className="checked">&#10003;</span>
          {modalText}
        </h2>
      )}
      {isError && (
        <h2>
          <span style="font-size:50px;">&#10060;</span>
          {modalText}
        </h2>
      )}
    </Modal>
  );
}
