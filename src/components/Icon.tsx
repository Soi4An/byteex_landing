type Props = {
  width: string;
  url: string;
  bgColor?: string;
};

function Icon({ width, url, bgColor }: Props) {
  return (
    <div className="flex overflow-hidden rounded-full"
      style={{
        width: width,
        height: width,
        backgroundColor: bgColor,
      }}
    >
      <img
        className="w-full h-full object-cover"
        src={url}
        alt="Icon"
      />
    </div>
  );
}

export default Icon;
