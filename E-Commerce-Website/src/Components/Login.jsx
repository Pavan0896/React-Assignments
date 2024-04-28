import axios from "axios";
import { useContext, useState } from "react";
import { authContext } from "./AuthContext";
import { Input } from "@chakra-ui/react";

const Login = () => {
  const auth = useContext(authContext);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let newDetails = { ...details, [e.target.name]: e.target.value };
    setDetails(newDetails);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = async () => {
      let a = await axios.post("https://reqres.in/api/login", details);
      console.log(a.data);
      if (a.data.token === "QpwL5tke4Pnpja7X4") {
        auth.setAuth(true);
      } else {
        auth.setAuth(false);
      }
    };
    submitData();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="enter email"
          name="email"
          w={400}
          onInput={handleInput}
          required
        />
        <Input
          placeholder="enter password"
          type="password"
          name="password"
          w={400}
          onInput={handleInput}
          required
        />
        <Input
          value="Submit"
          type="submit"
          w={100}
          bgColor="teal"
          color={"white"}
        />
      </form>
    </div>
  );
};

export default Login;
