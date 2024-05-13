type Props = {
  width: string;
  url: string;
};

function Icon({ width, url }: Props) {
  const fullClass = `object-cover w-[${width}] h-[${width}]`;

  return <img className={fullClass} src={url} alt="icon" />;
}

export default Icon;
