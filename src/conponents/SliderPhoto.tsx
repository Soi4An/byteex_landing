import { useState } from "react";
import { PhotoSlider } from "../types/PhotoSlider";
import classNames from "classnames";
import Icon from "./Icon";

import arrowRight from "../images/icons/arrow_right.svg";
import arrowLeft from "../images/icons/arrow_left.svg";

type Props = {
  photos: PhotoSlider[];
};

function SliderPhoto({ photos }: Props) {
  const visiblePhotos = photos.slice(0, 9);
  const [currentPhoto, setCurrentPhoto] = useState(3);

  return (
    <div className="flex justify-center items-center">
      <button className="p-2 mr-2 rounded-full border border-gray-divider hover:border-gray-text-light transition-colors">
        <Icon width={'20px'} url={arrowLeft} />
      </button>

      <div>
        {visiblePhotos.map((photo, ind) => {
          return (
            <img
              key={ind}
              src={photo.url}
              alt={`${ind}-${photo.name}`}
              // className={classNames("object-contain w-[300px] xl:w-[400px] transition-opacity", {
              className={classNames("object-cover w-[300px] xl:w-[400px] transition-opacity", {
                "opacity-0 hidden": ind !== currentPhoto,
                "opacity-100": ind === currentPhoto,
              })}
            />
          );
        })}
      </div>

      <button className="p-2 ml-2 rounded-full border border-gray-divider hover:border-gray-text-light transition-colors">
        <Icon width={'20px'} url={arrowRight} />
      </button>
    </div>
  );
}

export default SliderPhoto;
