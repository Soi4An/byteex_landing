import imgPayments from "../images/payments.png";
import iconA from "../images/icons/lorry_is_moving.svg";
import iconB from "../images/icons/NiceArm.svg";
import iconC from "../images/icons/icon_eco_trolly.svg";

export const getFooterData = () => {
  function getAdvantage(icon: string, text: string) {
    return { icon, text };
  }

  const textA = 'FREE Shipping on Orders over $200';
  const textB = 'Over 500+ 5 Star Reviews Online';
  const textC = 'Made ethically and responsibly.';

  const deliverPeriod = "1-2 Days";
  const paymentsImg = imgPayments;
  const advantagesList = [
    getAdvantage(iconA, textA),
    getAdvantage(iconB, textB),
    getAdvantage(iconC, textC),
  ];
  return {
    deliverPeriod, paymentsImg, advantagesList,
  };
};
