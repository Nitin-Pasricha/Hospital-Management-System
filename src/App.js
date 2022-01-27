import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import LogIn from './Pages/Auth/Login/Login'
import SignUp from './Pages/Auth/Signup/Signup'
import DashBoard from './Pages/Dashboard/Dashboard'
import StaffDash from './Pages/Dashboard/StaffDash/StaffDash'
import RegisterPatient from './Pages/Dashboard/StaffDash/RegisterPatient'
import NotFound from './Pages/NotFound/NotFound'
import './App.css'

const App = () => {
  //we will check the following condition and state...
  //depeneding upon them routing will be done
  //right now we are not authenticating as apis are not integerated

  // const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user)
  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   user && user.token ? true : false
  // )
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/admin-dashboard' element={<DashBoard />} />
        <Route path='/dashboard' element={<StaffDash />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/register_patient' element={<RegisterPatient />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
