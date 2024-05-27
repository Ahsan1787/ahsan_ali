import React from 'react'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const ContactSection = () => {
  return (
    <div data-aos="zoom-in-left" className='flex flex-col lg:flex-row lg:items-center mb-20 lg:mb36'>
        <span className='text-3xl lg:text-2xl gradiant-text font-bold mb-8 lg:mb-0 rotate-0 lg:-rotate-90'>Get Started!</span>
        <div className='flex flex-col lg:flex-row lg:ml-20 lg:gap-36'>
            <div className='mb-5 lg:mb-0'>
                <h1 className='text-3xl lg:text-5xl gradiant-text mb-5 lg:mb-10'>Contact me</h1>
                <div className='flex flex-col gap-2'>
                    <a href="mailto:mdahsanali1234567@gmail.com" className='font-mono text-white underline text-lg lg:text-2xl'>mdahsanali1234567@gmail.com</a>
                    <a href="tel:+8801882850589" className='font-mono text-white underline text-lg lg:text-2xl'>+8801882850589</a>
                
                </div>
                <div className='flex gap-2 mt-2'>
                    <AiFillFacebook className='text-white text-2xl'/>
                    <AiFillInstagram className='text-white text-2xl'/>
                </div>
                <h2 className='text-2xl font-bold font-mono text-white text-center'>Or</h2>
            </div>
            <div>
                <form action="" className='flex flex-col p-3'>
                    <input type="text" name="name" id="name" placeholder='Enter Your Name'  className='bg-transparent outline-none p-3 border focus:border-purple-500 focus-within:pl-8 transition-all duration-100 rounded-lg border-white font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]'/>
                    <input type="email" name="email" id="email" placeholder='Enter Your Email'  className='bg-transparent outline-none p-3 border focus:border-purple-500 focus-within:pl-8 transition-all duration-100 rounded-lg border-white font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]'/>
                    <textarea name="message" id="message" rows={3} className='bg-transparent outline-none p-3 border focus:border-purple-500 focus-within:pl-8 transition-all duration-100 rounded-lg border-white font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]' placeholder='Enter Your Message'></textarea>
                    <button type="submit" className='px-3 py-2 text-lg  lg:text-2xl bg-purple-500 hover:bg-purple-600 border font-mono font-bold text-white rounded-lg'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactSection