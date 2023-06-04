import { instance } from "./axios";

export const getAboutCarouselData = async () => {
  const { data } = await instance.get("64286e345c63d6c0ff45d0e4");
  return data;
};

export const getAboutPageData = async () => {
  const { data } = await instance.get("642873105c63d6c0ff45d2bf");
  return data;
};
export const getFlashbackYears = async () => {
  const { data } = await instance.get("6428bac95ce03e2e783f8bdf");
  return data;
};

export const getFlashbackDay = async (dayId) => {
  const { data } = await instance.get(dayId);
  return data;
};
