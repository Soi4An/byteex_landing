import productA from "../images/products/Product_1.png";
import productB from "../images/products/Product_2.png";
import productC from "../images/products/Product_3.png";
import productD from "../images/products/Product_4.png";
import productE from "../images/products/Product_5.png";

export const getProductsData = () => {
  const listImages = [productA, productB, productC, productD, productE];
  const title = "as seen in";

  return {
    listImages, title,
  };
 };
