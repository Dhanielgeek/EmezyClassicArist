import styled from "styled-components"
import Logo from '../assets/emezy.png'



const Header =styled.header`
width:100%;
height:14vh;
background:beige;
`



const Login = () => {
  return (
<div className="w-full h-screen " >

  <Header className="flex justify-start items-center phone:gap-2 phone:px-7">
    <div className="w-[10%] h-[100%]">
      <img src={Logo} alt="" className="w-[100%] h-[100%] object-cover" />
    </div>
    <h2 className="h2name font-bold text-2xl">EMEZY CLASSIC</h2>
  </Header>

 <section className="w-[100%] h-[95vh]  flex items-center justify-center  " style={{backgroundColor:'beige'}} >

 <div className="w-[40%] h-[80%] flex flex-col items-center justify-around gap-5 border border-solid border-gray-500 phone:w-[90%]" >

    <div className="w-[100%] h-[10%] flex justify-start items-center px-2 " >
       <h1 className="font-bold text-2xl text-[grey] max-md:text-lg">Sign in to your existing account</h1>
    </div>

    <div className="w-[100%] h-[40%] flex justify-between items-center flex-col" >

      <div className="w-[100%] h-[42%] flex flex-col justify-center items-start px-2  gap-2" >
        <label className="font-semibold text-md " > Email</label>
        <input type="text"
        required  placeholder="email" className="w-[100%] h-[68%] px-2 bg-transparent rounded-lg border-2"/>
      </div>

      <div className="w-[100%] h-[42%] flex flex-col justify-center items-start px-2 gap-2 " >
        <label className="font-semibold text-md" > Password</label>
        <input type="text"  required
         placeholder="password" className="w-[100%] h-[68%] px-2 rounded-lg bg-transparent border-2 "/>
      </div>
    </div>

    <section className="w-[100%] h-[5%] px-4" > <h3 className="font-semibold text-lg">Forgot password?</h3></section>

    <div className="w-[100%] h-[10%] flex justify-center  items-center">
      <button className="w-[60%] h-[80%] bg-[grey] rounded-md font-semibold text-[#FDFDF7] hover:text-white  hover:bg-[#4c4949] cursor-pointer">
        SIGNIN
      </button>
    </div>
    
 </div>
 </section>
</div>
  )
}

export default Login