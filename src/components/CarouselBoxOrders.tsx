import { useCarousel } from "../utils/useCarousel";
import { TitleTextIcon } from "../types/TitleTextIcon";
import CarouselButtons from "./CarouselButtons";
import CarouselListOrder from "./CarouselListOrder";

type Props = {
  items: TitleTextIcon[];
};

function CarouselBoxOrders({ items }: Props) {
  const { movedRight, handlersOfButtons, quantityPerPage } = useCarousel(
    items.length
  );

  return (
    <CarouselButtons
      isHiddenedButtons={items.length === quantityPerPage}
      handlers={handlersOfButtons}
    >
      <CarouselListOrder points={items} movedRight={movedRight} />
    </CarouselButtons>
  );
}

export default CarouselBoxOrders;
