import axios from "../lib/axios.js";
const token = import.meta.env.VITE_AIRTABLE_TOKEN;
console.log(token)
export const getBaseId = async () => {
  const res = await axios.get("/meta/bases", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getEmails = async (baseid) => {
  const res = await axios.get(`/${baseid}/emails`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
export const addEmail = async (baseid, email) => {
  const data = {
    records : [{
        fields: {
          Email: email,
        },
    }]
  }
  const res = await axios.post(
    `/${baseid}/emails`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.status;
};
