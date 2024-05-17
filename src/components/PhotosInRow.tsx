import GradientBG from "./GradientBG";

type Props = {
  photos: string[];
};

const PhotosInRow = ({ photos }: Props) => {
  const [ photoA, photoB, photoC ] = photos;

  return (
  <div className="relative flex justify-between items-center h-full">
    <GradientBG direction="t" extraClasses="w-1/4 h-1/2" />

    <img
      className="object-cover w-2/5 h-full border border-white z-20"
      src={photoB}
      alt="main"
    />

    <GradientBG direction="t" extraClasses="w-1/4 h-1/2" />

    <div className="absolute w-full h-4/5 flex justify-center">
      <div className="w-5/6 flex justify-between">
        <img className="object-cover w-1/3" src={photoA} alt="left" />
        <img className="object-cover w-1/3" src={photoC} alt="right" />
      </div>
    </div>
  </div>
)};

export default PhotosInRow;
