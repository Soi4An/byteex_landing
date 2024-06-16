import classNames from "classnames";
import { PhotoSlider } from "../types/PhotoSlider";

type Props = {
  photos: PhotoSlider[];
  currentPhoto: number;
  clickHandler: (ind: number) => void;
};

const SliderPhotoSmallList = ({
  photos,
  currentPhoto,
  clickHandler,
}: Props) => (
  <>
    {photos.map((photo, ind) => {
      const length = photos.length;

      return (
        <img
          key={`small-${ind}`}
          src={photo.url}
          alt={`${ind}-${photo.name}`}
          className={classNames(
            "object-cover cursor-pointer hover:border hover:border-gray-text-light",
            {
              "border-white border": ind === currentPhoto,
              "w-1/12 h-1/4": length === 10 || length === 9 || length === 8,
              "w-1/6 h-1/2": length <= 7,
            },
          )}
          onClick={() => clickHandler(ind)}
        />
      );
    })}
  </>
);

export default SliderPhotoSmallList;
