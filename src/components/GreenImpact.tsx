import { getGreenImpactData } from "../api/getGreenImpactData";
import Container from "./Container";
import GreenImpactList from "./GreenImpactList";

const { sectionTitle, threeImpacts } = getGreenImpactData();

const GreenImpact = () => (
  <section className="bg-gray-bg-dark text-blue-text py-12 md:py-10">
    <Container extraClasses={'flex flex-col items-center'}>
      <h2 className="text-xl font-semibold mb-8 md:mb-6">{sectionTitle}</h2>

      <GreenImpactList impacts={threeImpacts} />
    </Container>
  </section>
);

export default GreenImpact;
