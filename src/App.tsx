import "./App.css";
import Benefits from "./conponents/Benefits";
import ButtonCustomize from "./conponents/ButtonCustomize";
import ExtraButtonAndStars from "./conponents/ExtraButtonAndStars";
import GradientBG from "./conponents/GradientBG";
import Header from "./conponents/Header";
import Hero from "./conponents/Hero";
import Products from "./conponents/Products";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Benefits />

      <div className="md:hidden">
        <ExtraButtonAndStars />
      </div>

      {/* <AboutAs /> */}
    </div>
  );
}

export default App;
