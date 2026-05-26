import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUpAndSignIn from './SignUpAndSignIn'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/login",
            element:<SignUpAndSignIn/>
        }
    ])
  return (
    <>
        <RouterProvider router={appRouter} />
    </>
  )
}

export default Body