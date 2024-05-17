import ListBenefits from "./ListBenefits";
import Container from "./Container";
import SliderPhoto from "./SliderPhoto";
import TitleSubMain from "./TitleSubMain";
import { getBenefitsData } from "../api/getBenefitsData";

const { sectionTitle, listBenefits, sliderPhotos } = getBenefitsData();

function Benefits() {
  return (
    <section className="mt-10 md:mt-14 xl:mt-20 md:mb-10 xl:mb-14">
      <Container extraClasses={"relative"}>
        <div className="flex flex-col items-center md:w-2/5">
          <div className="flex justify-center md:justify-start w-full">
            <TitleSubMain text={sectionTitle} />
          </div>

          <div className="flex justify-center md:justify-end items-center md:absolute md:right-0 mt-5 md:mt-0 h-full w-full md:w-3/5">
            <div className="md:h-5/6 xl:h-full w-full md:w-11/12 xl:w-8/12">
              <SliderPhoto photos={sliderPhotos} />
            </div>
          </div>

          <div className="mt-14 md:mt-16 xl:mt-20">
            <ListBenefits benefits={listBenefits} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Benefits;
