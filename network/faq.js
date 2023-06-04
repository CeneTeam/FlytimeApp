import { instance } from "./axios";

export const getFaqData = async () => {
  const { data } = await instance.get("64276b96208178fae7230f40");
  return data;
};
