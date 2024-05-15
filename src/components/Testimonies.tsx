import Container from "./Container";
import ExtraButtonAndStars from "./ExtraButtonAndStars";
import TitleSubMain from "./TitleSubMain";

const sectionTitle = 'What are our fans saying?';
const sectionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.';

const Testimonies = () => (
  <section className="mt-14 md:mt-16 xl:mt-20">
    <Container>
      <div className="flex flex-col items-center">
        <TitleSubMain text={sectionTitle} />
        
        <p className="mt-5 max-w-xl text-center">
          {sectionText}
        </p>
      </div>
    </Container>

    <div>
      {'Pictures'}
    </div>

    <div>
      {'Comments'}
    </div>

    <div className="mt-10 md:mt-12 xl:mt-14">
         <ExtraButtonAndStars />
       </div>
  </section>
);

export default Testimonies;
