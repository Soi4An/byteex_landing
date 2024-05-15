import { getTestimoniesData } from "../api/getTestimoniesData";
import CarouselBox from "./CarouselBox";
import Container from "./Container";
import ExtraButtonAndStars from "./ExtraButtonAndStars";
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

    <div>{"Pictures"}</div>

    <div className="">
      {/* <CarouselBox items={listOrderPoints}>
          <SliderOrderList points={listOrderPoints} />
        </CarouselBox> */}
    </div>

    <div className="mt-10 md:mt-12 xl:mt-14">
      <ExtraButtonAndStars />
    </div>
  </section>
);

export default Testimonies;
