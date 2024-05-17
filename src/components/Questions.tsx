import { getQuestionsData } from "../api/getQuestionsData";
import Container from "./Container";
import PhotosInCol from "./PhotosInCol";
import TitleSubMain from "./TitleSubMain";

const { sectionTitle, listQuestions, listPhotos } = getQuestionsData();

const Questions = () => (
  <section className="relative mt-16 md:mt-20 xl:mt-28">
    <Container>
      <div className="flex flex-col items-center">
        <TitleSubMain text={sectionTitle} />
      </div>

      <div className="hidden md:flex md:w-2/5 h-full items-center">
      </div>

        <div className="hidden md:flex md:w-2/5 h-max md:absolute md:right-0 items-center">
          <PhotosInCol photos={listPhotos} />
        </div>

      <div>
        {/* <ListCollapses items={listQuestions} /> */}
      </div>
    </Container>
  </section>
);

export default Questions;
