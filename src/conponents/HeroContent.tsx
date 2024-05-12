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

    <div className="w-full md:w-1/2 h-56 sm:h-72 lg:h-96">
      <PhotosInRow photos={photos} />
    </div>
  </div>
);

export default HeroContent;
