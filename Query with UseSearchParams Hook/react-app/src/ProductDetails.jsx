import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"

const ProductDetails = ()=>{
    let {id} = useParams();
    const [details, setDetails] = useState({})

    useEffect(()=>{
        const getData = async ()=>{
            let a = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
            let b = await a.json();
            setDetails(b.data)
        }
        getData();
    },[])
    return (
      <>
       <h2>Product Details</h2>
       <img src={details.image} alt="img" />
       <h3>{`Product Name: ${details.title}`}</h3>
       <h5>{`Product Brand: ${details.brand}`}</h5>
       <h3>{`$ ${details.price}`}</h3>
      </>
    )
  }

  export default ProductDetails;