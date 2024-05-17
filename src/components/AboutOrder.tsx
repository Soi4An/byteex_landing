import { getAboutOrderData } from "../api/getAboutOrderData";
import CarouselBox from "./CarouselBox";
import Container from "./Container";
import ExtraButtonAndStars from "./ExtraButtonAndStars";
import SliderOrderList from "./SliderOrderList";
import TitleSubMain from "./TitleSubMain";

const { sectionTitle, listOrderPoints } = getAboutOrderData();

const AboutOrder = () => (
  <section>
    <Container>
      <div className="flex justify-center mt-14 md:mt-16 xl:mt-20">
        <TitleSubMain text={sectionTitle} />
      </div>

      <div className="mt-6 md:mt-9 xl:mt-12">
        <CarouselBox items={listOrderPoints}>
          <SliderOrderList points={listOrderPoints} />
        </CarouselBox>
      </div>

      <div className="mt-10 md:mt-12 xl:mt-14">
        <ExtraButtonAndStars />
      </div>
    </Container>
  </section>
);

export default AboutOrder;
