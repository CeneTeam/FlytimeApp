import { instance } from "./axios";

export const getRulesData = async () => {
  const { data } = await instance.get("64283bb35c63d6c0ff45bcb3");
  return data;
};
