import {Route,Routes} from 'react-router-dom';
import Gallery from './pages/Gallery'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Home</h1>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/contact' element={<h1>Contact</h1>}></Route>
        <Route path='/about' element={<h1>About</h1>}></Route>
    </Routes>
  )
}

export default AllRoutes;