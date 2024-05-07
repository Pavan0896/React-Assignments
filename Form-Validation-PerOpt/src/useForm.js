import { useState } from "react";

const useForm = (initState) => {
  const [form, setForm] = useState(initState);
  const [display, setDisplay] = useState("");
  const [btn, setBtn] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name == "name") {
      if (value.length < 3) {
        setDisplay("Name must contain atleast 3 characters");
        setForm({ ...form, [name]: "" });
      } else {
        setForm({ ...form, [name]: value });
        setDisplay("");
      }
    }
    if (name == "email") {
      if (!value.includes("@")) {
        setDisplay("Email must be a valid email address format.");
        setForm({ ...form, [name]: "" });
      } else {
        setForm({ ...form, [name]: value });
        setDisplay("");
      }
    }
    if (name == "password") {
      if (value.length < 6) {
        setDisplay("Password must contain at least 6 characters.");
        setForm({ ...form, [name]: "" });
      } else {
        setForm({ ...form, [name]: value });
        setDisplay("");
      }
    }
    if (name == "confirmPassword") {
      if (value !== form.password) {
        setDisplay("Password not matching");
        setForm((prev) => ({ ...prev, confirmPassword: false }));
      } else {
        setDisplay("");
        setForm((prev) => ({ ...prev, confirmPassword: true }));
      }
    }
    if (form.name && form.email && form.password) {
      setBtn(false);
    }
  };

  return [form, handleChange, display, btn];
};

export default useForm;
