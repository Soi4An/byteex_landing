import iconA from "../images/icons/icon_day_night.svg";
import iconB from "../images/icons/icon_eco_trolly.svg";
import iconC from "../images/icons/icon_water.svg";
import iconD from "../images/icons/icon_feather.svg";
import girlA from "../images/GirlB.png";
import girlB from "../images/GirlA.png";
import girlC from "../images/GirlC.png";
import girlD from "../images/GirlD.png";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.";

const titleA = "Ethically sourced.";
const titleB = "Responsibly made.";
const titleC = "Made for living in.";
const titleD = "Unimaginably comfortable.";

export const getBenefitsData = () => {
  function getBenefit(icon: string, title: string, text: string) {
    return { icon, title, text };
  }
  
  function getSliderPhoto(url: string, name: string) {
    return { url, name };
  }
  
  const sectionTitle = "Loungewear you can be proud of.";

  const listBenefits = [
    getBenefit(iconA, titleA, text),
    getBenefit(iconB, titleB, text),
    getBenefit(iconC, titleC, text),
    getBenefit(iconD, titleD, text),
  ];
  const sliderPhotos = [
    getSliderPhoto(girlB, "Gray kit"),
    getSliderPhoto(girlA, "White Robe"),
    getSliderPhoto(girlA, "White Robe"),
    getSliderPhoto(girlA, "White Robe"),
    getSliderPhoto(girlA, "White Robe"),
    getSliderPhoto(girlA, "White Robe"),
    getSliderPhoto(girlC, "Black book"),
    getSliderPhoto(girlC, "Black book"),
    getSliderPhoto(girlC, "Black book"),
    getSliderPhoto(girlD, "Pink tracksuit"),
  ];

  return {
    sectionTitle, listBenefits, sliderPhotos,
  };
};
