import axios from "axios";
import useSWR from "swr";
import { Event } from "./types";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useEvents(
  shouldFetch: boolean,
  page: number,
  search: string,
  actorID: string,
  actionID: string,
  targetID: string
) {
  const { data, error } = useSWR(
    shouldFetch
      ? `https://instalog-api.herokuapp.com/api/events?page=${page}&search=${search}&actor_id=${actorID}&action_id=${actionID}&target_id=${targetID}`
      : null,
    fetcher
  );
  return {
    events: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useEvent(id: string) {
  const { data, error } = useSWR(
    `https://instalog-api.herokuapp.com/api/events/${id}`,
    fetcher
  );

  const event: Event = data;
  return {
    event: event,
    isLoading: !error && !data,
    isError: error,
  };
}
