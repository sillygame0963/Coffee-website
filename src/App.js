import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Story from "./components/Story";
import Content from "./components/Content";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Slider />
        <Story />
        <Content />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
