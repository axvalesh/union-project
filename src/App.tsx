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
import MyTeams from './pages/Teams/pages/MyTeams'
import TeamMembers from './pages/Team/pages/Members'
import TeamSquads from './pages/Team/pages/Squads'
import CommunityPosts from './pages/Community'
import PostPageById from './pages/Community/components/PostPage'

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

            <Route path="/teams/my-teams" element={<MyTeams />} />{/* customer*/}

            <Route path="/team/members" element={<TeamMembers />} />
            <Route path="/team/squads" element={<TeamSquads />} />

            <Route path="/community/posts" element={<CommunityPosts />} />
            <Route path="/community/post" element={<PostPageById />} />
         </Routes>
      </Router>
   </div>

  )
}

export default App
