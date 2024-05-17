import { Collapse } from "react-collapse";
import { TitleAndText } from "../types/TitleAndText";
import { useCallback, useState } from "react";
import CollapseButton from "./CollapseButton";

type Props = {
  itemCollapse: TitleAndText;
};

function CollapseItem({ itemCollapse }: Props) {
  const { title, text } = itemCollapse;
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const clickOpen = () => setIsOpened((curr) => !curr);

  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <div className="flex justify-between items-center">
        <h4 className="text-lg text-blue-text font-bold">{title}</h4>
        <CollapseButton handlerClick={clickOpen} isOpen={isOpened} />
      </div>

      <Collapse isOpened={isOpened}>
        <p>{text}</p>
      </Collapse>
    </div>
  );
}

export default CollapseItem;
