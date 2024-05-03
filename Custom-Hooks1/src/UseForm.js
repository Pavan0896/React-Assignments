import { useState } from "react";

const useForm = (initState) => {
  const [form, setForm] = useState(initState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initState);
  };

  return [form, handleChange, resetForm];
};

export default useForm;
