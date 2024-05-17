import { Fragment } from "react/jsx-runtime";
import { TitleAndText } from "../types/TitleAndText";
import CollapseItem from "./CollapseItem";
import DividerHorizontal from "./DividerHorizontal";

type Props = {
  items: TitleAndText[];
};

function CollapsesList({ items }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <DividerHorizontal />

      {items.map((item, ind) => (
        <Fragment key={`${item.title}-${ind}`} >
          <CollapseItem itemCollapse={item} />
          <DividerHorizontal />
        </Fragment>
      ))}
    </div>
  );
}

export default CollapsesList;
