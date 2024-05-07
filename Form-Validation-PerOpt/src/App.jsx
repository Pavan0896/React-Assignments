import "./App.css";
import useForm from "./useForm";

function App() {
  const [form, handleChange, display, active] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onInput={handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          onInput={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onInput={handleChange}
        />
        <input
          type="submit"
          disabled={active || form.confirmPassword == false}
        />
      </form>
      <div>{display}</div>
    </>
  );
}

export default App;
