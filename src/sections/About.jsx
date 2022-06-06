import React from 'react'
import Deliver from '../components/about/Deliver'
import Techstack from '../components/about/Techstack'
import Profile from '../components/about/Profile'
import AboutMe from '../components/about/AboutMe'
import RotatingKnot from '../components/about/RotatingKnot'
import Consider from '../components/about/Consider'
import GoingFurther from '../components/about/GoingFurther'

const About = () => {
  return (
    <div className="h-full px-paddingsm md:px-paddingmd lg:px-paddinglg py-32 w-screen grid grid-cols-1 lg:grid-cols-2 gap-32 place-items-center items-center">
        <Deliver />
        <Techstack />
        <Profile />
        <AboutMe />
        <GoingFurther />
        <RotatingKnot />
    </div>
  )
}

export default About
