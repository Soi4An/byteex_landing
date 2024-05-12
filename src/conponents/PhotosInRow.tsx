import GradientBG from "./GradientBG";

type Props = {
  photos: string[];
};

const PhotosInRow = ({ photos }: Props) => (
  <div className="relative flex justify-between items-center h-full">
    <div className="w-1/4 h-1/2">
      <GradientBG key={"first"} direction="t" />
    </div>

    <img
      className="object-cover w-2/5 h-full border border-white z-20"
      src={photos[1]}
      alt="main"
    />

    <div className="w-1/4 h-1/2">
      <GradientBG key={"second"} direction="t" />
    </div>

    <div className="absolute w-full h-4/5 flex justify-center">
      <div className="w-5/6 flex justify-between">
        <img className="object-cover w-1/3" src={photos[0]} alt="left" />
        <img className="object-cover w-1/3" src={photos[2]} alt="right" />
      </div>
    </div>
  </div>
);

export default PhotosInRow;
