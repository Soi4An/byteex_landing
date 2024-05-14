type Props = {
  width: string;
  url: string;
};

function Icon({ width, url }: Props) {
  // const fullClass = `object-cover w-[${width}] h-[${width}]`;
  // return <img className={fullClass} src={url} alt="icon" />;
  return (
    <div className="flex overflow-hidden"
      style={{
        width: width,
        height: width,
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
