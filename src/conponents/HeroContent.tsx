import PhotosInRow from "./PhotosInRow";
import TitleMain from "./TitleMain";
import girlA from "../images/GirlB.png";
import girlB from "../images/GirlA.png";
import girlC from "../images/GirlC.png";

const photos = [girlA, girlB, girlC];

const HeroContent = () => (
  <div>
    <div className="flex justify-center sm:justify-start">
      <TitleMain text={"Don’t apologize for being comfortable."} />
    </div>

    <PhotosInRow photos={photos} width={"50%"} height={"420px"} />
  </div>
);

export default HeroContent;
