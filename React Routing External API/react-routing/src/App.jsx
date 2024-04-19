import { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { fetchAPIContext } from "./FetchAPIContext";

function App() {
  const { prod } = useContext(fetchAPIContext);
  const { details, setDetails } = useContext(fetchAPIContext);
  console.log(details)

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
            <div
              key={i}
              style={{ boxShadow: "rgba(11, 10, 10, 0.2) 0px 8px 24px" }}
            >
              <Link
                to={`/productdetails/${e.id}`}
                onClick={() => setDetails(e)}
              >
                <h3>{e.title}</h3>
                <p>{e.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  };

  const ProductDetails = () => {
    return (
      <>
        <h2>Product Details</h2>
        <img src={details.image} alt="img" style={{height:"20%", width:"10%"}}/>
        <h3>{`Product Name : ${details.title}`}</h3>
        <p>{`Product Description : ${details.description}`}</p>
        <h5> {`$ ${details.price}`}</h5>
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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={<h2>Welcome to Introduction to React useNavigate hook</h2>}
        />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
