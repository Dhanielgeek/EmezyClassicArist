import Header from "../Components/Header"
import { Outlet } from "react-router-dom"


const Main = () => {

  return (

    <div className="w-[100%] h-[auto] ">
       <Header/>
       <Outlet/>
    </div>
  )
}

export default Main
