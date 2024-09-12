import "./App.css";

import Container from "./components/container/Container";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import BoxTwo from "./components/boxTwo/BoxTwo";
import BoxThree from "./components/boxThree/BoxThree";
import BoxFour from "./components/boxFour/BoxFour";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <div className="top">
          <u> FREE SHIPPING for orders over $300. Order today !</u>
        </div>
        <Navbar />
        <Hero />
        <Container />
        <BoxTwo />
        <BoxThree />
        <BoxFour />
        <Footer />
      </div>
    </>
  );
}

export default App;
