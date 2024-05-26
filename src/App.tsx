import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from "./Auth/Login"
import Sign from "./Auth/Sign"
// import Welcome from "./Pages/Welcome"
import LandingPage from "./Pages/LandingPage"
import Main from './Pages/Main'
import Admin from './Admin/Admin'
import Overview from './Admin/Overview'
import AddClothe from './Admin/AddClothe'



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
    path: 'admin',
    element: <Admin/>,
    children : [
      {
        path : 'overview',
        element : (<Overview/>)
      },
      {
        path : 'add-cloth',
        element : (<AddClothe/>)
      },
    
    ]
  },
  {
    path : '/',
    element : <Main/>,
    children : [
      {
        path : '',
        element : (<LandingPage/>)
      },
    ]
    
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