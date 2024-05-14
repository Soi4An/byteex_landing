import { getAboutOrderData } from "../api/getAboutOrderData";
import Container from "./Container";
import ExtraButtonAndStars from "./ExtraButtonAndStars";
import TitleSubMain from "./TitleSubMain";

const { sectionTitle, listOrderPoints } = getAboutOrderData();

const AboutOrder = () => (
  <Container>
    <section>
      <div className="flex justify-center">
        <TitleSubMain text={sectionTitle} />
      </div>
       
       <div>
        {/* <ListOrderPoints points={listOrderPoints} /> */}
       </div>

       <div>
         <ExtraButtonAndStars />
       </div>
    </section>
  </Container>
);

export default AboutOrder;
