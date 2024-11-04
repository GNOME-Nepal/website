import axios from "../lib/axios.js";

export const getBaseId = async () => {
  const res = await axios.get("/meta/bases");
  return res.data;
};

export const getEmails = async (baseid) => {
  const res = await axios.get(`/${baseid}/emails`);
  return res.data;
};
export const addEmail = async (baseid, email) => {
  const data = {
    records: [
      {
        fields: {
          Email: email,
        },
      },
    ],
  };
  const res = await axios.post(`/${baseid}/emails`, data);
  return res.status;
};
