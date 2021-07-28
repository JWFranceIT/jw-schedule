import React from "react";
import { defaultFetch } from "../api/database";
import { GET_PLANNING_HOURS, GET_SCHEDULES_BY_ZONE } from "../api/queries";
import Calendar from "../components/Calendar";

export default function toto({ schedulesByZone, planningReceptionZone }) {
  return (
    <Calendar
      planningReceptionZone={planningReceptionZone}
      schedulesByZone={schedulesByZone}
    />
  );
}

export async function getServerSideProps(context) {
  const {
    data: { schedules },
  } = await defaultFetch(GET_SCHEDULES_BY_ZONE, {
    reception_zone: context.query.reception_zone,
  });

  const {
    data: { receptionZone },
  } = await defaultFetch(GET_PLANNING_HOURS, {
    reception_zone: context.query.reception_zone,
  });

  return {
    props: {
      schedulesByZone: schedules,
      planningReceptionZone: receptionZone,
    },
  };
}
