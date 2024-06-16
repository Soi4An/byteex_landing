import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { TapePhotosParams } from "../config";
import { getQuantityForScreen } from "../utils/getQuantityForScreen";

type Props = {
  photos: string[];
};

const PhotosTape = ({ photos }: Props) => {
  const [photosQuantity, setPhotosQuantity] = useState<number>(
    getQuantityForScreen(TapePhotosParams, window.innerWidth),
  );

  const handleSetPhotosQuantity = debounce(() => {
    const newQuantity = getQuantityForScreen(
      TapePhotosParams,
      window.innerWidth,
    );

    if (newQuantity !== photosQuantity) {
      setPhotosQuantity(newQuantity);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleSetPhotosQuantity);

    return () => {
      window.removeEventListener("resize", handleSetPhotosQuantity);
    };
  }, []);

  const visiblePhotos = photos.slice(0, photosQuantity);

  return (
    <div className="flex w-full">
      {visiblePhotos.map((photo, ind) => (
        <div key={photo} className="flex flex-1 justify-center">
          <img
            className="object-cover object-center shrink p-1"
            src={photo}
            alt={"Happy customer"}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotosTape;
