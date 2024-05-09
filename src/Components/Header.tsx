import { useState } from 'react'
import logo from '../assets/emezy.png'
import { MdOutlineMenu } from 'react-icons/md'
import {MdOutlineClear} from 'react-icons/md'
import {ScrollToAboutMe, ScrollToHome, ScrollToGallery, ScrollToSongs, ScrollToContact} from './ScrollToComponent';
import 'animate.css';


const Header = () => {

const [Toggle, SetToggle] = useState(false)

const HandleToggle = ()=>{
  SetToggle(!Toggle)
}


  return (

    <div className="w-[100%] h-[80px] bg-[#1B1618] flex justify-around items-center fixed z-50 phone:h-[70px] phone:justify-between phone:px-10 shadow-sm shadow-[#6f6f6f] ">
      <div className="w-[10%] h-[80%] animate__animated animate__bounce  "><img className='w-full h-full object-cover ' src={logo} alt=""/></div>
      <div className="w-[60%] h-[100%] flex justify-around items-center text-xl text-[#FDFDF7]  font-bold phone:hidden ">
        <ScrollToHome scrollToId="home"/>
        <ScrollToAboutMe scrollToId="about_me" />
        <ScrollToGallery scrollToId='gallery' />
        <ScrollToSongs scrollToId='songs' />
        <ScrollToContact scrollToId='contact' />
      </div>
      <div className='MobileView relative'>
        {
          Toggle ? <MdOutlineClear onClick={HandleToggle} className='text-[#FDFDF7] font-bold text-3xl'/> : <MdOutlineMenu onClick={HandleToggle} className='text-[#FDFDF7] font-bold text-3xl'/>
        }
        {
          Toggle ? (
            <div onClick={HandleToggle} className='w-[20rem] h-[95vh] bg-[#00000081] absolute z-10 top-[99.5%] right-[-90px] flex justify-start items-start flex-col phone:w-[29rem] smallPhone:w-[25rem]'>
              <div className=' w-[100%] h-[60%] bg-[#1B1618] flex justify-around items-start flex-col px-5 rounded-br-xl border-r border-b '>
                <nav className='w-[100%] h-[20%] flex items-center pl-5 border-b text-[#FDFDF7]  font-bold'><ScrollToHome scrollToId="home"/></nav>
                <nav className='w-[100%] h-[20%] flex items-center pl-5 border-b text-[#FDFDF7]  font-bold'><ScrollToAboutMe scrollToId="about_me" /></nav>
                <nav className='w-[100%] h-[20%] flex items-center pl-5 border-b text-[#FDFDF7]  font-bold'><ScrollToGallery scrollToId='gallery' /></nav>
                <nav className='w-[100%] h-[20%] flex items-center pl-5 border-b text-[#FDFDF7]  font-bold'><ScrollToSongs scrollToId='songs' /></nav>
                <nav className='w-[100%] h-[20%] flex items-center pl-5 text-[#FDFDF7]  font-bold'><ScrollToContact scrollToId='contact' /></nav>
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