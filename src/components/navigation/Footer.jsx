import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 place-items-center pt-spacersm md:pt-spacermd lg:pt-spacerlg">
        <h3 className="font-good text-herosm md:text-heromd lg:text-herolg">Say hello</h3>
        <div className="flex gap-8 h-24 items-center space-evenly">
            <a href="" className="text-labelsm md:text-labelmd lg:text-labellg">Devjoakimpedersen@gmail.com</a>
            <a href="" className="text-labelsm md:text-labelmd lg:text-labellg">+47-47832742</a>
        </div>
    </div>
  )
}

export default Footer