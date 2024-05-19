import { Fragment } from "react/jsx-runtime";
import { TitleText } from "../types/TitleText";
import CollapseItem from "./CollapseItem";
import DividerHorizontal from "./DividerHorizontal";

type Props = {
  items: TitleText[];
};

function CollapsesList({ items }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <DividerHorizontal />

      {items.map((item, ind) => (
        <Fragment key={`${item.title}-${ind}`}>
          <CollapseItem itemCollapse={item} />
          <DividerHorizontal />
        </Fragment>
      ))}
    </div>
  );
}

export default CollapsesList;
