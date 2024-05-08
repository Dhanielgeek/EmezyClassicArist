import logo from '../assets/logo.svg'
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import {ScrollToAboutMe, ScrollToHome, ScrollToGallery, ScrollToSongs, ScrollToContact} from './ScrollToComponent';

const Footer = () => {

  return (

    <div className="w-[100%] h-[500px] mt-20 flex justify-around phone:flex-col phone:p-10 phone:h-[1100px] ">
      <div className='w-[20%] h-[100%] flex justify-center pt-20 phone:w-[50%] phone:pt-0 phone:h-[20%] '>
        <div className='w-[40%] h-[30%] phone:w-[100%] phone:h-[100%] '><img className='w-full h-full' src={logo} alt=""/></div>
      </div>
      <div className='w-[50%] h-[100%] pt-20 flex justify-between phone:pt-10 phone:w-[100%] phone:flex-col phone:gap-10 '>
        <div className='w-[30%] h-[90%] flex flex-col gap-5 phone:w-[100%] phone:items-center '>
          <h1 className='text-4xl font-semibold phone:text-3xl'>Company</h1>
          <p className='text-2xl phone:text-xl '><ScrollToHome scrollToId="home"/></p>
          <p className='text-2xl phone:text-xl '><ScrollToAboutMe scrollToId="about_me" /></p>
          <p className='text-2xl phone:text-xl '><ScrollToGallery scrollToId='gallery' /></p>
          <p className='text-2xl phone:text-xl '><ScrollToSongs scrollToId='songs' /></p>
          <p className='text-2xl phone:text-xl '><ScrollToContact scrollToId='contact' /></p>
        </div>
        <div className='w-[30%] h-[90%] flex flex-col gap-5 phone:w-[100%] phone:items-center '>
          <h1 className='text-4xl font-semibold phone:text-3xl'>Documentary</h1>
          <p className='text-2xl phone:text-xl cursor-pointer hover:text-[blue] '>Help center</p>
          <p className='text-2xl phone:text-xl '><ScrollToContact scrollToId='contact' /></p>
          <p className='text-2xl phone:text-xl cursor-pointer hover:text-[blue] '>Privacy</p>
        </div>
        <div className='w-[30%] h-[90%] flex flex-col gap-5 phone:w-[100%] phone:items-center '>
          <h1 className='text-4xl font-semibold phone:text-3xl'>Socials</h1>
          <p className='text-2xl phone:text-xl cursor-pointer hover:text-[blue] '>Facebook</p>
          <p className='text-2xl phone:text-xl cursor-pointer hover:text-[blue] '>Twitter</p>
          <p className='text-2xl phone:text-xl cursor-pointer hover:text-[blue] '>Youtube</p>
          <div className='w-[60%] h-[70px] flex gap-4 '>
            <div className='w-[20%] h-[100%] cursor-pointer '><BsFacebook className='w-full h-full text-[blue] ' /></div>
            <div className='w-[20%] h-[100%] cursor-pointer '><BsTwitterX className='w-full h-full ' /></div>
            <div className='w-[20%] h-[100%] cursor-pointer '><BsYoutube className='w-full h-full text-[red] ' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
