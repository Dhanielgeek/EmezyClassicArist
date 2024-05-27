import Logo from '../assets/emezy.png'
import { MdOutlineDashboard } from "react-icons/md";

const Menu = () => {
  return (
    <div className="w-[100%] h-[100%] bg-black flex flex-col justify-around ">
      <div className="w-[100%] h-[25%] flex justify-center items-center">
        <img src={Logo} alt="" className='w-[100%] h-[100%] object-cover' />
      </div>
      <div className='w-[100%] h-[55%] flex justify-around items-center flex-col'>
        <div  className='w-[100%] h-[13%]  flex justify-center items-center'>
          <div className='w-[90%] h-[90%]  flex justify-center gap-3 items-center'>
            <MdOutlineDashboard className='text-2xl text-[white]'/>
            <p className='text-xl text-white font-medium'>Overview</p>
          </div>
        </div>
        <div  className='w-[100%] h-[13%] flex justify-center items-center'>
          <div className='w-[90%] h-[90%]  flex justify-center gap-3 items-center'>
            <MdOutlineDashboard className='text-2xl text-[white]'/>
            <p className='text-xl text-white font-medium'>Overview</p>
          </div>
        </div>
        <div  className='w-[100%] h-[13%]  flex justify-center items-center'>
          <div className='w-[90%] h-[90%]  flex justify-center gap-3 items-center'>
            <MdOutlineDashboard className='text-2xl text-[white]'/>
            <p className='text-xl text-white font-medium'>Overview</p>
          </div>
        </div>
        <div  className='w-[100%] h-[13%] flex justify-center items-center'>
          <div className='w-[90%] h-[90%]  flex justify-center gap-3 items-center'>
            <MdOutlineDashboard className='text-2xl text-[white]'/>
            <p className='text-xl text-white font-medium'>Overview</p>
          </div>
        </div>
        <div  className='w-[100%] h-[13%] flex justify-center items-center'>
          <div className='w-[90%] h-[90%]  flex justify-center gap-3 items-center'>
            <MdOutlineDashboard className='text-2xl text-[white]'/>
            <p className='text-xl text-white font-medium'>Overview</p>
          </div>
        </div>

      </div>
      <div className='w-[100%] h-[15%] bg-green-500'></div>
    </div>
  )
}

export default Menu