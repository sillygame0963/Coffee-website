import Navbar from "./Navbar";
import Slider from "./Slider";
import Story from "./Story";
import Content from "./Content";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="Home">
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
