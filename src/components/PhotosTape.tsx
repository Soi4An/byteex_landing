import { useEffect, useState } from "react";
import { debounce } from "lodash";

function getPhotosQuantity(currentScreenWidth: number) {
  const screens: Record<string, number> = {
    xxl: 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
    tn: 440,
  };
  const quantities: Record<string, number> = {
    def: 2,
    tn: 4,
    sm: 5,
    md: 6,
    lg: 9,
    xl: 11,
    xxl: 14,
  };

  const screenSize =
    Object.keys(screens).find((size) => currentScreenWidth >= screens[size]) ||
    "def";

  return quantities[screenSize];
}

type Props = {
  photos: string[];
};

const PhotosTape = ({ photos }: Props) => {
  const [photosQuantity, setPhotosQuantity] = useState<number>(
    getPhotosQuantity(window.innerWidth)
  );

  const handleResize = debounce(() => {
    const newQuantity = getPhotosQuantity(window.innerWidth);

    if (newQuantity !== photosQuantity) {
      setPhotosQuantity(newQuantity);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
