import PhotosInRow from "./PhotosInRow";
import TitleMain from "./TitleMain";
import ListSimple from "./ListSimple";
import ButtonCustomize from "./ButtonCustomize";
import HeroFeedback from "./HeroFeedback";
import { getHeroContentData } from "../api/getHeroContentData";
import Feedback from "./Feedback";
import StarsAndNameHybrid from "./StarsAndNameHybrid";

const { threePhotos, listReasons, feedback } = getHeroContentData();

const HeroContent = () => (
  <div className="md:w-1/2 lg:w-5/12 md:pr-4 lg:pr-10">
    <div className="flex justify-center md:justify-start">
      <TitleMain text={"Don’t apologize for being comfortable."} />
    </div>

    <div className="w-full md:w-1/2 lg:w-7/12 h-56 sm:h-72 lg:h-96 md:absolute md:right-0 lg:top-0 mt-5 md:mt-0">
      <PhotosInRow photos={threePhotos} />
    </div>

    <div className="mt-6 mx-5 md:mx-3 lg:mx-1">
      <ListSimple reasons={listReasons} />
    </div>

    <div className="flex justify-center md:justify-start mt-7 md:w-3/4">
      <ButtonCustomize />
    </div>

    <div className="relative h-32 md:h-40 xl:w-5/6">
      <div className="absolute top-7 md:top-8 xl:top-10">
        <Feedback feedback={feedback}>
          <StarsAndNameHybrid feedback={feedback} />
        </Feedback>
      </div>
    </div>
  </div>
);

export default HeroContent;
