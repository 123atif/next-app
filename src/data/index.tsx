import { SiBasicattentiontoken } from "react-icons/si";
import { RiContactsBook3Fill } from "react-icons/ri";
import { IoMdGrid } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

export const routes = [
  { name: "Home", path: "/home-page" },
  { name: "Modules", path: "/modules-page" },
  { name: "Tokenomics", path: "/tokenomics" },
  { name: "Contact Us", path: "/contact-us" },
];
export const MobileMenuroutes = [
  { icon: <IoHomeOutline />, name: "Home", path: "/home-page" },
  { icon: <IoMdGrid />, name: "Modules", path: "/modules-page" },
  { icon: <SiBasicattentiontoken />, name: "Tokenomics", path: "/tokenomics" },
  { icon: <RiContactsBook3Fill />, name: "Contact Us", path: "/contact-us" },
];

export const playerCards = [
  {
    type: "DIAMOND",

    rating: 9,
    price: 1800,
    currency: "GLZN",
    timeLeft: "2d 5h 15m",
  },
  {
    type: "PLATINUM",

    rating: 16,
    price: 975,
    currency: "GLZN",
    timeLeft: "1d 4h 32m",
  },
  {
    type: "GOLD",

    rating: 20,
    price: 140,
    currency: "GLZN",
    timeLeft: "3d 12h 45m",
  },
];

export const teamCards = [
  {
    type: "DIAMOND",

    price: 1930,
    currency: "GLZN",
    timeLeft: "2d 8h 20m",
  },
  {
    type: "PLATINUM",

    price: 975,
    currency: "GLZN",
    timeLeft: "1d 8h 10m",
  },
  {
    type: "GOLD",

    price: 65,
    currency: "GLZN",
    timeLeft: "4h 1m 5s",
  },
];

export const mainTabs = [
  "Buy Cards",
  "Store",
  "My Collection",
  "Invite Friends",
];
export const sportTabs = [
  "Football",
  "Cricket",
  "Tennis",
  "Basketball",
  "Baseball",
];
export const marketTabs = ["MarketPlace", "Auctions"];
