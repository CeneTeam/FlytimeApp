import { instance } from "./axios";

export const getLineupPageData = async () => {
  const { data } = await instance.get("6427755a634f2ff741ed762a");
  return data;
};

export const getLineupCardsData = async () => {
  const { data } = await instance.get("6426186094ee1417153fd4b0");
  return data;
};

export const getLineupFooterCarousel = async () => {
  const { data } = await instance.get("64276fa3208178fae72312ee");
  return data;
};
