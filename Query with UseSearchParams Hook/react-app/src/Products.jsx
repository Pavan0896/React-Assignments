import React from "react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  const [prod, setProd] = useState([]);
  const [search, setSearchParams] = useSearchParams();
  const [cate, setCate] = useState(search.get("filter")||"all");

  useEffect(() => {
    const getData = async () => {
      let a = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${cate}`
      );
      let b = await a.json();
      console.log(b.data);
      setProd(b.data);
    };
    getData();
  }, [cate]);

  const handleChange = (e)=>{
    setSearchParams({filter:e.target.value});
    setCate(e.target.value);
  }
  return (
    <>
      <h2>Products</h2>

      <div>
        <div>
          <select onChange={handleChange}>
            <option value="all">Search based on Brands</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="homedecor">Home Decor</option>
          </select>
        </div>
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
              style={{ boxShadow: "rgba(255, 251, 251, 0.2) 0px 8px 24px" }}
            >
              <Link to={`/product/${e.id}`}>
                <h3>{e.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
