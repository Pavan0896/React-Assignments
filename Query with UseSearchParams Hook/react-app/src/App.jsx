
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Products from "./Products";

function App() {
  return (
    <>
      <div id="navbar">
        <div id="navbar1">
          <h2>Navbar</h2>
        </div>
        <div id="navbar2">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={<h2>Welcome to Introduction to React useNavigate hook</h2>}
        />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id/" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
