import { useRef } from "react";

const ChangeColor = () => {
  const divRef = useRef(null);

  const changeColor = () => {
    console.log("h1");
    if (divRef.current) {
      divRef.current.style.backgroundColor = getColors();
    }
  };

  const getColors = () => {
    let colors = ["red", "violet", "green", "black", "gold", "cyan", "orange"];
    let color = Math.floor(Math.random() * (colors.length));
    return colors[color];
  };
  
  return (
    <div>
      <div
        ref={divRef}
        onClick={changeColor}
        style={{
          padding: "3%",
          color: "Grey",
          cursor: "pointer",
        }}
      >
        Click to Change Color
      </div>
    </div>
  );
};

export default ChangeColor;
