import styled from "styled-components"
import men from '../assets/menu.png'
import pond from '../assets/pound.png';
import pro from '../assets/user.png';
import cart from '../assets/grocery-store.png';
import arrow from '../assets/left-arrow.png'



const Header =styled.header`
width:100%;
height:13%;
background:beige;

`
const Heading=styled.h1`
font-family: Rubik;
font-size:65px;
font-weight:750
`


const Login = () => {
  return (
<div className="w-full h-screen " >

  <Header className="flex justify-between items-center">
<div className="w-[10%] h-[100%] flex justify-center items-center" >
  <img src={men} alt="" className="w-[30%] h-[30%] object-contain" />
</div>
<Heading className="w-[50%] h-[100%] flex justify-center items-center  font-bold text-xl">
EMEZY
</Heading>
<div className="w-[18%] h-[100%] flex justify-start items-center" >

<img src={pond} alt="" className="w-[30%] h-[30%] object-contain" />

<img src={pro} alt="" className="w-[30%] h-[30%] object-contain" />

<img src={cart} alt="" className="w-[30%] h-[30%] object-contain" />
</div>
  </Header>

 <section className="w-[100%] h-[90vh]  flex items-center justify-center " style={{backgroundColor:'beige'}} >

 <div className="w-[40%] h-[80%] flex flex-col items-center justify-around gap-5 border border-solid border[grey] max-md:w-[80%]" >

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

    <section className="w-[100%] h-[5%]" > <h3>forgot password?</h3></section>

    <div className="w-[100%] h-[10%] flex justify-center  items-center">
      <button className="w-[60%] h-[80%] bg-[grey] rounded-md font-semibold text-[#FDFDF7] hover:text-white  hover:bg-[#4c4949] cursor-pointer">
        SIGNIN
      </button>
    </div>
    <div className="w-[100%] h-[8%] flex items-center justify-start" >
    <div className="w-[8%] h-[48%] flex justify-center items-start">
      <img src={arrow} alt="" className="w-[48%] h-[48%] object-contain" />
      </div>
      <div className="w-[90%] h-[89%]  flex items-start justify-start" >
        return to store
      </div>
    </div>
 </div>
 </section>
</div>
  )
}

export default Login