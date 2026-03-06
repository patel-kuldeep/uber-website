import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Dashboard from './pages/Dashboard'
import CaptainDashboard from './pages/CaptainDashboard'

import { ProtectedRoute } from './routes/ProtectedRoute'
import { AuthRedirect } from './routes/authRedirect'


function App() {

  return (
    <Routes>

      <Route path="/" element={<Home />} />

      {/* USER LOGIN */}
      <Route
        path="/login"
        element={
          <AuthRedirect role="user">
            <UserLogin />
          </AuthRedirect>
        }
      />

      <Route path="/signup" element={<UserSignUp />} />

      {/* CAPTAIN LOGIN */}
      <Route
        path="/captain-login"
        element={
          <AuthRedirect role="captain">
            <CaptainLogin />
          </AuthRedirect>
        }
      />

      <Route path="/captain-signup" element={<CaptainSignUp />} />

      {/* USER DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRole="user">
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* CAPTAIN DASHBOARD */}
      <Route
        path="/captain-dashboard"
        element={
          <ProtectedRoute allowedRole="captain">
            <CaptainDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  )
}

export default App