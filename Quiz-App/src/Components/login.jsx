import { useDispatch } from "react-redux";
import { failAction, successAction } from "../Redux/actions";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

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
        dispatch(successAction());
      } else {
        dispatch(failAction());
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
          w={300}
          onChange={handleInput}
          required
        />
        <Input
          type="password"
          placeholder="enter pssword"
          name="password"
          onChange={handleInput}
          w={300}
          required
        />
        <Input type="submit" w={100} />
      </form>
    </div>
  );
};

export default Login;
