import Link from "next/link";

export const navItems = [
  {
    path: "/",
    title: "HOME",
  },
  {
    path: "/line-up",
    title: "LINE-UP",
  },
  {
    path: "/fly-village",
    title: "FLY VILLAGE",
  },
  {
    title: "ABOUT",
    dropDownItems: true,
    paths: ["/about-us", "/flytime-rules", "/travel"],
  },
  {
    path: "/faqs",
    title: "FAQS",
  },
  {
    path: "/contact-us",
    title: "CONTACT US",
  },
];

export const items = [
  {
    key: "1",
    label: <Link href="/about-us">About Us</Link>,
  },
  {
    key: "2",
    label: <Link href="/travel">Travel</Link>,
  },
  {
    key: "3",
    label: <Link href="/flytime-rules">Flytime Rules</Link>,
  },
];
