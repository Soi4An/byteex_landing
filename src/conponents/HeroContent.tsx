import PhotosInRow from "./PhotosInRow";
import TitleMain from "./TitleMain";
import ListSimple from "./ListSimple";

import girlA from "../images/GirlB.png";
import girlB from "../images/GirlA.png";
import girlC from "../images/GirlC.png";
import iconA from "../images/icons/icon_day_night.svg";
import iconB from "../images/icons/icon_eco_trolly.svg";
import iconC from "../images/icons/icon_water.svg";

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
  <div>
    <div className="flex justify-center sm:justify-start">
      <TitleMain text={"Don’t apologize for being comfortable."} />
    </div>

    <div className="w-full md:w-1/2 h-56 sm:h-72 lg:h-96">
      <PhotosInRow photos={photos} />
    </div>

    <div className="mt-6 mx-5 md:mx-3 lg:mx-1">
      <ListSimple reasons={reasons} />
    </div>
  </div>
);

export default HeroContent;
