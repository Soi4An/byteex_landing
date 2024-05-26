import DividerVertical from "./DividerVertical";
import SendingPeriod from "./SendingPeriod";

type Props = {
  sendingPeriod: string;
  paymentsImg: string;
};

const DeliveryPayment = ({ sendingPeriod, paymentsImg }: Props) => (
  <div className="flex gap-2 items-center h-5">
    <SendingPeriod period={sendingPeriod} />

    <DividerVertical />

    <img src={paymentsImg} alt="methods of payment" />
  </div>
);

export default DeliveryPayment;
