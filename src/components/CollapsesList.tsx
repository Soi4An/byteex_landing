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
        <>
          <CollapseItem key={`${item.title}-${ind}`} itemCollapse={item} />
          <DividerHorizontal />
        </>
      ))}
    </div>
  );
}

export default CollapsesList;
