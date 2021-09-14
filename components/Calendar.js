import React, { useState, useEffect, useMemo } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment-business-days";
import ConfirmationModal from "./ConfirmationModal";
import EditAppointementModal from "./EditAppointementModal";
import { usePlanningHours, useScheduleByZone } from "../api/bookings";
import { useRouter, withRouter } from "next/router";
import MyWorkWeek from "./MyWorkWeek";
import lodash from "lodash";
import "moment/min/locales";
import styles from "../styles/Calendar.module.css";
import { useIntl } from "react-intl";

const Calendar = ({
  // schedulesByZone: scheduleData,
  planningReceptionZone: timeReceptionZone,
}) => {
  const router = useRouter();
  const { formatMessage: t } = useIntl();
  moment.locale(router.locale);
  const localizer = momentLocalizer(moment);
  const {
    id,
    provider,
    product_order,
    promise_date,
    reception_zone,
    time,
    JW,
  } = router.query;
  const { data: scheduleData } = useScheduleByZone({ reception_zone });

  const [event, setEvent] = useState([]);
  const [events, setEvents] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);

  const startHourPlanning = moment(
    timeReceptionZone?.start,
    "HH:mm:ss.sss"
  ).hours();
  const startMinutePlanning = moment(
    timeReceptionZone?.start,
    "HH:mm:ss.sss"
  ).minutes();
  const endMinutePlanning = moment(timeReceptionZone?.end, "HH:mm:ss.sss")
    .subtract(30, "minutes")
    .minutes();

  const endHourPlanning = moment(timeReceptionZone?.end, "HH:mm:ss.sss")
    .subtract(1, "hour")
    .hours();

  useEffect(() => {
    if (!scheduleData) return [];
    scheduleData.data.schedules.map((schedule) => {
      const regex = new RegExp("^(..)(\\d)(EXW+)([0-9]+)", "g");
      const toto = moment(schedule.start)
        .set({ hour: startHourPlanning, minute: startMinutePlanning })
        .toDate();
      const tata = moment(schedule.end)
        .set(moment(timeReceptionZone.end))
        .toDate();

      schedule.start = schedule.full_day ? toto : new Date(schedule.start);
      schedule.end = schedule.full_day ? tata : new Date(schedule.end);
    }),
      setEvents(scheduleData.data.schedules);
  }, [
    scheduleData,
    endHourPlanning,
    endMinutePlanning,
    startHourPlanning,
    startMinutePlanning,
  ]);

  const ColoredDateCellWrapper = ({ children }) => {
    return React.cloneElement(React.Children.only(children), {
      style: {
        backgroundColor: "#689D71",
      },
    });
  };

  const showModal = () => {
    setVisible(true);
  };
  /**
   * Set the state of edit modal
   */
  const showModalEdit = () => {
    setVisibleEdit(true);
  };
  const fullday = false;
  const handleClickSlot = (e) => {
    const { start, end } = e;

    const test = moment(start).set({ hour: 8, minute: 0 }).toDate();
    const test2 = moment(end).set({ hour: 17, minute: 29 }).toDate();
    const newDateObj = moment(start).add(time, "m").toDate();
    const promiseDate = moment(promise_date).toDate();

    if (fullday) {
      setEvent({
        start: test,
        end: test2,
        provider: id,
        reception_zone: reception_zone,
        product_order: product_order,
        provider_name: provider,
      });
    } else {
      setEvent({
        ...e,
        provider: id,
        reception_zone: reception_zone,
        product_order: product_order,
        end: newDateObj,
        promise_date: promiseDate,
        provider_name: provider,
      });
    }
    showModal();
  };

  const eventStyleGetter = () => {
    return {
      style: {
        backgroundColor: "#FF4901",
      },
    };
  };
  const rangeSlots = [];
  const test = lodash.sortBy(events, ["start"]);
  for (let i = 0; i < test.length; i++) {
    var a = moment(test[i].end);
    var b = moment(test[i + 1]?.start);
    const toto = b.diff(a, "minutes");
    if (toto < time && toto > 0) {
      rangeSlots.push(moment(a).toDate());
    }
  }

  const slotStyleGetter = (date) => {
    if (
      rangeSlots.find(
        (element) => moment(element).toString() == moment(date).toString()
      ) !== undefined
    ) {
      return {
        className: styles.slotDisable,
        // style: {
        //   backgroundColor: "grey",
        // },
      };
    }
    return { style: { backgroundColor: "#689D71" } };
  };

  const EventComponent = ({ event }) => {
    if (JW === "true") {
      return `${event.provider.name}  ${event.product_order}  ${moment(
        event.promise_date
      ).format("DD-MM-YYYY")}`;
    } else if (event.provider.id === id) {
      return "Your actual reservation";
    } else {
      return "";
    }
  };
  const SlotComponent = ({ children, value }) => {
    return React.cloneElement(React.Children.only(children), {
      style: {
        backgroundColor: "#689D71",
      },
    });
  };

  const messages = {
    previous: t({ id: "previous" }),
    next: t({ id: "next" }),
    today: t({ id: "today" }),
  };
  const onSelectEvent = (event) => {
    setEvent(event);
    showModalEdit();
  };
  console.log(
    moment(promise_date).isBefore(moment())
      ? moment().toDate()
      : new Date(promise_date)
  );
  return (
    <>
    <div className={styles.clignote} >Rester appuyer sur votre créneau pour le réserver</div>    
      <BigCalendar
        messages={messages}
        style={{ height: 1800, paddingBottom: "25%", display: "contents" }}
        selectable={JW === "true" ? true : "ignoreEvents"}
        onSelectSlot={handleClickSlot}
        onSelectEvent={JW === "true" ? onSelectEvent : false}
        events={events}
        views={{ myWeek: MyWorkWeek }}
        defaultView={"myWeek"}
        step={30}
        defaultDate={
          moment(promise_date).isBefore(moment())
            ? moment().toDate()
            : new Date(promise_date)
        }
        getNow={() =>
          moment(promise_date).isBefore(moment())
            ? moment().toDate()
            : new Date(promise_date)
        }
        onNavigate={() =>
          moment(promise_date).isBefore(moment())
            ? moment().toDate()
            : new Date(promise_date)
        }
        components={{
          timeSlotWrapper: SlotComponent,
          event: EventComponent,
        }}
        toolbar={true}
        localizer={localizer}
        timeslots={1}
        eventPropGetter={eventStyleGetter}
        slotPropGetter={slotStyleGetter}
        min={new Date(0, 0, 0, startHourPlanning, startMinutePlanning)}
        max={new Date(0, 0, 0, endHourPlanning, endMinutePlanning)}
        // longPressThreshold={50}
        onSelecting={handleClickSlot}
      />
      <ConfirmationModal
        show={visible}
        toggle={setVisible}
        event={event}
        events={events}
        setEvent={setEvent}
        setEvents={setEvents}
      />
      {JW === "true" && (
        <EditAppointementModal
          show={visibleEdit}
          toggle={setVisibleEdit}
          event={event}
          events={events}
          setEvent={setEvent}
          setEvents={setEvents}
          startHourPlanning={startHourPlanning}
          endHourPlanning={endHourPlanning}
        />
      )}
    </>
  );
};

export default withRouter(Calendar);
