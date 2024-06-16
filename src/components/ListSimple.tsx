import Icon from "./Icon";

type Item = {
  icon: string;
  text: string;
};

type Props = {
  reasons: Item[];
};

const ListSimple = ({ reasons }: Props) => (
  <ul className="flex flex-col gap-6 md:gap-5 w-full">
    {reasons.map((reason, ind) => {
      return (
        <li key={ind} className="flex gap-4 md:gap-3 items-center">
          <div className="w-max">
            <Icon width={"32px"} url={reason.icon} bgColor="#f9f0e5" />
          </div>

          <p className="text-sm sm:text-base">{reason.text}</p>
        </li>
      );
    })}
  </ul>
);

export default ListSimple;
