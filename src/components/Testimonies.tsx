import { getTestimoniesData } from "../api/getTestimoniesData";
// import CarouselBoxComments from "./CarouselBoxComments";
import CarouselItemComments from "./CarouselItemComments";
import CarouselList from "./CarouselList";
import Container from "./Container";
import ExtraButtonAndStars from "./ExtraButtonAndStars";
import PhotosTape from "./PhotosTape";
import TitleSubMain from "./TitleSubMain";

const { sectionText, sectionTitle, listComments, listSmallPhotos } =
  getTestimoniesData();

const Testimonies = () => (
  <section className="mt-14 md:mt-16 xl:mt-20">
    <Container extraClasses={"flex flex-col items-center"}>
      <TitleSubMain text={sectionTitle} />
      <p className="mt-5 max-w-xl text-center">{sectionText}</p>
    </Container>

    <div className="mt-12 xl:mt-14">
      <PhotosTape key={"tape-1"} photos={listSmallPhotos} />
      <PhotosTape key={"tape-2"} photos={[...listSmallPhotos].reverse()} />
    </div>

    <Container>
      <div className="mt-10 md:mt-12 xl:mt-16">
        <CarouselList
          items={listComments}
          renderItem={(comment, index) => (
            <CarouselItemComments
              key={`Testimonies-comment-${index}`}
              comment={comment}
            />
          )}
        />
      </div>

      <div className="mt-10 md:mt-12 xl:mt-14">
        <ExtraButtonAndStars />
      </div>
    </Container>
  </section>
);

export default Testimonies;
