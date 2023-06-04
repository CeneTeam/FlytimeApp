import { instance } from "./axios";

export const getContactData = async () => {
  const { data } = await instance.get("64283ea35c63d6c0ff45c004");
  return data;
};
