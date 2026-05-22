import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const ProtectedRoute = () => {
  const { user } = useAuth()

  if (!user) {
    // user is not authenticated
    return <Navigate to="/auth" />
  }

  return <Outlet />
}
