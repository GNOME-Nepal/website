import axios from "@/lib/axios";

export const getEvents = async () => {
  const { data } = await axios.get("/events");
  return data;
};
