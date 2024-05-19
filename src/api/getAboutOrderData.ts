import { TitleTextIcon } from "../types/TitleTextIcon";

import iconA from "../images/icons/icon_eco_trolly.svg";
import iconB from "../images/icons/lorry_is_moving.svg";
import iconC from "../images/icons/icon_day_night.svg";

const titleA = "You save.";
const titleB = "We ship.";
const titleC = "You enjoy!";

const textA = "Browse our comfort sets and save 15% when you bundle.";
const textB = "We ship your items within 1-2 days of receiving your order.";
const textC = "Wear hernest around the house, out on the town, or in bed.";

export const getAboutOrderData = () => {
  function getOrderPoint(icon: string, title: string, text: string) {
    return { icon, title, text };
  }

  const sectionTitle = "Comfort made easy";
  const listOrderPoints: TitleTextIcon[] = [
    getOrderPoint(iconA, titleA, textA),
    getOrderPoint(iconB, titleB, textB),
    getOrderPoint(iconC, titleC, textC),
  ];

  return {
    sectionTitle,
    listOrderPoints,
  };
};
