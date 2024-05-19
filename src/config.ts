import { CarouselData } from "./types/CarouselData";
import { QuantitiesScreens } from "./types/QuantitiesScreens";

export const screensSizes: Record<string, number> = {
  xxl: 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
  tn: 440,
};

const quantitiesPhotosInTape: Record<string, number> = {
  def: 3,
  tn: 4,
  sm: 5,
  md: 6,
  lg: 9,
  xl: 11,
  xxl: 14,
};

export const TapePhotosParams: QuantitiesScreens = {
  quantities: quantitiesPhotosInTape,
  screens: screensSizes,
};

export const carouselScreensData: CarouselData[] = [
  // from the biggest screen to the least!
  {
    screen: 1280,
    quantity: 3,
    itemWidth: 345,
    boxWidth: 1100,
    gap: 32.5,
  },
  {
    screen: 768,
    quantity: 2,
    itemWidth: 300,
    boxWidth: 620,
    gap: 20,
  },
  {
    screen: 440,
    quantity: 1,
    itemWidth: 300,
    boxWidth: 300,
    gap: 20,
  },
  {
    screen: 0,
    quantity: 1,
    itemWidth: 200,
    boxWidth: 200,
    gap: 20,
  },
];
