import { getQuestionsData } from "../api/getQuestionsData";
import Container from "./Container";
import CollapsesList from "./CollapsesList";
import PhotosInCol from "./PhotosInCol";
import TitleSubMain from "./TitleSubMain";
import ExtraButtonAndStars from "./ExtraButtonAndStars";

const { sectionTitle, listQuestions, listPhotos } = getQuestionsData();

const Questions = () => (
  <section className="my-16 md:my-20 xl:my-28">
    <Container extraClasses={"relative"}>
      <div className="hidden lg:flex items-center justify-end h-full w-full md:absolute -z-10">
        <div className=" lg:w-4/12 h-full xl:h-full lg:max-h-[600px] xl:max-h-[700px] mr-8">
          <PhotosInCol photos={listPhotos} />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 xl:gap-10 lg:w-7/12">
        <div className="max-w-52 sm:max-w-full">
          <TitleSubMain text={sectionTitle} />
        </div>

        <CollapsesList items={listQuestions} />

        <div className="lg:hidden w-full mt-10">
          <ExtraButtonAndStars />
        </div>
      </div>
    </Container>
  </section>
);

export default Questions;
