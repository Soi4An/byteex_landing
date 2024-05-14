import { Fragment } from "react/jsx-runtime";
import DividerHorizontal from "./DividerHorizontal";
import Icon from "./Icon";

type Item = {
  icon: string;
  title: string;
  text: string;
};

type Props = {
  benefits: Item[];
};

const ListBenefits = ({ benefits }: Props) => (
  <ul className="flex flex-col gap-7 md:gap-5 w-full">
    {benefits.map((benefit, ind) => {
      return (
        <Fragment key={ind}>
          {ind !== 0 && (
            <div className="md:hidden">
              <DividerHorizontal />
            </div>
          )}

          <li className="flex flex-col md:flex-row gap-y-5 md:gap-3 items-center md:items-start">
            <Icon width={"42px"} url={benefit.icon} />

            <div className="w-1/2 md:w-full">
              <h4 className="text-center md:text-start text-blue-text text-xl lg:text-2xl font-semibold">
                {benefit.title}
              </h4>

              <p className="text-center md:text-start text-sm sm:text-base mt-5 md:mt-4 xl:mt-3">
                {benefit.text}
              </p>
            </div>
          </li>
        </Fragment>
      );
    })}
  </ul>
);

export default ListBenefits;
