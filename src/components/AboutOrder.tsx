import { getAboutOrderData } from "../api/getAboutOrderData";
import Container from "./Container";
import TitleSubMain from "./TitleSubMain";

const { sectionTitle, listOrderPoints } = getAboutOrderData();

const AboutOrder = () => (
  <Container>
    <section>
      <div>
        <TitleSubMain text={sectionTitle} />
      </div>
      {"Hello AboutOrder"}
    </section>
  </Container>
);

export default AboutOrder;
