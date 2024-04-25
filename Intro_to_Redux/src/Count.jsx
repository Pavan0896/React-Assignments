import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      {JSON.stringify(count)}
      <button onClick={()=>dispatch({type:"ADD"})}>+</button>
      <button onClick={()=>dispatch({type:"SUBTRACT"})}>-</button>
    </div>
  );
};

export default Count;
