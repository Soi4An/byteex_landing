import iconA from "../images/icons/icon_cloud_COTwo.svg";
import iconB from "../images/icons/icon_drop_HTwoO.svg";
import iconC from "../images/icons/icon_energy.svg";

const titleA = '3,927 kg';
const titleB = '2,546,167 days';
const titleC = '7,321 kWh';

const paragrafA = 'of CO2 saved';
const paragrafB = 'of drinking water saved';
const paragrafC = 'of energy saved';

export const getGreenImpactData = () => {
  function getImpactItem(icon: string, title: string, paragraf: string) {
    return {
      icon, title, paragraf,
    }
  };

  const sectionTitle = "Our total green impact";
  const threeImpacts = [
    getImpactItem(iconA, titleA, paragrafA),
    getImpactItem(iconB, titleB, paragrafB),
    getImpactItem(iconC, titleC, paragrafC),
  ];

  return { sectionTitle, threeImpacts };
};
