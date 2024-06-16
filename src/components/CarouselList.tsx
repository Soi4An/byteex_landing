import { ReactNode } from "react";
import CarouselButtons from "./CarouselButtons";
import { useCarousel } from "../utils/useCarousel";

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
};

function CarouselList<T>({ items, renderItem }: Props<T>) {
  const { movedRight, handlersOfButtons, quantityPerPage } = useCarousel(
    items.length,
  );

  return (
    <CarouselButtons
      isHiddenedButtons={items.length === quantityPerPage}
      handlers={handlersOfButtons}
    >
      <div className="h-full overflow-hidden carousel__outside-box">
        <ul
          className="flex w-max transform-transition"
          style={{
            transform: `translateX(${movedRight}px)`,
          }}
        >
          {items.map((item, ind) => renderItem(item, ind))}
        </ul>
      </div>
    </CarouselButtons>
  );
}

export default CarouselList;
