import "./App.css";
import { Routes, Route } from "react-router-dom";

//PAGES
import Blog from "./Pages/Pages/Blog";
import Home from "./components/Home";
import About from "./Pages/Pages/About";
import Product from "./Pages/Pages/Product";
import Contact from "./Pages/Pages/Contact";
import Signin from "./Pages/Pages/Signin";
import Signup from "./Pages/Pages/Signup";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
