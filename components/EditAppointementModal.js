// import React, { useState } from "react";
// import { DatePicker, Modal, Space } from "antd";
// import { isEmpty } from "lodash";
// import { useRouter } from "next/router";
// import moment from "moment";
// import { validate } from "../api/database";

// export default function EditAppointementModal({
//   show,
//   toggle,
//   event,
//   events,
//   setEvent,
//   setEvents,
//   startHourPlanning,
//   endHourPlanning,
//   reception_zone
// }) {
//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [isConfirm, setIsConfirm] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const router = useRouter();

//   if (!event) return null;
//   const handleCancel = () => {
//     toggle();
//     setEvent([]);
//   };
//   const handleOk = () => {}
//   const onOk = async (value) => {
//     const {
//       provider,
//       product_order,
//       reception_zone,
//       promise_date,
//       provider_name,
//     } = event;

//     const start = moment(value[0]).toDate()
//     const end = moment(value[1]).toDate()
//     events.push(event);
//     setEvents(events);
//     setConfirmLoading(true);

//     await validate(
//       provider,
//       product_order,
//       start,
//       end,
//       reception_zone,
//       promise_date
//     ).then((res) => {
//       alert(res.JSON())
//     });
//     setConfirmLoading(false)
//   };
//   const onChangeTime = (time) => {

//   };
//   const disabledHours = () => {
//     const hours = [
//       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//       21, 22, 23,
//     ];
//     const result = hours.filter(
//       (hour) => hour < startHourPlanning || hour > endHourPlanning
//     );

//     return result;
//   };
//   return (
//     <Modal
//       style={{ top: "33%" }}
//       title="Edition d'une réservation"
//       visible={show}
//       onCancel={handleCancel}
//       confirmLoading={confirmLoading}
//     >
//       <Space direction="vertical" size={12}>
//         <DatePicker.RangePicker
//           showTime={{ format: "HH:mm" }}
//           format="DD-MM-YYYY HH:mm"
//           onChange={onChangeTime}
//           onOk={onOk}
//           minuteStep={30}
//           disabledHours={disabledHours}
//           hideDisabledOptions={true}
//         />
//       </Space>
//     </Modal>
//   );
// }
