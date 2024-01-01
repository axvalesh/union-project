import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomeNotAuth from '@pages/Home-not-auth/HomeNotAuth'
import Error from './pages/Error'
import SingUp from './pages/Authentication/SingUp'
import Onboarding from './pages/Authentication/Onboarding'
import StartGuide from './pages/Authentication/Onboarding/pages/StartGuide'
import DashboardHome from './pages/Dashboard/pages/Home'

function App() {

  return (
    <>
       <Routes>
          <Route path="/" element={<HomeNotAuth />} />
          <Route path="/error" element={<Error />} />

        
          <Route path="/sing-up" element={<SingUp />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/start-guide" element={<StartGuide />} />

          <Route path="/dashboard/home" element={<DashboardHome />} />

       </Routes>
    </>

  )
}

export default App
