import GradientBG from "./GradientBG";
import { getProductsData } from "../api/getProductsData";
import AnimationProducts from "./AnimationProducts";

const { listImages, title } = getProductsData();

const Products = () => (
  <section>
    <GradientBG direction="b">
      <h3 className="pt-24 md:pt-20 pb-3 text-center text-base md:text-xl font-semibold text-gray-text-light">
        {title}
      </h3>

      <AnimationProducts products={listImages} />
    </GradientBG>
  </section>
);

export default Products;
