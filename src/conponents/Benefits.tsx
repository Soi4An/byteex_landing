import ListBenefits from "./ListBenefits";
import Container from "./Container";
import SliderPhoto from "./SliderPhoto";

import iconA from "../images/icons/icon_day_night.svg";
import iconB from "../images/icons/icon_eco_trolly.svg";
import iconC from "../images/icons/icon_water.svg";
import iconD from "../images/icons/icon_feather.svg";
import girlA from "../images/GirlB.png";
import girlB from "../images/GirlA.png";
import girlC from "../images/GirlC.png";
import girlD from "../images/GirlD.png";
import TitleSubMain from "./TitleSubMain";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.";

const titleA = "Ethically sourced.";
const titleB = "Responsibly made.";
const titleC = "Made for living in.";
const titleD = "Unimaginably comfortable.";

function getBenefit(icon: string, title: string, text: string) {
  return { icon, title, text };
}

function getSliderPhoto(url: string, name: string) {
  return { url, name };
}

const benefits = [
  getBenefit(iconA, titleA, text),
  getBenefit(iconB, titleB, text),
  getBenefit(iconC, titleC, text),
  getBenefit(iconD, titleD, text),
];
const photos = [
  getSliderPhoto(girlB, "Gray kit"),
  getSliderPhoto(girlA, "White Robe"),
  getSliderPhoto(girlC, "Black book"),
  getSliderPhoto(girlD, "Pink tracksuit"),
];

const sectionTitle = "Loungewear you can be proud of.";

function Benefits() {
  return (
    <Container>
      <section className="relative mt-10 md:mt-14 xl:20">
        <div className="flex flex-col items-center md:w-2/5">
          <div className="flex justify-center md:justify-start w-full">
            <TitleSubMain text={sectionTitle} />
          </div>

          <div className="flex justify-center md:justify-end items-center md:absolute md:right-0 mt-5 md:mt-0 h-full w-full md:w-3/5">
            <div className="md:h-5/6 xl:h-full w-full md:w-11/12 xl:w-8/12">
              <SliderPhoto photos={photos} />
            </div>
          </div>

          <div className="mt-14 md:mt-16 xl:mt-20">
            <ListBenefits benefits={benefits} />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Benefits;
