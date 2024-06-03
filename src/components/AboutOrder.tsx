import { getAboutOrderData } from "../api/getAboutOrderData";
import CarouselItemOdrers from "./CarouselItemOdrers";
import CarouselList from "./CarouselList";
import Container from "./Container";
import ExtraButtonAndStars from "./ExtraButtonAndStars";
import TitleSubMain from "./TitleSubMain";

const { sectionTitle, listOrderPoints } = getAboutOrderData();

const AboutOrder = () => (
  <section>
    <Container>
      <div className="flex justify-center mt-14 md:mt-16 xl:mt-20">
        <TitleSubMain text={sectionTitle} />
      </div>

      <div className="mt-6 md:mt-9 xl:mt-12">
        <CarouselList
          items={listOrderPoints}
          renderItem={(item, ind) => (
            <CarouselItemOdrers
              key={`AboutOrder-order-${ind}`}
              point={item}
              index={ind}
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

export default AboutOrder;
