import { useCarousel } from "../utils/useCarousel";
import { FeedbackType } from "../types/FeedbackType";
import CarouselButtons from "./CarouselButtons";
import CarouselListComments from "./CarouselListComments";

type Props = {
  comments: FeedbackType[];
};

function CarouselBoxComments({ comments }: Props) {
  const { movedRight, handlersOfButtons, quantityPerPage } = useCarousel(
    comments.length
  );

  return (
    <CarouselButtons
      isHiddenedButtons={comments.length === quantityPerPage}
      handlers={handlersOfButtons}
    >
      <CarouselListComments comments={comments} movedRight={movedRight} />
    </CarouselButtons>
  );
}

export default CarouselBoxComments;
