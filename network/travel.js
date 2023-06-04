import { instance } from "./axios";

export const getTravelData = async () => {
  const { data } = await instance.get("64282f745c63d6c0ff45b263");
  return data;
};
