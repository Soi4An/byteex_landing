import { getAboutAsData } from "../api/getAboutAsData";
import Container from "./Container";
import TitleSubMain from "./TitleSubMain";

const { sectionTitle, threePhoto, listParagraphs } = getAboutAsData();

const AboutAs = () => (
  <section className="bg-gray-bg-dark py-10 md:py-20 xl:py-28">
    <Container>
      <div className="relative flex justify-center md:justify-end">
        <div className="flex flex-col justify-end md:w-3/5">
          <div className="flex justify-center md:justify-start w-full">
            <TitleSubMain text={sectionTitle} />
          </div>

          <div className="flex justify-center md:justify-end items-center md:absolute md:left-0 h-full w-full md:w-2/5">
            <div className="md:h-5/6 xl:h-full w-full md:w-11/12 xl:w-8/12">
              {/* <SliderPhoto photos={sliderPhotos} /> */}
            </div>
          </div>

          <div className="mt-14 md:mt-16 xl:mt-20">
            {/* <TextParagraphs paragraphs={listParagraphs} /> */}
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default AboutAs;
