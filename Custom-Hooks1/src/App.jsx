import "./App.css";
import useForm from "./UseForm";

function App() {
  const [form, handleChange, resetForm] = useForm({
    name: "",
    hobby: "",
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
    
  }

  return (
    <>
    <h2>Form from App Component</h2>
    {JSON.stringify(form)}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="enter name" value={form.name} onChange={handleChange}/>
        <input type="text" name="hobby" placeholder="enter hobby" value={form.hobby} onChange={handleChange}/>
        <input type="submit" />
      </form>
      <button onClick={resetForm}>Reset</button>
    </>
  );
}

export default App;
