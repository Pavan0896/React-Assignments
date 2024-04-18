import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [prod, setProd] = useState([]);

  const About = () => {
    return (
      <>
        <h2>About</h2>
        <p>
          This is the application which uses useNavigate hook to navigte through
          components.
        </p>
      </>
    );
  };
  const Products = () => {
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((e) => e.json())
        .then((res) => setProd(res));
    }, []);
    return (
      <>
        <h2>Products</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "2%",
            margin: "1%",
            padding: "1%",
            
          }}
        >
          {prod.map((e, i) => (
            <div key={i} style={{boxShadow: "rgba(249, 232, 232, 0.2) 0px 8px 24px"}}>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  };
  const Contact = () => {
    return (
      <>
        <h2>Contact</h2>
        <h5>Name: React</h5>
        <h5>Phone Number: 9876543210</h5>
        <h5>emil: react@react.com</h5>
      </>
    );
  };

  return (
    <>
      <div id="navbar">
        <div id="navbar1">
          <h2>Navbar</h2>
        </div>
        <div id="navbar2">
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/about")}>About</p>
          <p onClick={() => navigate("/product")}>Products</p>
          <p onClick={() => navigate("/contact")}>Contact</p>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={<h2>Welcome to Introduction to React useNavigate hook</h2>}
        />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
