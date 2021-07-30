import React, { useState } from "react";
import { DatePicker, Modal, Space } from "antd";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import moment from "moment";
import { validate } from "../api/database";

export default function EditAppointementModal({
  show,
  toggle,
  event,
  events,
  setEvent,
  setEvents,
  startHourPlanning,
  endHourPlanning,
}) {
  console.log({ startHourPlanning });
  console.log({ endHourPlanning });
  const [confirmLoading, setConfirmLoading] = useState(false);
  const router = useRouter();
  if (!event) return null;
  const handleCancel = () => {
    toggle();
    setEvent([]);
  };

  const handleOk = () => {
    const {
      start,
      end,
      provider,
      product_order,
      reception_zone,
      promise_date,
      provider_name,
    } = event;
    console.log("inOk", { event });
    // events.push(event);
    // setEvents(events);

    // validate(provider, product_order, start, end, reception_zone, promise_date);
    // setConfirmLoading(true);

    // setTimeout(() => {
    //   const startEvent = moment(start).toString();
    //   const endEvent = moment(end).toString();
    //   toggle(false);
    //   setConfirmLoading(false);
    //   router.replace({
    //     pathname: "/",
    //     query: { startEvent, endEvent, provider_name, product_order },
    //   });
    // }, 2000);
  };
  console.log({ event });
  const onOk = (value) => {
    console.log({ value });
  };
  const onChangeTime = (time) => {
    console.log(time);
  };
  const disabledHours = () => {
    const hours = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23,
    ];
    const result = hours.filter(
      (hour) => hour < startHourPlanning || hour > endHourPlanning
    );

    return result;
  };
  return (
    <Modal
      style={{ top: "33%" }}
      title="Edition d'une réservation"
      visible={show}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={confirmLoading}
    >
      <Space direction="vertical" size={12}>
        <DatePicker.RangePicker
          showTime={{ format: "HH:mm" }}
          format="DD-MM-YYYY HH:mm"
          onChange={onChangeTime}
          onOk={onOk}
          minuteStep={30}
          disabledHours={disabledHours}
          hideDisabledOptions={true}
        />
      </Space>
    </Modal>
  );
}
