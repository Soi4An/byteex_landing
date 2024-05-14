import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ExtraButtonAndStars from "./components/ExtraButtonAndStars";
import Products from "./components/Products";
import AboutAs from "./components/AboutAs";
import GradientBG from "./components/GradientBG";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Benefits />

      <div className="md:hidden">
        <GradientBG direction="t">
          <ExtraButtonAndStars />
        </GradientBG>
      </div>

      <AboutAs />
      {/* <AboutOrder /> */}
    </div>
  );
}

export default App;
