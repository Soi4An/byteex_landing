import { getAboutAsData } from "../api/getAboutAsData";
import ButtonCustomize from "./ButtonCustomize";
import Container from "./Container";
import PhotosInDiagonally from "./PhotosInDiagonally";
import TextParagraphs from "./TextParagraphs";
import TitleSubMain from "./TitleSubMain";

const { sectionTitle, threePhotos, listParagraphs } = getAboutAsData();

const AboutAs = () => (
  <section className="bg-gray-bg-dark py-10 md:py-20 xl:py-28">
    <Container extraClasses={"relative flex justify-center md:justify-end"}>
      <div className="flex flex-col justify-end md:w-3/5">
        <div className="flex justify-center md:justify-start">
          <TitleSubMain text={sectionTitle} />
        </div>

        <div className="flex justify-center md:justify-start items-center md:absolute md:left-0 h-full w-full md:w-2/5 mt-10 md:mt-0">
          <div className="h-full md:h-5/6 xl:h-full w-full tn:w-8/12 md:w-11/12 xl:w-9/12">
            <PhotosInDiagonally photos={threePhotos} />
          </div>
        </div>

        <div className="mt-10">
          <TextParagraphs paragraphs={listParagraphs} />
        </div>

        <div className="hidden md:flex mt-8">
          <ButtonCustomize />
        </div>
      </div>
    </Container>
  </section>
);

export default AboutAs;
