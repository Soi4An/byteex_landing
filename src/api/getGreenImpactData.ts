import iconA from "../images/icons/icon_cloud_COTwo.svg";
import iconB from "../images/icons/icon_drop_HTwoO.svg";
import iconC from "../images/icons/icon_energy.svg";
import { TitleTextIcon } from "../types/TitleTextIcon";

const titleA = '3927 kg';
const titleB = '2546167 days';
const titleC = '7321 kWh';

const textA = 'of CO2 saved';
const textB = 'of drinking water saved';
const textC = 'of energy saved';

export const getGreenImpactData = () => {
  function getImpactItem(icon: string, title: string, text: string): TitleTextIcon {
    return {
      icon, title, text,
    }
  };

  const sectionTitle = "Our total green impact";
  const threeImpacts = [
    getImpactItem(iconA, titleA, textA),
    getImpactItem(iconB, titleB, textB),
    getImpactItem(iconC, titleC, textC),
  ];

  return { sectionTitle, threeImpacts };
};
