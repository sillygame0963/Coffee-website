import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/Blog" element={<Blog />} />
            </Routes>
          </div>
        </Router>

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
