import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomeNotAuth from '@pages/Home-not-auth/HomeNotAuth'
import Error from './pages/Error'
import SingUp from './pages/Authentication/SingUp'

function App() {

  return (
    <>
       <Routes>
          <Route path="/" element={<HomeNotAuth />} />
          <Route path="/error" element={<Error />} />
          <Route path="/sing-up" element={<SingUp />} />
       </Routes>
    </>

  )
}

export default App
