import React from 'react'

const PortfolioCard = () => {
  return (
    <div data-aos="flip-left" data-aos-duration='2000' data-aos-easing="ease-cubic-out" className='px-5 lg:p-5 w-[80vw] lg:w-[30vw] backdrop-blur-md border select-none border-gray-500  text-white rounded-2xl my-20 lg:my-[200px] hover:scale-110 transition-all delay-100 hover:border-white shadow-lg'>
      <h3 className='text-4xl lg:text-6xl py-2 border-2 border-transparent border-b-gray-400 font-bold'>Portfolio*</h3>
      <h3 className='text-xl lg:text-2xl py-2 border-2 border-transparent border-b-gray-400'>Ahsan Ali</h3>
      <h3 className='text-xl lg:text-2xl py-2 '>MERN Stack Developer</h3>
    </div>
  )
}

export default PortfolioCard