import classNames from "classnames";
import { PhotoSlider } from "../types/PhotoSlider";

type Props = {
  photos: PhotoSlider[];
  currentPhoto: number;
};

const SliderPhotoList = ({ photos, currentPhoto }: Props) => (
  <>
    {photos.map((photo, ind) => (
      <img
        key={`big-${ind}`}
        src={photo.url}
        alt={`${ind}-${photo.name}`}
        className={classNames("object-cover h-full w-full", {
          hidden: ind !== currentPhoto,
        })}
      />
    ))}
  </>
);

export default SliderPhotoList;
