
import useForm from './UseForm'

const App2 = () => {
    const [form, handleChange, resetForm] = useForm({
        email:"",
        password:"",
    });
    const handleSubmit = (e)=>{
        e.preventDefault();

    }
  return (
    <div>
        <h2>Form from App2 Component</h2>
        {JSON.stringify(form)};
      <form onSubmit={handleSubmit}>
        <input type="text" name='email' placeholder='enter email' value={form.email} onChange={handleChange}/>
        <input type="password" name='password' placeholder='enter password' value={form.password} onChange={handleChange}/>
        <input type="submit" />
      </form>
      <button onClick={resetForm}>Reset</button>
    </div>
  )
}

export default App2
