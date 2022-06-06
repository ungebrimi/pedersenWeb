import React from 'react'

const Techstack = () => {
  return (
    <div className="relative text-labelsm md:text-labelmd lg:text-labellg flex">
        <ul className="techlist1 absolute border-4 px-24 py-4 heading border-fonts text-left text-xl font-bold rounded-3xl">
            <li>webgl</li>
            <li>react</li>
            <li>nextjs</li>
            <li>three.js</li>
            <li>gsap</li>
        </ul>
        <ul className="heading techlist2 absolute grid place-items-start py-4 px-24 darkgradient text-xl text-left rounded-3xl">
            <li>css</li>
            <li>blockchain</li>
            <li>threefiber</li>
            <li>cms</li>
            <li>api</li>
        </ul>
    </div>
  )
}

export default Techstack