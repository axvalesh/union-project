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
import Activity from './pages/Dashboard/pages/Activity'
import MySubscription from './pages/Subscriptions/pages/MySubscription'
import FreelancersSubscriptions from './pages/Freelancers/pages/Subscriptions'
import SubscriptionsPlans from './pages/Subscriptions/pages/Plans'

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
            <Route path="/dashboard/activity" element={<Activity />} />

            <Route path="/subscriptions" element={<MySubscription />} />

            <Route path="/freelancers/subscriptions" element={<FreelancersSubscriptions />} />
            <Route path="/subscriptions/plans" element={<SubscriptionsPlans />} />
         </Routes>
      </Router>
   </div>

  )
}

export default App
