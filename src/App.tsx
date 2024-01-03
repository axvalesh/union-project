import { Route, HashRouter as Router, Routes }  from 'react-router-dom'
import './App.scss'
import HomeNotAuth from '@pages/Home-not-auth/HomeNotAuth'
import Error from './pages/Error'
import SingUp from './pages/Authentication/SingUp'
import Onboarding from './pages/Authentication/Onboarding'
import StartGuide from './pages/Authentication/Onboarding/pages/StartGuide'
import DashboardHome from './pages/Dashboard/pages/Home'
import Account from './pages/Dashboard/pages/Account'
import Missions from './pages/Dashboard/pages/Missions'
import Rewards from './pages/Dashboard/pages/Rewards'
import Upgrades from './pages/Dashboard/pages/Upgrades'

function App() {

  return (
   <div className='App'>
      <Router>
         <Routes>
            <Route path="/" element={<HomeNotAuth />} />
            <Route path="/error" element={<Error />} />
  
          
            <Route path="/sing-up" element={<SingUp />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/start-guide" element={<StartGuide />} />
  
            <Route path="/dashboard/home" element={<DashboardHome />} />
            <Route path="/dashboard/account" element={<Account />} />
            <Route path="/dashboard/missions" element={<Missions />} />
            <Route path="/dashboard/rewards" element={<Rewards />} />
            <Route path="/dashboard/upgrades" element={<Upgrades />} />
         </Routes>
      </Router>
   </div>

  )
}

export default App
