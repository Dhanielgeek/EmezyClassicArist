import logo from '../assets/logo.svg'


const Header = () => {

  return (

    <div className="w-[100%] h-[100px] flex justify-around items-center ">
      <div className="w-[6%] h-[80%] "><img className='w-full h-full ' src={logo} alt=""/></div>
      <div className="w-[60%] h-[100%] flex justify-around items-center text-xl font-medium ">
        <nav className='cursor-pointer'>Home</nav>
        <nav className='cursor-pointer'>About me</nav>
        <nav className='cursor-pointer'>Gallery</nav>
        <nav className='cursor-pointer'>Songs</nav>
        <nav className='cursor-pointer'>Contact</nav>
      </div>
    </div>

  )
}

export default Header