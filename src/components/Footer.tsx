import { getFooterData } from "../api/getFooterData";
import ButtonCustomize from "./ButtonCustomize";
import Container from "./Container";
import DeliveryPayment from "./DeliveryPayment";
import GradientBG from "./GradientBG";

import Stars from "./Stars";

const { advantagesList, sendingPeriod, paymentsImg } = getFooterData();
const ratingText = "Over 500+ 5 Star Reviews Online";

const Footer = () => (
  <footer>
    <GradientBG direction="t">
      <Container>
        <div className="flex flex-col items-center gap-3">
          <ButtonCustomize />

          <div className="md:hidden">
            <Stars rating={5} starWidth={"14px"} text={ratingText} />
          </div>
        </div>

        <div className="">
          <DeliveryPayment
            sendingPeriod={sendingPeriod}
            paymentsImg={paymentsImg}
          />
        </div>
      </Container>
    </GradientBG>
  </footer>
);

export default Footer;
