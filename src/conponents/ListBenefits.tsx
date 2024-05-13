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
        <>
          {ind !== 0 && (
            <div className="md:hidden">
              <DividerHorizontal />
            </div>
          )}

          <li
            key={ind}
            className="flex flex-col md:flex-row gap-y-5 md:gap-3 items-center md:items-start"
          >
            <Icon width={"42px"} url={benefit.icon} />

            <div className="w-1/2 md:w-2/3 xl:w-full">
              <h4 className="text-center md:text-start text-blue-text text-xl lg:text-2xl font-semibold">
                {benefit.title}
              </h4>

              <p className="text-center md:text-start text-sm sm:text-base">
                {benefit.text}
              </p>
            </div>
          </li>
        </>
      );
    })}
  </ul>
);

export default ListBenefits;
