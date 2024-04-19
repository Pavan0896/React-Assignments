import React, { useContext, useState } from "react";
import axios from "axios";
import { loginContext } from "./LoginContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [details ,setDetails] = useState({})
  let auth  = useContext(loginContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    let newDetails = {...details, email, password};

    axios
      .post("https://reqres.in/api/login", newDetails)
      .then((e) => {
        if(e.data.token){
            auth.setAuth(true);
        }
      });
    // setEmail("");
    // setPassword("");
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
