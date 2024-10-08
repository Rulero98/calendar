import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
import { LoginPage } from "../"

export const AuthRoutes = () => {
  return (
    <Outlet />
  )
}

export const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    children: [
      {

      }
    ]
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />
  }
])