import styled from "styled-components"
import men from '../assets/menu.png'
import pond from '../assets/pound.png';
import pro from '../assets/user.png';
import cart from '../assets/grocery-store.png';
import notify from '../assets/bell.png'
// import { useState } from "react";


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


const Sign = () => {

// const [firstname,setFirstname] =useState('')
// const[lastname,setLastname] =useState('')
// const[email,setEmail] =useState('')
// const[password, setPassword] =useState('')

// const handlefirstname = (e) =>{
// const newFirstname=e.target.value
// setFirstname (newFirstname)
// }

// const handlelastname = (e) =>{
//   const newLastname =e.target.value
//   setLastname (newLastname)
// }

// const handleemail = (e) =>{
//   const newEmail =e.target.value
//   setEmail (newEmail)
// }

// const handlepassword = (e) =>{
//   const newPassword =e.target.value
//   setPassword (newPassword)
// }

// const data ={firstname, lastname, email,password}
// const Url= https://emzey.onrender.com/signup

  return (
<div className="w-full h-screen ">

  <Header className="flex justify-between items-center ">
<div className="w-[10%] h-[100%] flex justify-center items-center" >
  <img src={men} alt="" className="w-[30%] h-[30%] object-contain" />
</div>
<Heading className="w-[40%] h-[100%] flex justify-center items-center bg-[beige]  font-bold text-xl">
EMEZY
</Heading>
<div className="w-[18%] h-[100%] flex justify-start items-center" >

<img src={pond} alt="" className="w-[30%] h-[30%] object-contain" />

<img src={pro} alt="" className="w-[30%] h-[30%] object-contain" />

<img src={cart} alt="" className="w-[30%] h-[30%] object-contain" />
</div>
  </Header>
  
 <section className="w-[100%] h-[110vh]  flex items-center justify-center " style={{backgroundColor:'beige'}}>
 <div className="w-[40%] h-[90%] flex flex-col items-center justify-center border border-soild border[lightgrey] gap-5 max-md:w-[80%] ">
    <div className="w-[100%] h-[8%] flex justify-start items-center px-2 font-bold text-xl" >
      CREATE ACCOUNT
    </div>

    <div className="w-[100%] h-[20%] flex justify-start items-center rounded " style={{backgroundColor:"lightgray"}} >
      <div className="w-[7%] h-[50%] flex justify-center items-start">
      <img src={notify} alt="" className="w-[45%] h-[45%] object-contain" />
      </div>


      <div className="w-[80%] h-[100%] flex  items-center">By creating an account, you’ll be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders and more.</div>
    </div>

    <div className="w-[100%] h-[62%] flex justify-between items-center flex-col">

      <div className="w-[100%] h-[22%] flex flex-col justify-center items-start gap-2 px-2" >
        <label className="font-semibold text-lg"> First name</label>
        <input type="text" required  placeholder="First name" className="w-[100%] h-[55%] rounded-lg px-2 border-2 bg-transparent font-semibold " />
      </div>

      <div className="w-[100%] h-[22%] flex flex-col justify-center items-start gap-2 px-2" >
        <label className="font-semibold text-lg"> Last name</label>
        <input type="text" required  placeholder="Last name" className="w-[100%] h-[55%] rounded-lg border-2 bg-transparent px-2 font-semibold" />
      </div>

      <div className="w-[100%] h-[22%] flex flex-col justify-center items-start gap-2 px-2" >
        <label className="font-semibold text-lg"> Email</label>
        <input type="text" required  placeholder="email" className="w-[100%] h-[55%] rounded-lg  border-2 bg-transparent px-2 font-semibold" />
      </div>

      <div className="w-[100%] h-[22%] flex flex-col justify-center items-start gap-2 px-2">
        <label className="font-semibold text-lg"> Password</label>
        <input type="text"  required
         placeholder="password" className="w-[100%] h-[55%] border-2 px-2 bg-transparent rounded-lg"/>
      </div>

    </div>

    <div className="w-[100%] h-[10%] flex justify-center  items-center" >
      <button className="w-[60%] h-[70%] bg-[grey] rounded-md hover:text-white  hover:bg-[#4c4949] cursor-pointer">
        CREATE
      </button>
    </div>
 </div>
 </section>
</div>
  )
}

export default Sign