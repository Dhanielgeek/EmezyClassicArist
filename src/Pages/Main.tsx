import Header from "../Components/Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"


const Main = () => {

  return (

    <div className="w-[100%] h-[auto] ">
       <Header/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default Main
