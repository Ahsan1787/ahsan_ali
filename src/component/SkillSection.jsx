import React from 'react'
import SkillCard from './SkillCard'

const SkillSection = () => {
  return (
    <div data-aos="fade-right" className='mb-20 lg:mb-36'>
        <h1 className='text-5xl lg:text-7xl gradiant-text my-10'>My Skills</h1>
        <div className='h-[300px] overflow-y-scroll select-none scroll-bar'>
        <SkillCard title={'HTML'} value={80}/>
        <SkillCard title={'CSS'} value={70}/>
        <SkillCard title={'JS'} value={80}/>
        <SkillCard title={'REACT JS'} value={75}/>
        <SkillCard title={'NODE JS'} value={85}/>
        <SkillCard title={'EXPRESS JS'} value={90}/>
        <SkillCard title={'MONGO DB'} value={92}/>
        <SkillCard title={'TAILWIND CSS'} value={90}/>
        <SkillCard title={'BOOTSTRAP'} value={90}/>
        </div>
    </div>
  )
}

export default SkillSection