import { useState } from "react";
import { PhotoSlider } from "../types/PhotoSlider";
import classNames from "classnames";

type Props = {
  photos: PhotoSlider[];
};

function SliderPhoto({ photos }: Props) {
  const visiblePhotos = photos.slice(0, 9);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  return (
    <div>
      <div>
        {visiblePhotos.map((photo, ind) => {
          return (
            <img
              src={photo.url}
              alt={`${ind}-${photo.name}`}
              className={classNames("object-cover w-[300px] xl:w-[420px]", {
                "opacity-0": ind !== currentPhoto,
                "hidden": ind !== currentPhoto,
              })}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SliderPhoto;
