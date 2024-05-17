import { getQuestionsData } from "../api/getQuestionsData";
import Container from "./Container";
import TitleSubMain from "./TitleSubMain";

const { sectionTitle, listQuestions, listPhotos } = getQuestionsData();

const Questions = () => (
  <section>
    <Container>
      <div className="flex flex-col items-center">
        <TitleSubMain text={sectionTitle} />
      </div>

      <div>
        {/* <PhotosInCol photos={listPhotos} /> */}
      </div>

      <div>
        {/* <ListCollapses items={listQuestions} /> */}
      </div>
    </Container>
  </section>
);

export default Questions;
