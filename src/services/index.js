import axios from "@/lib/axios";
import Cookies from "js-cookie";

export const getEvents = async () => {
  const { data } = await axios.get("/events");
  return data;
};

export const getFaqs = async () => {
  const { data } = await axios.get("/faqs");
  return data;
};

export const setSubscription = async (email) => {
  const csrfToken = Cookies.get("csrftoken");
  const randomStr = Math.random().toString(36).substring(7); //preventing browser to cache the request
  console.log(csrfToken);
  const { data } = await axios.post(
    `/newsletter/subscribe/?${randomStr}`,
    {
      email,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
    },
  );
  return data;
};
