import PhotosInRow from "./PhotosInRow";
import TitleMain from "./TitleMain";
import ListSimple from "./ListSimple";
import ButtonCustomize from "./ButtonCustomize";

import girlA from "../images/GirlB.png";
import girlB from "../images/GirlA.png";
import girlC from "../images/GirlC.png";
import iconA from "../images/icons/icon_day_night.svg";
import iconB from "../images/icons/icon_eco_trolly.svg";
import iconC from "../images/icons/icon_water.svg";
import iconArrow from "../images/icons/icon_arrow.svg";

const textA = "Beautiful, comfortable loungewear for day or night.";
const textB = "No wasteful extras, like tags or plastic packaging.";
const textC =
  "Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.";

function getReason(icon: string, text: string) {
  return { icon, text };
}

const photos = [girlA, girlB, girlC];
const reasons = [
  getReason(iconA, textA),
  getReason(iconB, textB),
  getReason(iconC, textC),
];

const HeroContent = () => (
  <div className="md:w-1/2 lg:w-5/12 md:pr-4 lg:pr-10">
    <div className="flex justify-center md:justify-start">
      <TitleMain text={"Don’t apologize for being comfortable."} />
    </div>

    <div className="w-full md:w-1/2 lg:w-7/12 h-56 sm:h-72 lg:h-96 md:absolute md:right-0 lg:top-0">
      <PhotosInRow photos={photos} />
    </div>

    <div className="mt-6 mx-5 md:mx-3 lg:mx-1">
      <ListSimple reasons={reasons} />
    </div>

    <div className="mt-7 md:w-3/4">
      <ButtonCustomize arrowImg={iconArrow} />
    </div>
  </div>
);

export default HeroContent;
