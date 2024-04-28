import { Routes, Route, Link } from "react-router-dom";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import { Box, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div>
      <Box
        bg="black"
        w="100%"
        p={4}
        color="white"
        display={"flex"}
        justifyContent={"space-evenly"}
        padding={5}
        mb={25}
      >
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/login">Login</Link>
      </Box>

      <Routes>
        <Route
          path="/"
          element={
            <Text fontSize="5xl">
              Welcome to E-Commerce Website where you can shop over wide range
              of products. Head over to products page to view products
            </Text>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Navbar;
// Welcome to E-Commerce Website where you can shop over wide range of products.
