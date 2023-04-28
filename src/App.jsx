import "./App.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
