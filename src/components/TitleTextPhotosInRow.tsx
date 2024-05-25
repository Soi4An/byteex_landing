import Container from "./Container";
import PhotosInRow from "./PhotosInRow";
import TitleSubMain from "./TitleSubMain";

const { sectionTitle, sectionText, threePhotos } = getTitleTextPhotosData();

const TitleTextPhotosInRow = () => (
  <section>
    <Container>
      <div className="max-w-52 sm:max-w-full">
        <TitleSubMain text={sectionTitle} />
      </div>

      <p>{sectionText}</p>

      <PhotosInRow photos={threePhotos} />
    </Container>
  </section>
);

export default TitleTextPhotosInRow;
