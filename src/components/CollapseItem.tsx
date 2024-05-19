import { Collapse } from "react-collapse";
import { TitleText } from "../types/TitleText";
import { useState } from "react";
import CollapseButton from "./CollapseButton";
import "../App.css";

type Props = {
  itemCollapse: TitleText;
};

function CollapseItem({ itemCollapse }: Props) {
  const { title, text } = itemCollapse;
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleOpen = () => setIsOpened((curr) => !curr);

  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <div className="flex justify-between items-center">
        <h4 className="text-lg text-blue-text font-bold">{title}</h4>
        <CollapseButton handlerClick={toggleOpen} isOpen={isOpened} />
      </div>

      <Collapse isOpened={isOpened} theme={{ collapse: "height-transition" }}>
        <p>{text}</p>
      </Collapse>
    </div>
  );
}

export default CollapseItem;
