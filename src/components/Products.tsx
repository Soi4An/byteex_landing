import Container from "./Container";
import GradientBG from "./GradientBG";
import CarouselProducts from "./CarouselProducts";
import { getProductsData } from "../api/getProductsData";

const { listImages, correlationsItemsWidth } = getProductsData();

const Products = () => (
  <section>
    <GradientBG direction="b">
      <Container extraClasses={'flex flex-col items-center'}>
          <h3 className="mt-24 md:mt-20 text-base md:text-xl font-semibold text-gray-text-light">
            {"as seen in"}
          </h3>

          <div className="mt-3 w-full flex justify-center">
            <CarouselProducts
              products={listImages}
              correlationsItemsWidth={correlationsItemsWidth}
            />
          </div>
      </Container>
    </GradientBG>
  </section>
);

export default Products;
