import { useState } from "react";

type Props = {
  products: string[];
  correlationsItemsWidth: {
    def: number;
    md: number;
    xl: number;
  };
};

function CarouselProducts({ products, correlationsItemsWidth }: Props) {
  const [moveRight, getMoveRight] = useState(0);

  const { def, md, xl } = correlationsItemsWidth;

  const gap = 12;
  const numberDef = 3;
  const numberMd = 4;
  const numberXl = 5;
  const widthDef = def * numberDef + gap * (numberDef - 1) + "px";
  const widthMb = md * numberMd + gap * (numberMd - 1) + "px";
  const widthXl = xl * numberXl + gap * (numberXl - 1) + "px";

  return (
    <>
      <div
        className={`flex flex-col md:hidden overflow-hidden`}
        style={{ width: widthDef }}
      >
        <div
          className="w-max"
          style={{
            transform: `translateX(${moveRight}px)`,
            transition: `transform 500ms linear`,
          }}
        >
          <ul className="flex gap-3 w-full items-center">
            {products.map((product) => (
              <li className={`flex justify-center md:hidden`} key={product}>
                <img
                  className={`object-cover`}
                  style={{ width: def + "px" }}
                  src={product}
                  alt={"product-logo"}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="button__container"></div>
      </div>

      <div
        className="hidden md:flex xl:hidden flex-col overflow-hidden"
        style={{ width: widthMb }}
      >
        <div
          className="w-max"
          style={{
            transform: `translateX(${moveRight}px)`,
            transition: `transform 500ms linear`,
          }}
        >
          <ul className="flex gap-3 w-full items-center">
            {products.map((product) => (
              <li className={`flex justify-center`} key={product}>
                <img
                  className={`object-cover`}
                  style={{ width: md }}
                  src={product}
                  alt={"product-logo"}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="button__container"></div>
      </div>

      <div
        className="hidden xl:flex flex-col overflow-hidden"
        style={{ width: widthXl }}
      >
        <div
          className="w-max"
          style={{
            transform: `translateX(${moveRight}px)`,
            transition: `transform 500ms linear`,
          }}
        >
          <ul className="flex gap-3 w-full items-center">
            {products.map((product) => (
              <li className={`flex justify-center`} key={product}>
                <img
                  className={`object-cover`}
                  style={{ width: xl }}
                  src={product}
                  alt={"product-logo"}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="button__container"></div>
      </div>
    </>
  );
}

export default CarouselProducts;
