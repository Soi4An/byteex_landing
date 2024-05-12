import Container from "./Container";
import HeroContent from "./HeroContent";
import Logo from "./Logo";

const Hero = () => (
  <section>
    <Container>
      <div className="mt-4 sm:mt-8 flex justify-center sm:justify-start">
        <Logo />
      </div>

      <HeroContent />
    </Container>
  </section>
);

export default Hero;
