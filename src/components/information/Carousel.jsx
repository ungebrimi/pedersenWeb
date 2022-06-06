import React, { useState } from 'react'
import { ProjectsData } from '../../data/ProjectsData'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'

function Carousel() {
    const [ current, setCurrent ] = useState(0)

    const length = ProjectsData.length

    const nextSlide = () => 
    {
        setCurrent(current === ProjectsData.length - 1 ? 0 : current + 1)
    }

    const previousSlide = () => 
    {
        setCurrent(current === 0 ? length - 1 : current -1)
    }

    const styleIcon = { color: "white", fontSize: "1.5em" }
    const styleIframe = { 
        width: "550px", 
        height: "300px", 
        border:"none", 
        outline: "none",
        borderRadius: "20px",
        zoom: "-50%",
    }

    return (
      <div className="grid place-items-center py-spacersm md:py-spacermd lg:py-spacerlg">
            {ProjectsData.map((slide, index) =>
            {
              return (
                  <div className="flex flex-col gap-8 md:flex-row px-4">
                    <div className={index === current ? 'active' : 'hidden'}>
                        <div className="relative p-0">
                            <iframe src={slide.url}  style={styleIframe}></iframe>
                            <div className="absolute text-4xl inset-y-2/4 left-2">
                                <MdOutlineArrowBackIos style={styleIcon} onClick={previousSlide}/>
                            </div>
                            <div className="absolute text-4xl inset-y-2/4 right-2">
                                <MdOutlineArrowForwardIos style={styleIcon} onClick={nextSlide}/>
                            </div>
                        </div>
                    </div>
                    <div className={index === current ? 'active' : 'hidden'}>
                        <a href={slide.url} className="text-center text-subtitlesm md:text-subtitlemd lg:text-subtitlelg font-good">{slide.title}</a>
                        <p className="max-w-md mt-4 text-labelsm md:text-labelmd lg:text-labellg">{slide.text}</p>
                        <a href={slide.url} className="border-b-2 pt-8">
                          Visit the page
                        </a>
                    </div>
                  </div>
              )
            })}
      </div>
    )
}

export default Carousel