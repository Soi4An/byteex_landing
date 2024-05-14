import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ExtraButtonAndStars from "./components/ExtraButtonAndStars";
import Products from "./components/Products";
import GradientBG from "./components/GradientBG";
import AboutAs from "./components/AboutAs";
import AboutOrder from "./components/AboutOrder";

function App() {
  return (
    <div>
      {/* <Header />
      <Hero />
      <Products />
      <Benefits />

      <div className="md:hidden">
        <GradientBG direction="t">
          <div className="py-10">
            <ExtraButtonAndStars />
          </div>
        </GradientBG>
      </div> */}

      <AboutAs />
      <AboutOrder />
    </div>
  );
}

export default App;
