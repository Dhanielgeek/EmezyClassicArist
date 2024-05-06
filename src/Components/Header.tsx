import { useState } from 'react'
import logo from '../assets/logo.svg'
import { MdOutlineMenu } from 'react-icons/md'
import {MdOutlineClear} from 'react-icons/md'


const Header = () => {

const [Toggle, SetToggle] = useState(false)

const HandleToggle = ()=>{
  SetToggle(!Toggle)
}


  return (

    <div className="w-[100%] h-[100px] bg-[#fff] flex justify-around items-center fixed z-50 phone:h-[70px] phone:justify-between phone:px-10 shadow-sm shadow-[#6f6f6f] ">
      <div className="w-[8%] h-[80%] "><img className='w-full h-full ' src={logo} alt=""/></div>
      <div className="w-[60%] h-[100%] flex justify-around items-center text-xl font-medium phone:hidden ">
        <nav className='cursor-pointer'>Home</nav>
        <nav className='cursor-pointer'>About me</nav>
        <nav className='cursor-pointer'>Gallery</nav>
        <nav className='cursor-pointer'>Songs</nav>
        <nav className='cursor-pointer'>Contact</nav>
      </div>
      <div className='MobileView relative'>
        {
          Toggle ? <MdOutlineClear onClick={HandleToggle}/> : <MdOutlineMenu onClick={HandleToggle}/>
        }
        {
          Toggle ? (
            <div className='w-[20rem] h-[95vh] bg-[#00000081] absolute z-10 top-[99.5%] right-[-90px] flex justify-start items-start flex-col phone:w-[29rem] smallPhone:w-[25rem]'>
              <div className=' w-[100%] h-[60%] bg-[#fff] flex justify-around items-start flex-col px-5 rounded-br-xl border-r border-b '>
                <nav className='w-[100%] h-[20%] flex items-center pl-5 border-b cursor-pointer text-[black] '>Home</nav>
                <nav className='w-[100%] h-[20%] flex items-center pl-5 border-b cursor-pointer text-[black] '>About me</nav>
                <nav className='w-[100%] h-[20%] flex items-center pl-5 border-b cursor-pointer text-[black] '>Gallery</nav>
                <nav className='w-[100%] h-[20%] flex items-center pl-5 border-b cursor-pointer text-[black] '>Songs</nav>
                <nav className='w-[100%] h-[20%] flex items-center pl-5 cursor-pointer text-[black] '>Contact</nav>
              </div>
            </div>
            )
          : null
        }
      
      </div>
    </div>

  )
}

export default Header