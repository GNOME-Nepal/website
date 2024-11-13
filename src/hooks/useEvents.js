import { EVENTS_QUERY_KEY } from "@/constants";
import { getEvents } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useEvents = () =>
  useQuery({
    queryKey: EVENTS_QUERY_KEY,
    queryFn: getEvents,
  });
