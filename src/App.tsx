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
import SettingsProfile from './pages/Settings/pages/Profile'
import PasswordAndSecurity from './pages/Settings/pages/PasswordAndSecurity'
import Verification from './pages/Settings/pages/Verification'
import SettingsNotifications from './pages/Settings/pages/Notifications'
import PartnershipManager from './pages/Partnership/pages/PartnershipManager'
import PartnershipMyPrograms from './pages/Partnership/pages/MyPrograms'
import Program from './pages/Partnership/pages/Program'
import SelectionFreelancer from './pages/Partnership/pages/SelectionFreelancer'
import SelectionManager from './pages/Partnership/pages/SelectionManager'
import ProgressFreelancer from './pages/Partnership/pages/ProgressFreelancer'
import PartnershipCompleted from './pages/Partnership/pages/PartnershipCompleted'
import ServiceAll from './pages/Service/ServiceAll'
import ServiceMy from './pages/Service/ServiceMy'
import Service from './pages/Service/Service'

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

            <Route path="/settings/profile" element={<SettingsProfile />} />
            <Route path="/settings/password-security" element={<PasswordAndSecurity />} />
            <Route path="/settings/verification" element={<Verification />} />
            <Route path="/settings/notifications" element={<SettingsNotifications />} />

            <Route path="/partnership" element={<PartnershipManager />} />
            <Route path="/partnership/my-programs" element={<PartnershipMyPrograms />} />
            <Route path="/partnership/program" element={<Program />} />
            <Route path="/partnership/freelancer/selection" element={<SelectionFreelancer />} />
            <Route path="/partnership/manager/selection" element={<SelectionManager />} />
            <Route path="/partnership/freelancer/progress" element={<ProgressFreelancer />} />
            <Route path="/partnership/freelancer/completed" element={<PartnershipCompleted />} />

            <Route path="/partnership/service/all" element={<ServiceAll />} />
            <Route path="/partnership/service/my" element={<ServiceMy />} />
            <Route path="/service/" element={<Service />} />
         </Routes>
      </Router>
   </div>

  )
}

export default App
