import "./App.css";
import Header from "./conponents/Header";
import Hero from "./conponents/Hero";

function App() {
  return (
    <div>
      <Header />

      <Hero />
      <p>Hello world</p>
      <p className="font-general">Hello world</p>
      <p className="font-comment">Hello world</p>
    </div>
  );
}

export default App;
