import { useState } from "react";
import { TitleTextIcon } from "../types/TitleTextIcon";
import Icon from "./Icon";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Props = {
  impact: TitleTextIcon;
};
const GreenImpactItem = ({ impact }: Props) => {
  const titlePair = impact.title.split(" ");
  const titleNumber = Number(titlePair[0]);
  const titleText = titlePair[1];
  const startNumber = 0;

  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // 10% in view
  });

  if (inView && !startCount) {
    setStartCount(true);
  }

  return (
    <li className="flex flex-col items-center" ref={ref}>
      <Icon url={impact.icon} width={"42px"} bgColor={"#e4e4e4"} />

      <h3 className="font-bold text-2xl mt-3">
        {startCount ? (
          <CountUp
            start={startNumber}
            end={titleNumber}
            separator=","
            duration={3}
            suffix={" " + titleText}
          />
        ) : (
          <span>{`${startNumber} ${titleText}`}</span>
        )}
      </h3>

      <p className="font-semibold text-lg">{impact.text}</p>
    </li>
  );
};

export default GreenImpactItem;
