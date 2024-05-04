import Header from "../Components/Header"
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


const LandingPage = () => {
  return (
    <div className="w-[100%] h-[auto] ">
      <Header/>
      <div className="w-[100%] h-auto ">
        <div className="w-[100%] h-[620px] bg-black flex justify-between ">
          <div className="w-[50%] h-[100%] "><img className="w-full h-full object-cover" src={heroimg} alt=""/></div>
          <div className="w-[45%] h-[100%] flex flex-col justify-center gap-6 relative ">
            <h1 className="text-4xl text-[white] font-bold ">Emzey</h1>
            <h1 className="text-2xl text-[white] font-semibold ">Without Music <br/><span className="font-light ">Life Would Be a Mistake</span> </h1>
            <p className="text-[white] ">TWITTER | FACEBOOK | INSTAGRAM | YOUTUBE</p>
            <div className="w-[70%] h-[50px] flex items-center gap-3 ">
              <p className="text-xl text-[white] font-semibold ">Feature Album</p>
              <img className="h-5 " src={line1} alt="" />
            </div>
            <div className="w-[500px] h-[220px] bg-[green] rounded-xl absolute bottom-[-110px] left-[-100px] ">

            </div>
          </div>
        </div>
        <div className="w-[100%] h-[200px] mt-[70px] p-20 flex flex-col gap-5 ">
          <nav className="text-2xl text-[#06358D] cursor-pointer ">Get Started Now</nav>
          <nav className="text-2xl font-semibold cursor-pointer ">Read.With.Listen</nav>
        </div>
        <div className="w-[100%] h-auto mt-10 flex flex-col items-center gap-5 ">
          <h1 className="text-5xl font-semibold ">Gallery</h1>
          <div className="w-[100%] p-20 bg-[black] flex gap-[70px] flex-wrap ">
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center "><img className="w-full h-[90%] object-contain" src={galleryimg1} alt=""/></div>
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center "><img className="w-full h-[90%] object-contain" src={galleryimg2} alt=""/></div>
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center "><img className="w-full h-[90%] object-contain" src={galleryimg3} alt=""/></div>
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center "><img className="w-full h-[90%] object-contain" src={galleryimg4} alt=""/></div>
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center "><img className="w-full h-[90%] object-contain" src={galleryimg5} alt=""/></div>
            <div className="w-[30%] h-[300px] bg-[#E7E0E0] rounded-xl flex items-center "><img className="w-full h-[90%] object-contain" src={galleryimg6} alt=""/></div>
          </div>
        </div>
        <div className="w-[100%] h-auto p-20 mt-10 flex gap-5">
          <div className="w-[40%] h-[650px] "><img className="w-full h-full object-fill rounded-3xl " src={aboutimg} alt=""/></div>
          <div className="w-[55%] h-auto flex flex-col gap-5 ">
            <h1 className="text-5xl font-semibold mb-5 ">About Me</h1>
            <p className="pr-20 text-xl ">
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="w-[40%] h-[50px] text-2xl text-[#06358D] flex gap-2 items-center ">
              <p>See more</p>
              <div className="w-[15%] h-[50%] "><img className="w-full h-full object-contain" src={line2} alt=""/></div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[300px] bg-[yellow] mt-10 flex flex-col items-center gap-5 ">
          <h1 className="text-5xl font-semibold ">Songs</h1>
          <div className="w-[100%] h-auto bg-[red] pl-40 flex flex-col gap-3 ">
            <p className="text-3xl ">Latest Release</p>
            <p className=" text-3xl text-[#06358D] ">@Emzey</p>
          </div>
          <div className="">

          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage