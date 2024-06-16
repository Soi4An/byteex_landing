type Props = {
  photos: string[];
};
function PhotosInDiagonally({ photos }: Props) {
  const [photoA, photoB, photoC] = photos.slice(0, 3);

  return (
    <div className="relative flex items-center justify-center h-full">
      <img className="object-cover w-4/5 h-4/5 " src={photoB} alt="main" />

      <div className="absolute top-0 left-0 border-4 border-white z-20 w-1/3">
        <img className="object-cover w-full" src={photoA} alt="left" />
      </div>

      <div className="absolute bottom-0 right-0 border-4 border-white z-20 w-1/3">
        <img className="object-cover w-full" src={photoC} alt="left" />
      </div>
    </div>
  );
}

export default PhotosInDiagonally;
