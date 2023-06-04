import { instance } from "./axios";

export const getHomaPageData = async () => {
  const { data } = await instance.get("6422113b1584c1b915ba691e");
  return data;
};

export const sponsorLogos = async () => {
  const { data } = await instance.get("64276c52208178fae7231159");
  return data;
};

export const getNavItems = async () => {
  const { data } = await instance.get("6433208a0a616c58ea670186");
  return data;
};
