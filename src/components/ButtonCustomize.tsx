import Icon from "./Icon";
import iconArrow from "../images/icons/arrow_right_long.svg";

type Props = {
  arrowImg?: string;
};

const ButtonCustomize = ({ arrowImg = iconArrow }: Props) => (
  <button className="flex gap-4 justify-center items-center w-full max-w-96 min-w-52 h-14 rounded bg-blue-text hover:bg-blue-text-hover text-white text-base transition-colors">
    <p>{"Customize Your Outfit"}</p>

    {!!arrowImg && <Icon width={"23px"} url={arrowImg} />}
  </button>
);

export default ButtonCustomize;
