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
import timeCalcul from "../lib/TimeCalcul";


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
  const endHourPlanning =  endMinutePlanning === 30 ? moment(timeReceptionZone?.end, "HH:mm:ss.sss")
    .subtract(1, "hour")
    .hours() :  moment(timeReceptionZone?.end, "HH:mm:ss.sss").hours()

  useEffect(() => {
    if (!scheduleData) return [];
    scheduleData.data.schedules.map((schedule) => {
      const regex = new RegExp("^(..)(\\d)(EXW+)([0-9]+)", "g");
      const toto = moment(schedule.start)
        .set({ hour: 0, minute: 0 })
        .toDate();
      const tata = moment(schedule.end)
      .set({ hour: 23, minute: 59 })
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
    timeReceptionZone
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
  
  const handleClickSlot = (e) => {
    const { start} = e;

    const end = moment(start).add(time, "m").toDate();
    const promiseDate = moment(promise_date).toDate();
      setEvent({
        ...e,
        provider: id,
        reception_zone: reception_zone,
        product_order: product_order,
        end: end,
        promise_date: promiseDate,
        provider_name: provider,
      });
    
    showModal();
  };

  const eventStyleGetter = () => {
    return {
      style: {
        backgroundColor: "#FF4901",
      },
    };
  };
  
  const sortedEvents= lodash.sortBy(events, ["start"]);   
  
  const slotStyleGetter = (date) => { 
    const rangeSlots = timeCalcul(date, sortedEvents, time, startHourPlanning, startMinutePlanning, endHourPlanning, endMinutePlanning);
    if (
      rangeSlots.find(
        (element) => moment(element).toString() == moment(date).toString()
      ) !== undefined
    ) {
      return {
        className: styles.slotDisable,
      };
    }
    return;
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
        // defaultDate={
        //   moment().startOf("day")
        // }
        getNow={() =>
          moment(promise_date).isBefore(moment())
            ? new Date(moment().startOf("day"))
            : new Date(moment(promise_date).startOf("day"))
        }
        onNavigate={() =>
          moment(promise_date).isBefore(moment().toDate())
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
        // max={new Date(0, 0, 0, endHourPlanning, endMinutePlanning)}
        max={new Date(0, 0, 0, 21, 0)}
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
