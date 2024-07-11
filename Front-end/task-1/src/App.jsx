import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Forget from './Forget'
import Home from './Home'
function App() {

  return (
    <div className='app'>
    <Router>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='forget' element={<Forget/>}/>
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
