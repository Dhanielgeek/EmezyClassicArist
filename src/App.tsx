import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "./Auth/Login"
import Sign from "./Auth/Sign"
import Welcome from "./Pages/Welcome"


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/sign',
    element : <Sign/>
  },
  {
    path : '',
    element : <Welcome/>
  }
  
])






const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App