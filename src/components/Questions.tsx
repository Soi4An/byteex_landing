import { getQuestionsData } from "../api/getQuestionsData";
import Container from "./Container";
import ListCollapses from "./ListCollapses";
import PhotosInCol from "./PhotosInCol";
import TitleSubMain from "./TitleSubMain";

const { sectionTitle, listQuestions, listPhotos } = getQuestionsData();

const Questions = () => (
  <section className="mt-16 md:mt-20 xl:mt-28">
    <Container extraClasses={'relative'}>
      <div className="flex flex-col items-center">
        <TitleSubMain text={sectionTitle} />
      </div>

      <div className="hidden md:flex md:w-4/12 h-max md:absolute md:right-0">
        <PhotosInCol photos={listPhotos} />
      </div>

      <div className="md:w-7/12">
        <ListCollapses items={listQuestions} />
      </div>
    </Container>
  </section>
);

export default Questions;
