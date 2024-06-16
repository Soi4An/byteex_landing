import Icon from "./Icon";

import iconStar from "../images/icons/star.svg";
import iconActiveStar from "../images/icons/star-active.svg";

type Props = {
  rating: 1 | 2 | 3 | 4 | 5;
  text: string | null;
  starWidth: string;
};

const Stars = ({ rating, text, starWidth }: Props) => (
  <div className="flex gap-2">
    <div className="flex justify-between items-center w-[60px]">
      {[1, 2, 3, 4, 5].map((numberStar) => {
        const url = numberStar <= rating ? iconActiveStar : iconStar;

        return <Icon key={numberStar} width={starWidth} url={url} />;
      })}
    </div>

    {!!text && (
      <p className="text-gray-text-light text-xs xl:text-sm font-comment tracking-tighter">
        {text}
      </p>
    )}
  </div>
);

export default Stars;
