import { Fragment } from "react/jsx-runtime";
import { IconText } from "../types/IconText";
import Icon from "./Icon";
import DividerVertical from "./DividerVertical";

type Props = {
  advantages: IconText[];
};

const ListAdvantages = ({ advantages }: Props) => (
  <ul className="flex gap-6 h-12">
    {advantages.map(({ icon, text }, ind) => (
      <Fragment key={text}>
        {ind !== 0 && <DividerVertical />}

        <li className="flex gap-3 items-center max-w-40">
          <div>
            <Icon url={icon} width={"32px"} />
          </div>

          <p className="">{text}</p>
        </li>
      </Fragment>
    ))}
  </ul>
);

export default ListAdvantages;
