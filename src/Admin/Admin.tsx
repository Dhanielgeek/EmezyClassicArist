import { Outlet } from "react-router-dom"
import AdminHeader from "./AdminHeader"
import Menu from "./Menu"


const Admin = () => {
  return (
    <div className="w-screen h-screen bg-green-500 flex">
      <div className="w-[17%] h-[100%]">
        <Menu/>
      </div>
      <div className="w-[100%] h-[100%] bg-purple-500">
        <AdminHeader/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Admin