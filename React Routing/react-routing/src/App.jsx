import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    let updatedData = { ...data, [event.target.name]: event.target.value };
    setData(updatedData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.userName && data.password != "") {
      let updatedUsers = [...users, data];
      setUsers(updatedUsers);
      setData({
        userName: "",
        password: "",
      });
    }
  };

  const Login = () => {
    return (
      <>
      <h2>Welcome to Login page</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={data.userName}
            name="userName"
            placeholder="enter name"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            value={data.password}
            name="password"
            placeholder="enter password"
            onChange={handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </>
    );
  };

  const Users = () => {
    return (
      <div>
        <h2>Users</h2>
        {users.map((e, i) => (
          <h3 key={i}>{e.userName}</h3>
        ))}
      </div>
    );
  };

  return (
    <>
      <div id="navbar">
        <div id="navbar1">
          <h2>Navbar</h2>
        </div>
        <div id="navbar2">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/users">Users</Link>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={<h2>Welcome to Introduction to React Router</h2>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
