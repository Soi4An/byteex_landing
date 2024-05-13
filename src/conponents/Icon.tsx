type Props = {
  width: string;
  url: string;
};

function Icon({ width, url }: Props) {
  const widthClass = `w-[${width}] h-[${width}]`;

  return <img className={"object-cover " + widthClass} src={url} alt="icon" />;
}

export default Icon;
