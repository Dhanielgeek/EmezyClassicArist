
import heroimg from '../assets/heroimg.svg'
import line1 from '../assets/line1.png'
import line2 from '../assets/line2.png'
import aboutimg from '../assets/aboutimg.svg'
import galleryimg1 from '../assets/galleryimg1.png'
import galleryimg2 from '../assets/galleryimg2.png'
import galleryimg3 from '../assets/galleryimg3.png'
import galleryimg4 from '../assets/galleryimg4.png'
import galleryimg5 from '../assets/galleryimg5.png'
import galleryimg6 from '../assets/galleryimg6.png'
import { AiOutlineSetting } from "react-icons/ai"
import { BsFillVolumeUpFill } from "react-icons/bs"
import { BsPlayCircle } from "react-icons/bs";
import songimg1 from '../assets/songimg1.png'
import contactBackgroundimg from '../assets/contactBackgroundimg.svg'
import { VscMail } from "react-icons/vsc";
import { BsPersonFill } from "react-icons/bs";
import heroimg2 from '../assets/heroimg2.png'



const LandingPage = () => {
  return (
      <div className="w-[100%] h-auto pt-[100px] phone:pt-10">
        <div className="w-[100%] h-[650px] bg-black flex justify-between phone:justify-center phone:h-[500px] ">
          <div className="w-[50%] h-[100%] phone:hidden "><img className="w-full h-full object-fill" src={heroimg} alt=""/></div>
          <div className="w-[45%] h-[100%] flex flex-col justify-center gap-6 relative phone:w-[90%] phone:items-center ">
            <h1 className="text-4xl text-[white] font-bold ">Emzey</h1>
            <h1 className="text-2xl text-[white] font-semibold phone:text-center ">Without Music <br/><span className="font-light ">Life Would Be a Mistake</span> </h1>
            <p className="text-[white] phone:text-center ">TWITTER | FACEBOOK | INSTAGRAM | YOUTUBE</p>
            <div className="w-[70%] h-[50px] flex items-center gap-3 ">
              <p className="text-xl text-[white] font-semibold phone:font-medium ">Feature Album</p>
              <img className="h-5  phone:h-2" src={line1} alt="" />
            </div>
            <div className="w-[530px] h-[250px] bg-[#fff] rounded-xl absolute bottom-[-110px] left-[-100px] phone:left-[0px] p-7 flex justify-between shadow-lg phone:h-[170px] phone:w-[350px] ">
              <div className="w-[40%] h-[100%] "><img className="w-full h-full object-fill " src={heroimg2} alt=""/></div>
              <div className="w-[55%] h-[100%] flex flex-col items-end justify-between ">
                <div className="w-[50%] h-[45%] text-[#1A54BF] phone:h-[30%] "><BsPlayCircle className="w-full h-full cursor-pointer " /></div>
                <div className="w-[100%] h-[50%] flex flex-col justify-center ">
                  <p className="text-2xl text-[#CBCBCB] phone:text-lg ">Solo Album</p>
                  <p className="text-2xl font-semibold phone:text-lg">The Light Side of the Moon Vol.2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[200px] mt-[70px] p-20 flex flex-col gap-5 phone:mt-32 phone:justify-center phone:items-center ">
          <nav className="text-2xl text-[#06358D] cursor-pointer phone:text-xl ">Get Started Now</nav>
          <nav className="text-2xl font-semibold cursor-pointer phone:text-xl ">Read.With.Listen</nav>
        </div>
        <div className="w-[100%] h-auto mt-10 flex flex-col items-center gap-5 ">
          <h1 className="text-5xl font-semibold phone:text-3xl ">Gallery</h1>
          <div className="w-[100%] p-20 bg-[black] flex gap-[70px] flex-wrap phone:p-10 ">
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center phone:w-[100%] "><img className="w-full h-[90%] object-contain" src={galleryimg1} alt=""/></div>
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center phone:w-[100%] "><img className="w-full h-[90%] object-contain" src={galleryimg2} alt=""/></div>
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center phone:w-[100%] "><img className="w-full h-[90%] object-contain" src={galleryimg3} alt=""/></div>
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center phone:w-[100%] "><img className="w-full h-[90%] object-contain" src={galleryimg4} alt=""/></div>
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center phone:w-[100%] "><img className="w-full h-[90%] object-contain" src={galleryimg5} alt=""/></div>
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center phone:w-[100%] "><img className="w-full h-[90%] object-contain" src={galleryimg6} alt=""/></div>
          </div>
        </div>
        <div className="w-[100%] h-auto p-20 mt-10 flex gap-5 phone:flex-col phone:p-10 phone:gap-0">
          <div className="w-[40%] h-[650px] phone:w-[100%] "><img className="w-full h-full object-fill rounded-3xl " src={aboutimg} alt=""/></div>
          <div className="w-[55%] h-auto flex flex-col gap-5 phone:w-[100%] text-center phone:gap-3 ">
            <h1 className="text-5xl font-semibold mb-5 phone:text-3xl phone:mb-0 ">About Me</h1>
            <p className="pr-20 text-xl phone:pr-0 ">
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="w-[40%] h-[50px] text-2xl phone:text-lg text-[#06358D] flex gap-2 items-center ">
              <p>See more</p>
              <div className="w-[15%] h-[50%] "><img className="w-full h-full object-contain" src={line2} alt=""/></div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-auto mt-10 flex flex-col items-center gap-8 p-20 ">
          <h1 className="text-5xl font-semibold ">Songs</h1>
          <div className="w-[100%] h-auto flex flex-col gap-3 pl-20 ">
            <p className="text-3xl ">Latest Release</p>
            <p className=" text-3xl text-[#06358D] ">@Emzey</p>
          </div>
          <div className="w-[100%] h-auto border border-[black] rounded-xl px-20 py-10 flex flex-col gap-10 ">
            <div className="w-[60%] h-[40%] flex justify-between items-end ">
              <div className="w-[10%] h-[100%] rounded-full "><img className="w-full h-full object-fill" src={songimg1} alt="" /></div>
              <div className="w-[56%] h-[100%] flex flex-col justify-between ">
                <h1 className="text-2xl font-semibold ">Call Of Love</h1>
                <div className="w-[100%] h-[80%] flex items-center justify-between ">
                  <p>Emzey</p>
                  <div className="w-[85%] h-[100%] flex items-center justify-between ">
                    <div className="w-[9%] h-[80%] flex items-center "><BsPlayCircle className="w-full h-full cursor-pointer " /></div>
                    <input type="range" value={0} className="w-[88%] h-3 "/>
                  </div>
                </div>
              </div>
              <div className="w-[30%] h-[60%] flex  items-center gap-2 ">
                <p className="text-xl ">3:49</p>
                <div className="w-[10%] h-[50%] "><BsFillVolumeUpFill className="w-full h-full" /></div>
                <div className="w-[10%] h-[50%] "><AiOutlineSetting className="w-full h-full" /></div>
              </div>
            </div>
            <div className="w-[60%] h-[40%] flex justify-between items-end ">
              <div className="w-[10%] h-[100%] rounded-full "><img className="w-full h-full object-fill" src={songimg1} alt="" /></div>
              <div className="w-[56%] h-[100%] flex flex-col justify-between ">
                <h1 className="text-2xl font-semibold ">Call Of Love</h1>
                <div className="w-[100%] h-[80%] flex items-center justify-between ">
                  <p>Emzey</p>
                  <div className="w-[85%] h-[100%] flex items-center justify-between ">
                    <div className="w-[9%] h-[80%] flex items-center "><BsPlayCircle className="w-full h-full cursor-pointer " /></div>
                    <input type="range" value={0} className="w-[88%] h-3 "/>
                  </div>
                </div>
              </div>
              <div className="w-[30%] h-[60%] flex  items-center gap-2 ">
                <p className="text-xl ">3:49</p>
                <div className="w-[10%] h-[50%] "><BsFillVolumeUpFill className="w-full h-full" /></div>
                <div className="w-[10%] h-[50%] "><AiOutlineSetting className="w-full h-full" /></div>
              </div>
            </div>
            <div className="w-[60%] h-[40%] flex justify-between items-end ">
              <div className="w-[10%] h-[100%] rounded-full "><img className="w-full h-full object-fill" src={songimg1} alt="" /></div>
              <div className="w-[56%] h-[100%] flex flex-col justify-between ">
                <h1 className="text-2xl font-semibold ">Call Of Love</h1>
                <div className="w-[100%] h-[80%] flex items-center justify-between ">
                  <p>Emzey</p>
                  <div className="w-[85%] h-[100%] flex items-center justify-between ">
                    <div className="w-[9%] h-[80%] flex items-center "><BsPlayCircle className="w-full h-full cursor-pointer " /></div>
                    <input type="range" value={0} className="w-[88%] h-3 "/>
                  </div>
                </div>
              </div>
              <div className="w-[30%] h-[60%] flex  items-center gap-2 ">
                <p className="text-xl ">3:49</p>
                <div className="w-[10%] h-[50%] "><BsFillVolumeUpFill className="w-full h-full" /></div>
                <div className="w-[10%] h-[50%] "><AiOutlineSetting className="w-full h-full" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-auto bg-[#1D1719] flex px-20 relative phone:px-0 ">
          <div className="w-[70%] h-[750px] phone:w-[100%] "><img className="w-full h-full object-fill phone:object-cover " src={contactBackgroundimg} alt=""/></div>
          <div className="w-[700px] h-auto py-5 absolute right-[150px] phone:right-[0px] top-[100px] flex flex-col items-center gap-10 phone:w-[390px] phone:px-10 ">
            <h1 className="text-white text-5xl font-semibold phone:text-3xl ">Contact Me</h1>
            <div className="w-[100%] h-auto flex flex-col gap-3 items-center ">
              <div className="w-[80%] h-[60px] rounded-lg flex justify-between phone:w-[100%]  border border-[#CBCBCB] ">
                <div className="w-[10%] h-[100%] flex items-center justify-center text-[#CBCBCB] "><BsPersonFill className="w-7 h-7" /></div>
                <input type="text" placeholder="Name" className="w-[90%] h-[100%] pl-5 bg-transparent outline-none text-[#fff] "/>
              </div>
              <div className="w-[80%] h-[60px] rounded-lg flex justify-between phone:w-[100%]  border border-[#CBCBCB] ">
                <div className="w-[10%] h-[100%] flex items-center justify-center text-[#CBCBCB] "><VscMail className="w-7 h-7" /></div>
                <input type="text" placeholder="Email" className="w-[90%] h-[100%] pl-5 bg-transparent outline-none text-[#fff]  "/>
              </div>
            </div>
            <textarea typeof='text' cols={10} rows={5} placeholder='Message' className="w-[80%] h-[200px] bg-transparent rounded-lg phone:w-[100%] border border-[#CBCBCB] text-center text-[#fff] p-10 " />
            <button className="w-[80%] h-[65px] bg-[#06358D] text-[#CBCBCB] text-lg font-semibold rounded-lg phone:w-[100%] ">Send Message</button>
          </div>
        </div>
      </div>
  )
}

export default LandingPage