import { QuantitiesScreens } from "../types/QuantitiesScreens";

export const getQuantityForScreen = (
  params: QuantitiesScreens,
  currentScreenWidth: number,
) => {
  const { screens, quantities } = params;

  const screenSize =
    Object.keys(screens).find((size) => currentScreenWidth >= screens[size]) ||
    "def";

  return quantities[screenSize];
};
