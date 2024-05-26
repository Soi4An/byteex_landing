import iconClock from "../images/icons/clock.svg";
import Icon from "./Icon";

type Props = {
  period: string;
};

const SendingPeriod = ({ period }: Props) => (
  <div className="flex gap-1 items-center">
    <Icon url={iconClock} width={'11px'} />

    <p className="text-green-text font-comment text-xs">
      {`Ships in ${period}`}
    </p>
  </div>
);

export default SendingPeriod;
