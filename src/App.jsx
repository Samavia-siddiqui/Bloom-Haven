// import { useState } from 'react'
// import Navbar from './components/Navbar.jsx'
// import './App.css'
// import Hero from "./components/Hero.jsx";
// import Card from './components/Card.jsx';
// import Testimonials from './components/Testimonial.jsx';
// import Categories from './components/Categories.jsx';
// import Footer from "./components/Footer";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Navbar/>
//     <Hero/>
//     <Card/>
//     <Testimonials/>
//     <Categories/>
//     <Footer/>
//           </>
//   )
// }

// export default App



// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;