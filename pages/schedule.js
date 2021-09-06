import React from "react";
import { defaultFetch } from "../api/database";
import { GET_PLANNING_HOURS } from "../api/queries";
import Calendar from "../components/Calendar";

export default function Schedule({ planningReceptionZone }) {
  return <Calendar planningReceptionZone={planningReceptionZone} />;
}

export async function getServerSideProps(context) {
  const {
    data: { receptionZone },
  } = await defaultFetch(GET_PLANNING_HOURS, {
    reception_zone: context.query.reception_zone,
  });

  return {
    props: {
      planningReceptionZone: receptionZone,
    },
  };
}
