import ButtonCustomize from "./ButtonCustomize";
import Container from "./Container";
import Stars from "./Stars";

const ratingText = "Over 500+ 5 Star Reviews Online";

function ExtraButtonAndStars() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-3">
        <ButtonCustomize />
        <Stars rating={5} starWidth={"14px"} text={ratingText} />
      </div>
    </Container>
  );
}

export default ExtraButtonAndStars;
