import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const form = useRef();
  let arr = useRef([]);
  const [display, setDisplay] = useState("");

  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  useEffect(() => {
    form.current["0"].focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let userName = form.current["0"].value;
    let email = form.current["1"].value;
    let password = form.current["2"].value;
    let phone = form.current["3"].value;

    if (userName.length < 5) {
      alert("User name must be atleast 5 characters long");
      return;
    } else if (!email.includes("@")) {
      alert("Must include valid email");
      return;
    } else if (!regex.test(password)) {
      alert(
        "Password should contain atleast one number, one special character, one capital letter and length between 8 and 15 characters"
      );
      return;
    } else if (phone.length < 10 || phone.length > 10) {
      alert("Phone number should be 10 digits. Please check again.");
      return;
    } else {
      let obj = { userName, email, password, phone };
      arr.current.push(obj);
      console.log(arr.current);
    }

    form.current["0"].value = "";
    form.current["1"].value = "";
    form.current["2"].value = "";
    form.current["3"].value = "";
  };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            if (e.target.value.length < 5) {
              setDisplay("User name must be atleast 5 characters long");
            } else {
              form.current["0"].value = e.target.value;
              setDisplay("");
            }
          }}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            if (!e.target.value.includes("@")) {
              setDisplay("Must include valid email");
            } else {
              form.current["1"].value = e.target.value;
              setDisplay("");
            }
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            if (!regex.test(e.target.value)) {
              setDisplay(
                "Password should contain atleast one number, one special character, one capital letter and length between 8 and 15 characters"
              );
            } else {
              form.current["2"].value = e.target.value;
              setDisplay("");
            }
          }}
        />
        <input
          type="number"
          placeholder="phone number"
          onChange={(e) => {
            if (e.target.value.length < 10 || e.target.value.length > 10) {
              setDisplay(
                "Phone number should be 10 digits. Please check again."
              );
            } else {
              form.current["3"].value = e.target.value;
              setDisplay("");
            }
          }}
        />
        <input type="submit" />
      </form>

      <div>{display}</div>
    </>
  );
}

export default App;
