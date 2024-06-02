type Props = {
  products: string[];
};

function AnimationProducts({ products }: Props) {
  return (
    <section className={`w-full overflow-hidden`}>
      <ul className="flex gap-12 xl:gap-14 w-max animate-moving-tape">
        {products.concat(products, products).map((product, ind) => (
          <li className={`flex justify-center`} key={ind}>
            <img
              className={`object-contain max-w-[150px] max-h-[40px] md:max-w-[250px] md:max-h-[60px]`}
              src={product}
              alt={"product-logo"}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AnimationProducts;
