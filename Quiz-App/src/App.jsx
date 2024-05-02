import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/login'
import Quiz from './Components/Quiz'
import PrivateRoute from './Components/PrivateRoute'
import { Heading } from '@chakra-ui/react'

function App() {
  

  return (
    <>
    <Heading mb={5}>React Quiz</Heading>
      <div style={{display:'flex', justifyContent:"space-evenly", marginBottom:"2%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding:"2%"}}>
        <Link to="/login">Login</Link>
        <Link to="/quiz">Quiz</Link>
      </div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/quiz' element={<PrivateRoute><Quiz/></PrivateRoute>}/>
        </Routes>
    </>
  )
}

export default App
