import React, {useRef} from 'react'
import ProjectCard from './ProjectCard'
import {HiArrowSmLeft, HiArrowSmRight} from 'react-icons/hi'

const ProjectSection = () => {
    const scrollRef = useRef(null)

    const scrollRight = ()=>{
        scrollRef.current.scrollLeft += 500
    }
    const scrollLeft = ()=>{
        scrollRef.current.scrollLeft -= 500
    }
  return (
    <div data-aos="fade-down-right" className='mb-20 lg:mb-36'>
        <h1 className='text-5xl lg:text-7xl gradiant-text my-10'>My Project</h1>
        <div ref={scrollRef} className='flex overflow-x-scroll p-5 scroll-bar2 gap-8'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        </div>
        <div className='flex justify-center items-center gap-3'>
            <HiArrowSmLeft onClick={scrollLeft}  className='text-xl lg:text-2xl cursor-pointer my-2 select-none text-yellow-400 hidden lg:block'/>
            <h2 className='gradiant-text font-mono text-lg uppercase'>Slide for more</h2>
            <HiArrowSmRight onClick={scrollRight} className='text-xl lg:text-2xl cursor-pointer my-2 select-none text-yellow-400 hidden lg:block'/>
        </div>
    </div>
  )
}

export default ProjectSection