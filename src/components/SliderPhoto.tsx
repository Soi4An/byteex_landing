import React, { useState } from "react";
import { PhotoSlider } from "../types/PhotoSlider";
import classNames from "classnames";
import Icon from "./Icon";

import arrowRight from "../images/icons/arrow_right.svg";
import arrowLeft from "../images/icons/arrow_left.svg";

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
  const handleMoveRight = () => {
    setCurrentPhoto(getNextRightInd(currentPhoto, lastPhoto));
  };
  const handleMoveLeft = () => {
    setCurrentPhoto(getNextLeftInd(currentPhoto, lastPhoto));
  };
  const handleSelectPhoto = (ind: number) => {
    setCurrentPhoto(ind);
  };

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex justify-between items-center h-full w-full">
        <button
          className="hidden tn:flex p-2 mr-2 rounded-full border border-transparent hover:border-gray-divider transition-colors"
          onClick={handleMoveLeft}
        >
          <Icon width={"20px"} url={arrowLeft} />
        </button>

        <div className="relative h-full w-full tn:w-9/12">
          {visiblePhotos.map((photo, ind) => {
            return (
              <img
                key={`big-${ind}`}
                src={photo.url}
                alt={`${ind}-${photo.name}`}
                className={classNames("object-cover h-full w-full", {
                  hidden: ind !== currentPhoto,
                })}
              />
            );
          })}

          <div className="absolute bottom-3 flex justify-center items-end gap-1 w-full h-1/4 mx-1">
            {visiblePhotos.map((photo, ind) => {
              const length = visiblePhotos.length;
            return (
              <img
                key={`small-${ind}`}
                src={photo.url}
                alt={`${ind}-${photo.name}`}
                className={classNames("object-cover cursor-pointer hover:border hover:border-gray-text-light", {
                  'border-white border': ind === currentPhoto,
                  'w-1/12 h-1/4': length === 10 || length === 9 || length === 8,
                  'w-1/6 h-1/2': length <= 7,
                })}
                onClick={() => handleSelectPhoto(ind)}
              />
            );
          })}
          </div>
        </div>

        <button
          className="hidden tn:flex p-2 ml-2 rounded-full border border-transparent hover:border-gray-divider transition-colors"
          onClick={handleMoveRight}
        >
          <Icon width={"20px"} url={arrowRight} />
        </button>
      </div>

      <p className="relative top-0 xl:top-6 mt-3 xl:mt-0 text-sm font-comment">
        {visiblePhotos[currentPhoto].name}
      </p>
    </div>
  );
}

export default React.memo(SliderPhoto);
