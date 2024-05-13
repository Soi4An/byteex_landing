import Container from "./Container";
import GradientBG from "./GradientBG";

import productA from "../images/products/Product_1.png";
import productB from "../images/products/Product_2.png";
import productC from "../images/products/Product_3.png";
import productD from "../images/products/Product_4.png";
import productE from "../images/products/Product_5.png";
import CarouselProducts from "./CarouselProducts";

const products = [productA, productB, productC, productD, productE];
const correlationsItemsWidth = {
  def: 130,
  md: 170,
  xl: 200,
};

const Products = () => (
  <section>
    <GradientBG direction="b">
      <Container>
        <div className="flex flex-col items-center">
          <h3 className="mt-24 md:mt-20 text-base md:text-xl font-semibold text-gray-text-light">
            {"as seen in"}
          </h3>

          <div className="mt-3 w-full flex justify-center">
            <CarouselProducts
              products={products}
              correlationsItemsWidth={correlationsItemsWidth}
            />
          </div>
        </div>
      </Container>
    </GradientBG>
  </section>
);

export default Products;
