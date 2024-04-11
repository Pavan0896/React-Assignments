import { useRef } from "react";

const UncontrolledComponent = () => {
  const inp2 = useRef("");
  const handleChange = () => {
    let inputValue = inp2.current.value;
    let display = document.getElementById("display");
    display.innerText = inputValue;
  };
  return (
    <div>
      <input type="text" ref={inp2} onChange={handleChange} />
      <div id="display"></div>
    </div>
  );
};

export default UncontrolledComponent;
