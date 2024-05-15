import { getTestimoniesData } from "../api/getTestimoniesData";
import CarouselBox from "./CarouselBox";
import Container from "./Container";
import ExtraButtonAndStars from "./ExtraButtonAndStars";
import PhotosTape from "./PhotosTape";
import SliderCommentsList from "./SliderCommentsList";
import TitleSubMain from "./TitleSubMain";

const { sectionText, sectionTitle, listComments, listSmallPhotos } =
  getTestimoniesData();

const Testimonies = () => (
  <section className="mt-14 md:mt-16 xl:mt-20">
    <Container>
      <div className="flex flex-col items-center">
        <TitleSubMain text={sectionTitle} />

        <p className="mt-5 max-w-xl text-center">{sectionText}</p>
      </div>
    </Container>

    <div className="mt-12 xl:mt-14">
      <PhotosTape key={'tape-1'} photos={listSmallPhotos} />
      <PhotosTape key={'tape-2'} photos={listSmallPhotos.slice(10)} />
    </div>

    <Container>
      <div className="mt-10 md:mt-12 xl:mt-16">
        <CarouselBox items={listComments}>
          <SliderCommentsList comments={listComments} />
        </CarouselBox>
      </div>

      <div className="mt-10 md:mt-12 xl:mt-14">
        <ExtraButtonAndStars />
      </div>
    </Container>
  </section>
);

export default Testimonies;
