import Container from "./Container";
import HeroContent from "./HeroContent";
import Logo from "./Logo";

const Hero = () => (
  <section>
    <Container>
      <div className="mt-4 sm:mt-8 flex justify-center sm:justify-start">
        <Logo />
      </div>

      <div className="relative mt-4 sm:mt-9 lg:mt-10">
        <HeroContent />
      </div>
    </Container>
  </section>
);

export default Hero;
