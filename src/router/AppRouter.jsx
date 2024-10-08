import { RouterProvider } from "react-router-dom"
import { authRouter } from "../auth/router/AuthRoutes"
import { calendarRouter } from "../calendar/router/CalendarRouter"

export const AppRouter = () => {

  const authStatus = 'authenticated'//'not-authenticated'

  return (
    <>
      {
        (authStatus === 'not-authenticated')
          ? <RouterProvider router={authRouter} />
          : <RouterProvider router={calendarRouter} />
      }

    </>
  )
}
