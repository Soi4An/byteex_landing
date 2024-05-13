import ListBenefits from "./ListBenefits";

import iconA from "../images/icons/icon_day_night.svg";
import iconB from "../images/icons/icon_eco_trolly.svg";
import iconC from "../images/icons/icon_water.svg";
import iconD from "../images/icons/icon_feather.svg";
import Container from "./Container";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.";

const titleA = "Ethically sourced.";
const titleB = "Responsibly made.";
const titleC = "Made for living in.";
const titleD = "Unimaginably comfortable.";

function getBenefit(icon: string, title: string, text: string) {
  return { icon, title, text };
}

const benefits = [
  getBenefit(iconA, titleA, text),
  getBenefit(iconB, titleB, text),
  getBenefit(iconC, titleC, text),
  getBenefit(iconD, titleD, text),
];

function Benefits() {
  return (
    <section className="relative">
      <Container>
        <div className="flex flex-col items-center md:w-1/2">
          <div className="flex justify-center md:justify-start mt-10 md:mt-14 xl:20 w-full">
            <h2 className="text-center sm:text-start text-blue-text text-2xl xl:text-3xl font-bold">
              {"Loungewear you can be proud of."}
            </h2>
          </div>

          <div className="w-full md:w-1/2 h-56 md:h-full md:absolute md:right-0 mt-5 md:mt-0">
            {/* <SliderPhoto /> */}
          </div>

          <div className="mt-14 md:mt-16 xl:mt-20">
            <ListBenefits benefits={benefits} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Benefits;
