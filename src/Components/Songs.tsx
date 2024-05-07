import { AiOutlineSetting } from "react-icons/ai"
import { BsFillVolumeUpFill } from "react-icons/bs"
import { BsPlayCircle } from "react-icons/bs";
import songimg1 from '../assets/songimg1.png'

const Songs = () => {

  return (

    <div className="w-[70%] h-[40%] flex justify-between items-end phone:w-[100%] ">
        <div className="w-[10%] h-[100%] rounded-full "><img className="w-full h-full object-fill" src={songimg1} alt="" /></div>
        <div className="w-[56%] h-[100%] flex flex-col justify-between ">
        <h1 className="text-2xl font-semibold phone:text-sm ">Call Of Love</h1>
        <div className="w-[100%] h-[80%] flex items-center justify-between phone:text-xs ">
            <p>Emzey</p>
            <div className="w-[85%] h-[100%] flex items-center justify-between ">
            <div className="w-[9%] h-[80%] flex items-center "><BsPlayCircle className="w-full h-full cursor-pointer " /></div>
            <input type="range" value={0} className="w-[88%] h-3 "/>
            </div>
        </div>
        </div>
        <div className="w-[30%] h-[60%] flex  items-center gap-2 ">
        <p className="text-xl phone:text-xs ">3:49</p>
        <div className="w-[10%] h-[50%] "><BsFillVolumeUpFill className="w-full h-full" /></div>
        <div className="w-[10%] h-[50%] "><AiOutlineSetting className="w-full h-full" /></div>
        </div>
    </div>

  )
}

export default Songs
