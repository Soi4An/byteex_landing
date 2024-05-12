const Header = () => (
  <header className="flex justify-center gap-5 bg-orange-bg font-comment text-xs leading-8">
    <p className="hidden md:inline">
      {
        "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)   |   FREE SHIPPING on orders > $200   |   easy 45 day return window."
      }
    </p>

    <p className="hidden sm:inline md:hidden">{"FREE SHIPPING on orders > $200   |   easy 45 day return window."}</p>
    
    <p className="inline sm:hidden">{"FREE SHIPPING on orders > $200"}</p>
  </header>
);

export default Header;
