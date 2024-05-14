import ButtonCustomize from "./ButtonCustomize";
import Container from "./Container";
import GradientBG from "./GradientBG";
import Stars from "./Stars";

const ratingText = 'Over 500+ 5 Star Reviews Online';

function ExtraButtonAndStars() {
  return (
    <GradientBG direction="t">
      <Container>
        <div className="flex flex-col items-center gap-3 py-10">
          <ButtonCustomize />
          <Stars rating={5} starWidth={'14px'} text={ratingText} />
        </div>
      </Container>
    </GradientBG>
  );
}

export default ExtraButtonAndStars;
