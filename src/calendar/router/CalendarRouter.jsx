import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
import { CalendarPage } from "../"

export const CalendarRouter = () => {
  return (
    <Outlet />
  )
}

export const calendarRouter = createBrowserRouter([
  {
    path: '/',
    element: <CalendarPage />,
    children:[
      {
      
      }
    ]
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />
  }
])