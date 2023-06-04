import { instance } from "./axios";

export const getFlyVillageData = async () => {
  const { data } = await instance.get("64282540b7b8078c840335fd");
  return data;
};
