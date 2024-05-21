import { getGreenImpactData } from "../api/getGreenImpactData";
import Container from "./Container";

const { sectionTitle, threeImpacts } = getGreenImpactData();

const GreenImpact = () => (
  <section className="bg-gray-bg-dark py-10 md:py-20 xl:py-28">
    <Container extraClasses={"relative flex justify-center md:justify-end"}>
      <div>
        <h4 className="text-lg text-blue-text">{sectionTitle}</h4>
      </div>


    </Container>
  </section>
);

export default GreenImpact;
