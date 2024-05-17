import GradientBG from "./GradientBG";

type Props = {
  photos: string[];
};

const PhotosInCol = ({ photos }: Props) => {
  const [ photoA, photoB, photoC ] = photos;

  return (
  <div className="relative flex justify-center h-full w-full">
    <img
      className="w-3/5 py-28 md:py-32 xl:py-40 z-20"
      src={photoB}
      alt="main"
    />

    <div className="absolute top-0 right-0 w-1/2 h-2/5 flex justify-end">
      <img className="object-contain" src={photoA} alt="right" />
    </div>

    <div className="absolute bottom-0 left-0 w-1/2 h-2/5 flex justify-start">
      <img className="object-contain" src={photoC} alt="right" />
    </div>

    <div className="absolute top-0 left-0 w-1/3 h-1/3 ml-10">
      <GradientBG direction="t" extraClasses="h-full" />
    </div>

    <div className="absolute bottom-0 right-0 w-1/3 h-1/3 mr-6 mb-20">
      <GradientBG direction="t" extraClasses="h-full" />
    </div>
  </div>
)};

export default PhotosInCol;
