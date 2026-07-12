import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

// App Router
const App = () => {
  // const routes = [
  //   { path: "/", element: <Home /> },
  //   { path: "/about", element: <About /> },
  //   { path: "/contact", element: <Contact /> },
  // ];

  return (
    // Fragment Template <></>
    <div className="">
      <Navbar />

      {/* Page Body */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product /> } />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Dynamic Routes */}
      {/* <Routes>
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))
        }
      </Routes>*/}

      <Footer />
    </div>
  );
};

export default App;
