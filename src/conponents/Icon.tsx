type Props = {
  width: string;
  url: string;
};

function Icon({ width, url }: Props) {
  const widthClass = `w-[${width}]`;

  return <img className={"object-cover " + widthClass} src={url} alt="main" />;
}

export default Icon;
