import Icon from "./Icon";

type Props = {
  icon: string;
  iconWidth: string;
  clickHendler: () => void;
};

function RoundButton({ icon, iconWidth, clickHendler }: Props) {
  return (
    <button
      className="p-2 mr-2 rounded-full border border-transparent hover:border-gray-divider transition-colors"
      onClick={clickHendler}
    >
      <Icon width={iconWidth} url={icon} />
    </button>
  );
}

export default RoundButton;
