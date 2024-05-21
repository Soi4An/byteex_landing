import { Fragment } from "react/jsx-runtime";
import { TitleTextIcon } from "../types/TitleTextIcon";
import DividerVertical from "./DividerVertical";
import DividerHorizontal from "./DividerHorizontal";
import GreenImpactItem from "./GreenImpactItem";

type Props = {
  impacts: TitleTextIcon[];
};

function GreenImpactList({ impacts }: Props) {
  return (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-10 xl:gap-14 justify-center w-full">
      {impacts.map((impact, ind) => (
        <Fragment key={impact.title}>
          {ind !== 0 && (
            <div className="hidden md:block">
              <DividerVertical />
            </div>
          )}

          {ind !== 0 && (
            <div className="md:hidden">
              <DividerHorizontal />
            </div>
          )}

          <GreenImpactItem impact={impact} />
        </Fragment>
      ))}
    </ul>
  );
}

export default GreenImpactList;
