import { useQuery, useQueryClient, useMutation } from "react-query";
import { defaultFetch } from "./database";
import {
  GET_ALL_SCHEDULES,
  GET_PROVIDERS,
  GET_SCHEDULES_BY_ZONE,
  SAVE_BOOKING,
  GET_PLANNING_HOURS,
  DELETE_SCHEDULE,
} from "./queries";

export const useAllSchedules = () =>
  useQuery("schedules", () => defaultFetch(GET_ALL_SCHEDULES));

export const useScheduleByZone = ({ reception_zone }) =>
  useQuery(
    ["schedules", { reception_zone }],
    () => defaultFetch(GET_SCHEDULES_BY_ZONE, { reception_zone }),
    { refetchInterval: 5000 }
  );

/**
 * @variables start (Date) end (Date) reception_zone (String) provider (Id) product_order (Number)
 * @returns
 */
export const useSaveBooking = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (variables) => defaultFetch(SAVE_BOOKING, variables),
    {
      onError: (error) => {
        return error;
      },
      onSuccess: () => {
        queryClient.refetchQueries(["schedules"]);
      },
    }
  );
  return mutation;
};

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (variables) => defaultFetch(DELETE_SCHEDULE, variables),
    {
      onError: (error) => {
        return error;
      },
    }
  );
  return mutation;
};
export const useProviders = () =>
  useQuery("providers", () => defaultFetch(GET_PROVIDERS));

export const usePlanningHours = ({ reception_zone }) =>
  useQuery(["receptionZones", { reception_zone }], () =>
    defaultFetch(GET_PLANNING_HOURS, { reception_zone })
  );
