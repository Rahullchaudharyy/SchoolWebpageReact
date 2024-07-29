// eslint-disable-next-line no-unused-vars
import React from 'react'

const Home = () => {
  return (
    <div className='h-auto w-[100vw] md:flex bg-[#FDFDFD]'>
       <div className='h-auto w-[100%] md:w-[50%]   flex justify-center md:justify-start items-start md:items-center'>

           <div className='h-auto w-auto p-[17vmin] md:p-0 md:pl-[5vmin] md:h-[70vmin] md:w-[80vmin]  flex flex-col justify-center items-center md:items-start mt-[8vmin] md:mt-0'>
              <h1 className='text-[7vmin] font-semibold'>Welcome !! </h1>
              <h2 className='text-[5vmin] font-bold'>Springdale Public School</h2>
              <h4 className='text-center md:text-start text-[3vmin] font-semibold '>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</h4>
              <button className='bg-orange-400 p-3 rounded-xl mt-[4vmin]'>Join Us Today</button>
           </div>

       </div>
       <div className='h-auto w-[100%] md:w-[50%]  flex justify-center  items-start md:items-center'>
       <div className='h-auto w-auto p-[10vmin]  md:h-[70vmin] md:w-[80vmin] flex flex-col justify-center items-center md:items-start mt-[8vmin] md:mt-0'>
              <img src="https://i.postimg.cc/y8djhrMk/32187cfa-6729-4430-b352-1d798ad10b44.jpg" alt="" />
           </div>     

       </div>
    </div>
  );
};

export default Home;
