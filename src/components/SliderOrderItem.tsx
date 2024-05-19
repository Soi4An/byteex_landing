import { TitleTextIcon } from "../types/TitleTextIcon";
import Icon from "./Icon";
import "../App.css";

type Props = {
  point: TitleTextIcon;
  index: number;
};

function SliderOrderItem({ point, index }: Props) {
  const bgColor = index % 2 === 0 ? "#f0eeef" : "#f9f0e5";
  const { icon, title, text } = point;

  return (
    <div
      className="carousel__item flex flex-col items-center rounded-lg px-8 xl:px-9 py-16 xl:py-20"
      style={{ backgroundColor: bgColor }}
    >
      <Icon url={icon} width={"51px"} />

      <div className="my-2 xl:my-3">
        <h4 className="text-xl text-blue-text font-semibold">{title}</h4>
      </div>

      <p className="text-center">{text}</p>
    </div>
  );
}

export default SliderOrderItem;
