import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { carouselScreensData } from "../config";

interface CarouselData {
  screen: number;
  itemWidth: number;
  quantity: number;
  gap: number;
}

function getCurrentCarouselData(currentScreen: number) {
  return (
    carouselScreensData.find((data) => currentScreen >= data.screen) ||
    carouselScreensData[carouselScreensData.length - 1]
  );
}

export const useCarousel = (itemsLength: number) => {
  const [movedRight, setMovedRight] = useState<number>(0);
  const [carouselData, setCarouselData] = useState<CarouselData>(
    getCurrentCarouselData(window.innerWidth),
  );

  const { itemWidth, quantity, gap } = carouselData;
  const widthWithGap = itemWidth + gap;
  const lastPosition: number = widthWithGap * (itemsLength - quantity) * -1;

  const handleMoveRight = useCallback(() => {
    if (movedRight === lastPosition) {
      return setMovedRight(0);
    }

    return setMovedRight(movedRight - widthWithGap);
  }, [movedRight, lastPosition, widthWithGap]);

  const handleMoveLeft = useCallback(() => {
    if (movedRight === 0) {
      return setMovedRight(lastPosition);
    }

    return setMovedRight(movedRight + widthWithGap);
  }, [movedRight, lastPosition, widthWithGap]);

  const handleResetCarouselData = debounce(() => {
    const newCarouselData = getCurrentCarouselData(window.innerWidth);

    setCarouselData((prevCarouselData) => {
      if (newCarouselData.screen !== prevCarouselData.screen) {
        setMovedRight(0);
        return newCarouselData;
      }
      return prevCarouselData;
    });
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleResetCarouselData);

    return () => {
      window.removeEventListener("resize", handleResetCarouselData);
    };
  }, []);

  return {
    movedRight,
    handlersOfButtons: { handleMoveRight, handleMoveLeft },
    quantityPerPage: quantity,
  };
};
