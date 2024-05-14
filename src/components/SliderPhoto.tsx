import React, { useCallback, useState } from "react";
import { PhotoSlider } from "../types/PhotoSlider";
import arrowRight from "../images/icons/arrow_right.svg";
import arrowLeft from "../images/icons/arrow_left.svg";
import RoundButton from "./RoundButton";
import SliderPhotoList from "./SliderPhotoList";
import SliderPhotoSmallList from "./SliderPhotoSmallList";

function getNextRightInd(currentInd: number, lastInd: number) {
  return currentInd + 1 <= lastInd ? currentInd + 1 : 0;
}

function getNextLeftInd(currentInd: number, lastInd: number) {
  return currentInd - 1 >= 0 ? currentInd - 1 : lastInd;
}

type Props = {
  photos: PhotoSlider[];
};

function SliderPhoto({ photos }: Props) {
  const visiblePhotos = photos.slice(0, 10);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const lastPhoto = visiblePhotos.length - 1;

  const handleMoveRight = useCallback(() => {
    setCurrentPhoto((currentPhoto) => getNextRightInd(currentPhoto, lastPhoto));
  }, [lastPhoto]);

  const handleMoveLeft = useCallback(() => {
    setCurrentPhoto((currentPhoto) => getNextLeftInd(currentPhoto, lastPhoto));
  }, [lastPhoto]);

  const handleSelectPhoto = useCallback((ind: number) => {
    setCurrentPhoto(ind);
  }, []);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex justify-between items-center h-full w-full">
        <div className="hidden tn:flex">
          <RoundButton
            icon={arrowLeft}
            iconWidth={"20px"}
            clickHendler={handleMoveLeft}
          />
        </div>

        <div className="relative h-full w-full tn:w-9/12">
          <SliderPhotoList photos={visiblePhotos} currentPhoto={currentPhoto} />

          <div className="absolute bottom-3 flex justify-center items-end gap-1 w-full h-1/4 mx-1">
            <SliderPhotoSmallList
              photos={visiblePhotos}
              currentPhoto={currentPhoto}
              clickHandler={handleSelectPhoto}
            />
          </div>
        </div>

        <div className="hidden tn:flex">
          <RoundButton
            icon={arrowRight}
            iconWidth={"20px"}
            clickHendler={handleMoveRight}
          />
        </div>
      </div>

      <p className="relative top-0 xl:top-6 mt-3 xl:mt-0 text-sm font-comment">
        {visiblePhotos[currentPhoto].name}
      </p>
    </div>
  );
}

export default React.memo(SliderPhoto);
