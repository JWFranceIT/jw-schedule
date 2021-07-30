import React, { useState } from "react";
import { Modal } from "antd";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import moment from "moment";
import { validate } from "../api/database";

export default function ConfirmationModal({
  show,
  toggle,
  event,
  events,
  setEvent,
  setEvents,
}) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
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
        ? (setIsError(true), setModalText("ERROR"))
        : (setIsConfirm(true),
          setModalText(
            `Votre réservation est confirmé pour le ${moment(start).format(
              "DD-MM-YYYY HH:mm"
            )}`
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
      title="Réserver créneau"
      visible={show}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={confirmLoading}
    >
      {!isEmpty(event) &&
        !isError &&
        !isConfirm &&
        `Confirmez-vous votre réservation le ${moment(event.start).format(
          "DD-MM-YYYY HH:mm"
        )} ?`}
      {isConfirm && (
        <h1>
          <span className="checked">&#10003;</span>
          {modalText}
        </h1>
      )}
      {isError && <h1>{modalText}</h1>}
    </Modal>
  );
}
