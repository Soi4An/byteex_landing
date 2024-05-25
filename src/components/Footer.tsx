import { getFooterData } from "../api/getFooterData";
import ButtonCustomize from "./ButtonCustomize";
import Container from "./Container";
import GradientBG from "./GradientBG";

const { advantagesList, deliverPeriod, paymentsImg } = getFooterData();

const Footer = () => (
  <footer>
    <GradientBG direction="t">
      <Container>
        <ButtonCustomize />
      </Container>
    </GradientBG>
  </footer>
);

export default Footer;
