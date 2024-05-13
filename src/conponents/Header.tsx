import React from "react";

const Header = React.memo(() => (
  <header className="flex justify-center bg-orange-gradient font-comment text-xs leading-8">
    <p className="hidden md:inline">
      {
        "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)   |   FREE SHIPPING on orders > $200   |   easy 45 day return window."
      }
    </p>

    <p className="hidden tn:inline md:hidden">{"FREE SHIPPING on orders > $200   |   easy 45 day return window."}</p>
    
    <p className="inline tn:hidden">{"FREE SHIPPING on orders > $200"}</p>
  </header>
));

export default Header;
