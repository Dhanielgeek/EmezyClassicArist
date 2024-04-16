import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WelcomePage from '../assets/ep.jpg';
import styled from 'styled-components';
import Love from '../assets/love2.png'

const Heading = styled.h3`
  font-family: "Dancing Script", cursive;
  color: #ED6203;

  @media screen and (max-width: 365px){
    font-size: 10px;
  }
`;

const ButtonHold = styled.button`
  font-family: "Whisper", cursive;
  font-weight: 600;
`;

const Welcome: React.FC = () => {
  
  return (
    <motion.div
      className="w-full h-screen relative"
      initial={{ translateY: '100vh' }} 
      animate={{ translateY: 0 }} 
      transition={{ type: 'spring', duration: 0.5 }} 
    >
      <img src={WelcomePage} alt='' className='w-full h-full object-cover absolute top-0 left-0'/>
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
        <section className='w-[60%] h-[70%]  flex justify-around items-center max-sm:flex-col-reverse max-sm:w-[90%] max-sm:h-[80%]'>
          <div className='w-[50%] h-[100%]  max-sm:w-[80%]'>
            <img src={WelcomePage} alt="" className='w-[100%] h-[100%] object-cover ' />
          </div>
          <div className='w-[50%] h-[100%]  flex justify-center items-center flex-col max-sm:h-[60%]'>
            <section className='w-[100%] h-[15%]  flex justify-center items-center'>
              <Heading className='font-bold text-xl max-sm:text-xl'>THE NEW EP</Heading>
            </section>
            <section className='w-[100%] h-[50%]   flex justify-around items-center flex-col'>
              <div className='w-[70%] h-[80%]   flex justify-center items-center '>
                <img src={Love} alt="" className='w-[100%] h-[100%] object-cover' />
              </div>
            <Heading>OUT NOW</Heading>
            </section>
            <section className='w-[100%] h-[25%] flex justify-around items-center flex-col max-sm:hidden'>
              <div className='w-[90%] h-[40%] border border-solid border-[#ED6203] flex justify-center items-center text-[#ED6203] font-bold cursor-pointer hover:bg-[#ED6203] hover:text-black max-sm:h-[40%]'>
                <Link to='https://ffm.to/love-richesep'>LISTEN</Link>
              </div>
              <div className='w-[90%] h-[40%]  border border-solid border-[#ED6203] flex justify-center items-center text-[#ED6203] font-bold cursor-pointer hover:bg-[#ED6203] hover:text-black max-sm:h-[40%]'>WATCH</div>
            </section>
          </div>
        </section>
        <section className='w-[60%] h-[20%]  flex  justify-around items-center max-sm:flex-col max-sm:w-[90%]'>
           <section className='w-[100%] h-[50%]  justify-around hidden items-center flex-col max-md:flex'>
              <div className='w-[90%] h-[40%] border border-solid border-[#ED6203] flex justify-center items-center text-[#ED6203] font-bold cursor-pointer hover:bg-[#ED6203] hover:text-black max-sm:h-[40%]'>
                <Link to='https://ffm.to/love-richesep'>LISTEN</Link>
              </div>
              <div className='w-[90%] h-[40%]  border border-solid border-[#ED6203] flex justify-center items-center text-[#ED6203] font-bold cursor-pointer hover:bg-[#ED6203] hover:text-black max-sm:h-[40%]'>WATCH</div>
            </section>
          <Link to="/main"  className="w-[100%] h-[40%]">
            <ButtonHold className="w-full h-full bg-[#ED6203] font-bold hover:bg-yellow-600 duration-300 max-sm:h-[60%]">ENTER SITE</ButtonHold>
          </Link>
        </section>
      </div>
    </motion.div>
  );
};

export default Welcome;
