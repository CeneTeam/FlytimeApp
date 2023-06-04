import { staticBaseUrl } from "../../network/static";

export const flyData = [
  {
    img: `${staticBaseUrl}about-fly-people.webp`,
    color: "#36CE4F",
    title: "FLY PEOPLE",
    route: "/about-us#recent-year",
  },
  {
    img: `${staticBaseUrl}wizkid-about.webp`,
    color: "#9068E4",
    title: "LINEUP",
    route: "/line-up",
  },
  {
    img: `${staticBaseUrl}fly-community.webp`,
    color: "#FDD200",
    title: "FLY COMMUNITY",
    route: "fly-village",
  },
];

export const lineupData = [
  {
    img: `${staticBaseUrl}day-1-poster.svg`,
    color: "#156CE3",
    day: "1",
    date: "DEC 21",
    to: "https://tickets.flytimefest.com/day/2",
    soldOut: false,
  },
  {
    img: `${staticBaseUrl}day-2-soldout.webp`,
    color: "#9068E4",
    day: "2",
    date: "DEC 22",
    to: "https://tickets.flytimefest.com/day/3",
    soldOut: true,
  },
  {
    img: `${staticBaseUrl}day-33.webp`,
    color: "#35CB4D",
    day: "3",
    date: "DEC 23",
    to: "https://tickets.flytimefest.com/day/4",
    soldOut: false,
  },
  {
    img: `${staticBaseUrl}day-4-img.webp`,
    color: "#FDD200",
    day: "4",
    date: "DEC 24",
    to: "https://tickets.flytimefest.com/day/5",
    soldOut: false,
  },
];
