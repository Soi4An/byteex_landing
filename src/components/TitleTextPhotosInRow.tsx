import { getTitleTextPhotosData } from "../api/getTitleTextPhotosData";
import Container from "./Container";
import PhotosInRow from "./PhotosInRow";
import TitleSubMain from "./TitleSubMain";

const { sectionTitle, sectionDesktopText, sectionMobileText, threePhotos } = getTitleTextPhotosData();

const TitleTextPhotosInRow = () => (
  <section className="mt-12 md:mt-14 xl:mt-16">
    <Container extraClasses="flex flex-col items-center">
      <div className="w-full lg:max-w-[815px] flex flex-col items-center">
        <TitleSubMain text={sectionTitle} />

        <div className="mt-3 max-w-xl flex">
          <p className="hidden md:inline text-center">{sectionDesktopText}</p>
          <p className="md:hidden text-center">{sectionMobileText}</p>
        </div>

        <div className="mt-10 w-full h-52 sm:h-64 lg:h-96">
          <PhotosInRow photos={threePhotos} />
        </div>
      </div>
    </Container>
  </section>
);

export default TitleTextPhotosInRow;
