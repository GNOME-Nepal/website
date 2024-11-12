import axios from "@/lib/axios";

export const getEvents = async () => {
  const { data } = await axios.get("/events");
  return data;
};

export const getFaqs = async () => {
  const { data } = await axios.get("/faqs");
  return data;
};
